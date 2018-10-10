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

.pt-30 {
  padding-top: 30px;
}

.pt-20 {
  padding-top: 20px;
}

.pt-10 {
  padding-top: 10px;
}

.pt-5 {
  padding-top: 5px;
}

.mt-20 {
  margin-top: 20px;
}

.mt-10 {
  margin-top: 10px;
}

.mt-5 {
  margin-top: 5px;
}

.mb-20 {
  margin-bottom: 20px;
}

.mb-10 {
  margin-bottom: 10px;
}

.mb-5 {
  margin-bottom: 5px;
}



</style>
