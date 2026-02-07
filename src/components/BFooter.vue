<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer bg-dark text-light py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h5 class="fw-bold mb-3">Businessense</h5>
          <p class="text-muted">
            Helping small and medium businesses identify pain points
            and discover solutions.
          </p>
        </div>
        <div class="col-md-4">
          <h6 class="fw-bold mb-3">Links</h6>
          <ul class="list-unstyled">
            <li><a href="#" class="text-muted text-decoration-none">About</a></li>
            <li><a href="#" class="text-muted text-decoration-none">Contact</a></li>
            <li><a href="#" class="text-muted text-decoration-none">Privacy Policy</a></li>
          </ul>
        </div>
        <div class="col-md-4">
          <h6 class="fw-bold mb-3">Connect</h6>
          <div class="social-links">
            <a href="#" class="text-muted me-3"><i class="bi bi-twitter"></i></a>
            <a href="#" class="text-muted me-3"><i class="bi bi-linkedin"></i></a>
            <a href="#" class="text-muted"><i class="bi bi-github"></i></a>
          </div>
        </div>
      </div>
      <hr class="my-4 bg-secondary" />
      <div class="text-center text-muted">
        <small>&copy; {{ currentYear }} Businessense. All rights reserved.</small>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  margin-top: auto;
}
</style>
