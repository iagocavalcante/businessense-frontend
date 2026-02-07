<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useApi } from '@/composables/useApi'
import { useNotification } from '@/composables/useNotification'
import BNavbar from '@/components/BNavbar.vue'
import type { Issue, ApiResponse } from '@/types'

const router = useRouter()
const { api } = useApi()
const { error } = useNotification()

const issue = ref<Issue | null>(null)
const isLoading = ref(true)

onMounted(async () => {
  const issueId = sessionStorage.getItem('issueId')
  if (!issueId) {
    error('No issue selected')
    router.push({ name: 'Insights' })
    return
  }

  try {
    const response = await api.get<ApiResponse>(`/api/issue/${issueId}`)
    if (response.data.issue) {
      issue.value = response.data.issue
    }
  } catch (e) {
    error('Failed to load issue details')
  } finally {
    isLoading.value = false
  }
})

function viewSolutions() {
  router.push({ name: 'Solutions' })
}

function goBack() {
  router.push({ name: 'Insights' })
}
</script>

<template>
  <div class="risk-view">
    <BNavbar />

    <div class="container py-5">
      <button class="btn btn-link text-decoration-none mb-3" @click="goBack">
        &larr; Back to Pain Points
      </button>

      <div v-if="isLoading" class="text-center py-5">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>

      <div v-else-if="issue" class="row">
        <div class="col-lg-8">
          <div class="card shadow mb-4">
            <div class="card-body">
              <h2 class="card-title mb-4">{{ issue.Name }}</h2>

              <div class="mb-4">
                <h5 class="text-muted mb-2">Description</h5>
                <p>{{ issue.Description }}</p>
              </div>

              <div class="mb-4">
                <h5 class="text-muted mb-2">Statistics</h5>
                <p>{{ issue.Stats }}</p>
              </div>

              <div class="mb-4">
                <h5 class="text-muted mb-2">Risk Factors</h5>
                <p class="text-danger">{{ issue.RiskFactors }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card shadow bg-primary text-white">
            <div class="card-body text-center py-5">
              <h4 class="mb-3">Ready to find solutions?</h4>
              <p class="mb-4">
                Discover actionable solutions tailored to this issue based on your constraints.
              </p>
              <button class="btn btn-light btn-lg" @click="viewSolutions">
                View Solutions
              </button>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="text-center py-5">
        <p class="text-muted">Issue not found</p>
        <button class="btn btn-primary" @click="goBack">
          Go Back
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.risk-view {
  min-height: 100vh;
  background-color: #f8f9fa;
}
</style>
