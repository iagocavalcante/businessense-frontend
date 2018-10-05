<template>
  <div id="app">
    <nav class="container navbar" id="nav">
      <div class="row">
        <div class="col-md-6">
          <a href="http://">Brand</a>
        </div>
        <div class="col-md-6">
          <div class="menu">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="login">Login</router-link>
          </div>
        </div>
      </div>
    </nav>
    <router-view/>
    <b-footer></b-footer>
  </div>
</template>

<script>
import BFooter from './components/BFooter'

export default {
  name: 'App',
  components: {
    BFooter
  }
}
</script>

<style>
@import url('assets/css/bootstrap.min.css');
@import url('assets/css/bootstrap-theme.min.css');

.menu {
  text-align: center;
}

.navbar {
  margin: 0 auto;
  height: 85px;
  padding-top: 30px;
}
</style>
