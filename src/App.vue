<template>
  <div id="app">
    <b-navbar></b-navbar>
    <main>
      <router-view/>
    </main>
    <b-footer></b-footer>
  </div>
</template>

<script>
import BFooter from './components/BFooter'
import BNavbar from './components/BNavbar'

export default {
  name: 'App',
  components: {
    BFooter,
    BNavbar
  }
}
</script>

<style>
@import url('assets/css/bootstrap.min.css');
@import url('assets/css/bootstrap-theme.min.css');

main {
  flex-grow: 1;
}

header, main, footer {
  flex-shrink: 0;
}
</style>
