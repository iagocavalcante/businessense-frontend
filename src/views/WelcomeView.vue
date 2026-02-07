<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useApi } from '@/composables/useApi'
import { useNotification } from '@/composables/useNotification'
import BNavbar from '@/components/BNavbar.vue'
import BInput from '@/components/BInput.vue'
import BAutocomplete from '@/components/BAutocomplete.vue'
import BModal from '@/components/BModal.vue'
import type { Industry, ApiResponse } from '@/types'

const router = useRouter()
const { api } = useApi()
const { success, error } = useNotification()

const isLoading = ref(false)
const industries = ref<Industry[]>([])
const showIndustryModal = ref(false)
const newIndustryName = ref('')

const form = reactive({
  companyName: '',
  revenue: '',
  industryId: 0,
  industryName: ''
})

const errors = reactive({
  companyName: false,
  revenue: false,
  industry: false
})

onMounted(async () => {
  await loadIndustries()
})

async function loadIndustries() {
  try {
    const response = await api.get<ApiResponse>('/api/industry/search')
    if (response.data.industries) {
      industries.value = response.data.industries
    }
  } catch (e) {
    error('Failed to load industries')
  }
}

function onIndustrySelect(item: Record<string, unknown>) {
  form.industryId = item.ID as number
  form.industryName = item.Name as string
}

async function createIndustry() {
  if (!newIndustryName.value.trim()) return

  try {
    const response = await api.post<ApiResponse>('/api/industry/new', {
      name: newIndustryName.value
    })
    if (response.data.status) {
      success('Industry created!')
      await loadIndustries()
      showIndustryModal.value = false
      newIndustryName.value = ''
    }
  } catch (e) {
    error('Failed to create industry')
  }
}

async function handleSubmit() {
  errors.companyName = !form.companyName
  errors.revenue = !form.revenue || isNaN(Number(form.revenue))
  errors.industry = !form.industryId

  if (errors.companyName || errors.revenue || errors.industry) return

  isLoading.value = true
  try {
    const response = await api.post<ApiResponse>('/api/company/new', {
      name: form.companyName,
      revenue: Number(form.revenue),
      industryid: form.industryId
    })

    if (response.data.status) {
      success('Company created!')
      router.push({ name: 'Insights' })
    } else {
      error(response.data.message || 'Failed to create company')
    }
  } catch (e) {
    error('Failed to create company')
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="welcome-view">
    <BNavbar />

    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card shadow">
            <div class="card-body p-5">
              <h2 class="card-title mb-4">Welcome! Let's set up your company</h2>
              <p class="text-muted mb-4">
                Tell us about your business so we can help you identify pain points and solutions.
              </p>

              <form @submit.prevent="handleSubmit">
                <div class="mb-4">
                  <label class="form-label">Company Name</label>
                  <BInput
                    v-model="form.companyName"
                    placeholder="Enter your company name"
                    :has-error="errors.companyName"
                  />
                </div>

                <div class="mb-4">
                  <label class="form-label">Industry</label>
                  <div class="d-flex gap-2">
                    <div class="flex-grow-1">
                      <BAutocomplete
                        v-model="form.industryName"
                        :items="industries"
                        display-key="Name"
                        placeholder="Search or select industry"
                        @select="onIndustrySelect"
                      />
                    </div>
                    <button
                      type="button"
                      class="btn btn-outline-primary"
                      @click="showIndustryModal = true"
                    >
                      + New
                    </button>
                  </div>
                  <div v-if="errors.industry" class="text-danger small mt-1">
                    Please select an industry
                  </div>
                </div>

                <div class="mb-4">
                  <label class="form-label">Annual Revenue (USD)</label>
                  <BInput
                    v-model="form.revenue"
                    type="number"
                    placeholder="e.g., 500000"
                    :has-error="errors.revenue"
                  />
                </div>

                <button
                  type="submit"
                  class="btn btn-primary btn-lg w-100"
                  :disabled="isLoading"
                >
                  {{ isLoading ? 'Setting up...' : 'Continue to Pain Points' }}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <BModal v-model:show="showIndustryModal" title="Add New Industry">
      <div class="mb-3">
        <label class="form-label">Industry Name</label>
        <BInput
          v-model="newIndustryName"
          placeholder="Enter industry name"
        />
      </div>
      <template #footer>
        <button class="btn btn-secondary" @click="showIndustryModal = false">
          Cancel
        </button>
        <button class="btn btn-primary" @click="createIndustry">
          Create Industry
        </button>
      </template>
    </BModal>
  </div>
</template>

<style scoped lang="scss">
.welcome-view {
  min-height: 100vh;
  background-color: #f8f9fa;
}
</style>
