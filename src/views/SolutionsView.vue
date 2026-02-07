<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useApi } from '@/composables/useApi'
import { useNotification } from '@/composables/useNotification'
import BNavbar from '@/components/BNavbar.vue'
import BModal from '@/components/BModal.vue'
import type { Solution, Constraint, ApiResponse } from '@/types'

interface SolutionWithRelevance extends Solution {
  relevance: number
  showDetails: boolean
}

const router = useRouter()
const { api } = useApi()
const { error } = useNotification()

const solutions = ref<SolutionWithRelevance[]>([])
const constraints = ref<Constraint[]>([])
const selectedConstraints = ref<number[]>([])
const isLoading = ref(true)
const selectedSolution = ref<SolutionWithRelevance | null>(null)
const showModal = ref(false)

const sortedSolutions = computed(() => {
  return [...solutions.value].sort((a, b) => b.relevance - a.relevance)
})

onMounted(async () => {
  const issueId = sessionStorage.getItem('issueId')
  if (!issueId) {
    error('No issue selected')
    router.push({ name: 'Insights' })
    return
  }

  try {
    const response = await api.get<ApiResponse>(`/api/solution/issue/${issueId}`)
    if (response.data.solutions) {
      solutions.value = response.data.solutions.map(s => ({
        ...s,
        relevance: 1,
        showDetails: false
      }))
    }
    if (response.data.constraints) {
      constraints.value = response.data.constraints.map(c => ({
        ...c,
        asked: false
      }))
    }
  } catch (e) {
    error('Failed to load solutions')
  } finally {
    isLoading.value = false
  }
})

function toggleConstraint(constraintId: number) {
  const index = selectedConstraints.value.indexOf(constraintId)
  if (index === -1) {
    selectedConstraints.value.push(constraintId)
  } else {
    selectedConstraints.value.splice(index, 1)
  }
  recalculateRelevance()
}

function recalculateRelevance() {
  solutions.value.forEach(solution => {
    let relevance = 1
    selectedConstraints.value.forEach(constraintId => {
      const constraint = constraints.value.find(c => c.ID === constraintId)
      if (constraint && constraint.Weight) {
        relevance *= constraint.Weight
      }
    })
    solution.relevance = Math.min(1, Math.max(0, relevance))
  })
}

function getRelevanceLevel(relevance: number): string {
  if (relevance >= 0.666) return 'High Match'
  if (relevance >= 0.333) return 'Medium Match'
  return 'Low Match'
}

function getRelevanceClass(relevance: number): string {
  if (relevance >= 0.666) return 'bg-success'
  if (relevance >= 0.333) return 'bg-warning'
  return 'bg-secondary'
}

function openSolutionModal(solution: SolutionWithRelevance) {
  selectedSolution.value = solution
  showModal.value = true
}

function goBack() {
  router.push({ name: 'Risks' })
}
</script>

<template>
  <div class="solutions-view">
    <BNavbar />

    <div class="container py-5">
      <button class="btn btn-link text-decoration-none mb-3" @click="goBack">
        &larr; Back to Issue Details
      </button>

      <div v-if="isLoading" class="text-center py-5">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>

      <div v-else class="row">
        <div class="col-lg-4 mb-4">
          <div class="card shadow">
            <div class="card-body">
              <h5 class="card-title mb-3">Filter by Constraints</h5>
              <p class="text-muted small mb-3">
                Select constraints that apply to your situation to refine solution recommendations.
              </p>

              <div v-if="constraints.length === 0" class="text-muted small">
                No constraints available for this issue.
              </div>

              <div v-for="constraint in constraints" :key="constraint.ID" class="form-check mb-2">
                <input
                  type="checkbox"
                  class="form-check-input"
                  :id="`constraint-${constraint.ID}`"
                  :checked="selectedConstraints.includes(constraint.ID)"
                  @change="toggleConstraint(constraint.ID)"
                />
                <label class="form-check-label" :for="`constraint-${constraint.ID}`">
                  {{ constraint.Name }}
                  <small v-if="constraint.Description" class="d-block text-muted">
                    {{ constraint.Description }}
                  </small>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-8">
          <h4 class="mb-4">Recommended Solutions</h4>

          <div v-if="sortedSolutions.length === 0" class="text-center text-muted py-5">
            <p>No solutions available for this issue.</p>
          </div>

          <div
            v-for="solution in sortedSolutions"
            :key="solution.ID"
            class="card shadow-sm mb-3 solution-card"
            @click="openSolutionModal(solution)"
          >
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-start">
                <div>
                  <h5 class="card-title mb-2">{{ solution.Name }}</h5>
                  <p class="card-text text-muted mb-0">
                    {{ solution.Description?.substring(0, 150) }}{{ solution.Description && solution.Description.length > 150 ? '...' : '' }}
                  </p>
                </div>
                <span :class="['badge', getRelevanceClass(solution.relevance), 'ms-3']">
                  {{ getRelevanceLevel(solution.relevance) }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <BModal v-model:show="showModal" :title="selectedSolution?.Name || 'Solution Details'" size="lg">
      <div v-if="selectedSolution">
        <div class="mb-4">
          <h6 class="text-muted">Description</h6>
          <p>{{ selectedSolution.Description }}</p>
        </div>

        <div class="mb-4">
          <h6 class="text-muted">Implementation</h6>
          <p>{{ selectedSolution.Implementation }}</p>
        </div>

        <div>
          <h6 class="text-muted">Skills & Tools Required</h6>
          <p>{{ selectedSolution.SkillsTools }}</p>
        </div>
      </div>
    </BModal>
  </div>
</template>

<style scoped lang="scss">
.solutions-view {
  min-height: 100vh;
  background-color: #f8f9fa;
}

.solution-card {
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
}
</style>
