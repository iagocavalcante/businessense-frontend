<template>
  <article>
    <header>
      <nav class="container navbar" id="nav">
        <div class="row">
          <div class="col-md-6">
            <a href="http://">
              <img class="logo" src="./../assets/img/bsense_rgb_verde.png" alt="">
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
</template>

<script>
export default {

}
</script>

<style scoped>
.menu {
  text-align: center;
  padding-top: 28px;
}

.navbar {
  margin: 0 auto;
  height: 85px;
  padding-top: 10px;
}

header {
  background-color: #FAF4EB;
}

.logo {
  width: 235px;
  height: 90px;
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

.menu-link:active {
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

</style>
