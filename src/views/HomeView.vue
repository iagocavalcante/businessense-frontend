<script setup lang="ts">
import BNavbar from '@/components/BNavbar.vue'
import BFooter from '@/components/BFooter.vue'
</script>

<template>
  <div class="home-view">
    <BNavbar variant="transparent" />

    <section class="hero bg-primary text-white py-5">
      <div class="container py-5">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h1 class="display-4 fw-bold mb-4">
              Discover Solutions for Your Business
            </h1>
            <p class="lead mb-4">
              Identify pain points, understand risks, and find the right
              solutions for your small or medium business.
            </p>
            <router-link to="/login" class="btn btn-light btn-lg">
              Get Started
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <BFooter />
  </div>
</template>

<style scoped lang="scss">
.hero {
  min-height: 80vh;
  display: flex;
  align-items: center;
}
</style>
