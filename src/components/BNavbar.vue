<template>
  <article>
    <header :class="checkRoute() === 'home' ? 'header-zindex' : ''">
      <nav class="container navbar" id="nav">
        <div class="row">
          <div class="col-md-6">
            <a href="/">
              <img class="logo" src="./../assets/img/bsense_rgb_verde.png" alt>
            </a>
          </div>
          <div class="col-md-6">
            <div class="menu">
              <router-link :class="checkRoute() === 'home' ? 'menu-link-zindex' : 'menu-link'" to="/">about</router-link>
              <router-link :class="checkRoute() === 'home' ? 'menu-link-zindex' : 'menu-link'" to="login">sign in</router-link>
              <router-link :class="checkRoute() === 'home' ? 'menu-link-zindex' : 'menu-link'" to="/about">try it</router-link>
              <router-link :class="checkRoute() === 'home' ? 'menu-link-zindex' : 'menu-link'" to="/about">help</router-link>
              <a href="javascript:void(0)" class="menu-link" v-if="checkRoute() === 'welcome'" @click="logout">logout</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </article>
</template>

<script>
export default {
  name: 'BNavbar',
  mounted () {
    setTimeout(() => {
      this.checkRoute()
    })
  },
  methods: {
    checkRoute() {
      return window.localStorage.getItem('routeName')
    },
    logout () {
      window.localStorage.clear();
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
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
  background-color: #faf4eb;
}

.header-zindex {
  background-color: transparent;
  border: none;
  color: white;
  z-index: 100;
  transition: background-color 1s ease 0s;
}

.logo {
  width: 235px;
  height: 90px;
}

.menu-link {
  transition: opacity 0.125s linear;
  color: #373737;
  font-size: 22px;
  margin-right: 20px;
}

.menu-link-zindex {
  color: #373737;
  font-size: 22px;
  margin-right: 20px;
}
.menu-link:hover {
  text-decoration: none;
  color: #65dfbe;
  border-bottom: 2.5px solid #65dfbe;
}

.menu-link-zindex:hover {
  text-decoration: none;
  color: white;
  border-bottom: 2.5px solid #65dfbe;
}

.menu-link:active {
  text-decoration: none;
  color: #65dfbe;
  border-bottom: 2.5px solid #65dfbe;
}

article {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
</style>
