<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useApi } from '@/composables/useApi'
import { useNotification } from '@/composables/useNotification'
import BNavbar from '@/components/BNavbar.vue'
import BAutocomplete from '@/components/BAutocomplete.vue'
import BModal from '@/components/BModal.vue'
import BInput from '@/components/BInput.vue'
import type { PainPoint, IssueRelevance, ApiResponse } from '@/types'

const router = useRouter()
const { api } = useApi()
const { success, error } = useNotification()

const painPoints = ref<PainPoint[]>([])
const selectedPainPoints = ref<PainPoint[]>([])
const issues = ref<IssueRelevance[]>([])
const isLoading = ref(false)
const showPainPointModal = ref(false)
const newPainPointName = ref('')
const searchValue = ref('')

onMounted(async () => {
  await loadPainPoints()
})

async function loadPainPoints() {
  try {
    const response = await api.get<ApiResponse>('/api/painpoint/search')
    if (response.data.painpoints) {
      painPoints.value = response.data.painpoints
    }
  } catch (e) {
    error('Failed to load pain points')
  }
}

function onPainPointSelect(item: Record<string, unknown>) {
  const painPoint = item as unknown as PainPoint
  if (!selectedPainPoints.value.find(p => p.ID === painPoint.ID)) {
    selectedPainPoints.value.push(painPoint)
  }
  searchValue.value = ''
}

function removePainPoint(id: number) {
  selectedPainPoints.value = selectedPainPoints.value.filter(p => p.ID !== id)
}

async function createPainPoint() {
  if (!newPainPointName.value.trim()) return

  try {
    const response = await api.post<ApiResponse>('/api/painpoint/new', {
      name: newPainPointName.value
    })
    if (response.data.status) {
      success('Pain point created!')
      await loadPainPoints()
      showPainPointModal.value = false
      newPainPointName.value = ''
    }
  } catch (e) {
    error('Failed to create pain point')
  }
}

async function calculateIssues() {
  if (selectedPainPoints.value.length === 0) {
    error('Please select at least one pain point')
    return
  }

  isLoading.value = true
  try {
    const painPointIds = selectedPainPoints.value.map(p => p.ID)
    const response = await api.post<ApiResponse>('/api/issue/relevance', painPointIds)
    if (response.data.issues) {
      issues.value = response.data.issues.sort((a, b) => b.Relevance - a.Relevance)
    }
  } catch (e) {
    error('Failed to calculate issues')
  } finally {
    isLoading.value = false
  }
}

function getRelevanceLevel(relevance: number): string {
  if (relevance >= 0.666) return 'High'
  if (relevance >= 0.333) return 'Medium'
  return 'Low'
}

function getRelevanceClass(relevance: number): string {
  if (relevance >= 0.666) return 'bg-danger'
  if (relevance >= 0.333) return 'bg-warning'
  return 'bg-info'
}

function viewIssue(issue: IssueRelevance) {
  sessionStorage.setItem('issueId', String(issue.IssueID))
  router.push({ name: 'Risks' })
}
</script>

<template>
  <div class="insights-view">
    <BNavbar />

    <div class="container py-5">
      <div class="row">
        <div class="col-lg-5">
          <div class="card shadow mb-4">
            <div class="card-body">
              <h4 class="card-title mb-3">Select Pain Points</h4>
              <p class="text-muted small">
                What challenges is your business facing?
              </p>

              <div class="d-flex gap-2 mb-3">
                <div class="flex-grow-1">
                  <BAutocomplete
                    v-model="searchValue"
                    :items="painPoints"
                    display-key="Name"
                    placeholder="Search pain points..."
                    @select="onPainPointSelect"
                  />
                </div>
                <button
                  class="btn btn-outline-primary"
                  @click="showPainPointModal = true"
                >
                  + New
                </button>
              </div>

              <div class="selected-painpoints">
                <span
                  v-for="pp in selectedPainPoints"
                  :key="pp.ID"
                  class="badge bg-primary me-2 mb-2 p-2"
                >
                  {{ pp.Name }}
                  <button
                    type="button"
                    class="btn-close btn-close-white ms-2"
                    style="font-size: 0.6rem"
                    @click="removePainPoint(pp.ID)"
                  ></button>
                </span>
              </div>

              <button
                class="btn btn-primary w-100 mt-3"
                :disabled="isLoading || selectedPainPoints.length === 0"
                @click="calculateIssues"
              >
                {{ isLoading ? 'Analyzing...' : 'Find Related Issues' }}
              </button>
            </div>
          </div>
        </div>

        <div class="col-lg-7">
          <div class="card shadow">
            <div class="card-body">
              <h4 class="card-title mb-3">Related Business Issues</h4>

              <div v-if="issues.length === 0" class="text-center text-muted py-5">
                <p>Select pain points and click "Find Related Issues" to see results</p>
              </div>

              <div v-else class="issues-list">
                <div
                  v-for="issue in issues"
                  :key="issue.IssueID"
                  class="issue-card card mb-3 cursor-pointer"
                  @click="viewIssue(issue)"
                >
                  <div class="card-body d-flex justify-content-between align-items-center">
                    <div>
                      <h6 class="mb-1">{{ issue.Name }}</h6>
                      <small class="text-muted">Click to view details and solutions</small>
                    </div>
                    <span :class="['badge', getRelevanceClass(issue.Relevance)]">
                      {{ getRelevanceLevel(issue.Relevance) }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <BModal v-model:show="showPainPointModal" title="Add New Pain Point">
      <div class="mb-3">
        <label class="form-label">Pain Point Name</label>
        <BInput
          v-model="newPainPointName"
          placeholder="Enter pain point description"
        />
      </div>
      <template #footer>
        <button class="btn btn-secondary" @click="showPainPointModal = false">
          Cancel
        </button>
        <button class="btn btn-primary" @click="createPainPoint">
          Create Pain Point
        </button>
      </template>
    </BModal>
  </div>
</template>

<style scoped lang="scss">
.insights-view {
  min-height: 100vh;
  background-color: #f8f9fa;
}

.issue-card {
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
}

.cursor-pointer {
  cursor: pointer;
}
</style>
