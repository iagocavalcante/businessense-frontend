<template>
  <div id="app">
    <nav class="container" id="nav">
      <div class="row">
        <div class="col-md-6">
          <a href="http://">Brand</a>
        </div>
        <div class="col-md-6">
          <div class="navbar">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="login">Login</router-link>
          </div>
        </div>
      </div>
    </nav>
    <router-view/>
    <footer>
      <div class="container">
        Businessense
      </div>
    </footer>
  </div>
</template>

<style>
@import url('assets/css/bootstrap.min.css');
@import url('assets/css/bootstrap-theme.min.css');
.navbar {
  text-align: center;
}
footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>
