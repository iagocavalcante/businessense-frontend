<template>
  <div id="app">
    <b-navbar></b-navbar>
    <!-- <b-navbar-transparent></b-navbar-transparent> -->
    <main>
      <router-view/>
    </main>
    <b-footer></b-footer>
  </div>
</template>

<script>
import BFooter from './components/BFooter'
import BNavbar from './components/BNavbar'
import BNavbarTransparent from './components/BNavbarTransparent'

export default {
  name: 'App',
  components: {
    BFooter,
    BNavbar,
    BNavbarTransparent
  }
}
</script>

<style>
@import url('assets/css/bootstrap.min.css');
@import url('assets/css/bootstrap-theme.min.css');

@font-face {
  font-family: CircularStd-Black;
  src: url('assets/fonts/CircularStd-Black.otf');
}

@font-face {
  font-family: CircularStd-Book;
  src: url('assets/fonts/CircularStd-Book.otf');
}

@font-face {
  font-family: CircularStd-Medium;
  src: url('assets/fonts/CircularStd-Medium.otf');
}

body {
  font-family: CircularStd-Black;
  font-weight: 200;
}

main {
  flex-grow: 1;
}

main, footer {
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

.pb-30 {
  padding-bottom: 30px;
}

.pb-20 {
  padding-bottom: 20px;
}

.pb-10 {
  padding-bottom: 10px;
}

.pb-5 {
  padding-bottom: 5px;
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

.label-left {
  text-align: left;
}

.label-right {
  text-align: right;
}



</style>
