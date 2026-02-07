<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'

interface Props {
  variant?: 'default' | 'transparent'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default'
})

const router = useRouter()
const { isLoggedIn, logout } = useAuth()

const navbarClass = computed(() => ({
  'navbar': true,
  'navbar-expand-lg': true,
  'navbar-light': true,
  'bg-white': props.variant === 'default',
  'navbar-transparent': props.variant === 'transparent',
  'shadow-sm': props.variant === 'default'
}))

function handleLogout() {
  logout()
  router.push({ name: 'Login' })
}
</script>

<template>
  <nav :class="navbarClass">
    <div class="container">
      <router-link class="navbar-brand fw-bold" to="/">
        Businessense
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li v-if="!isLoggedIn" class="nav-item">
            <router-link class="nav-link" to="/login">
              Login
            </router-link>
          </li>
          <template v-else>
            <li class="nav-item">
              <router-link class="nav-link" to="/dashboard/welcome">
                Dashboard
              </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click.prevent="handleLogout">
                Logout
              </a>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.navbar-transparent {
  background-color: transparent !important;
  position: absolute;
  width: 100%;
  z-index: 100;

  .navbar-brand,
  .nav-link {
    color: white !important;
  }
}
</style>
