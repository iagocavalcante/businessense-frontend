<template>
  <div id="app">
    <article>
      <header>
        <nav class="container navbar" id="nav">
          <div class="row">
            <div class="col-md-6">
              <a href="http://">
                <img class="logo" src="./assets/img/bsense_rgb_verde.png" alt="">
              </a>
            </div>
            <div class="col-md-6">
              <div class="menu">
                <router-link class="menu-link" to="/">about</router-link>
                <router-link class="menu-link" to="login">sign in</router-link>
                <router-link class="menu-link" to="/about">try it</router-link>
                <router-link class="menu-link" to="/about">help</router-link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </article>
    <main>
      <router-view/>
    </main>
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
  padding-top: 28px;
}

.navbar {
  margin: 0 auto;
  height: 85px;
  padding-top: 30px;
}

header {
  background-color: #FAF4EB;
}

.menu-link {
  color: #373737;
  font-size: 22px;
  margin-right: 20px;
}

.menu-link:hover {
  text-decoration: none;
  color: #65DFBE;
  border-bottom: 2.5px solid #65DFBE;
}

article {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

main {
    flex-grow: 1;
}

header, main, footer {
    flex-shrink: 0;
}

.logo {
  width: 235px;
  height: 90px;
}
</style>
