<template>
  <footer class="content-footer">
    <div class="container section-footer">
      <section class="col-md-3">
        <h2>SERVICES</h2>
        <ul class="footer-list-top">
          <li>
            <a href="">Business Diagnostics</a>
          </li>
          <li>
            <a href="">Professional Accompaniment</a>
          </li>
          <li>
            <a href="">Business Tools</a>
          </li>
          <li>
            <a href="">Consulting</a>
          </li>
          <li>
            <a href="">Design and Tecnologic</a>
          </li>
        </ul>
      </section>
      <section class="col-md-3">
        <h2>INSTITUTIONAL</h2>
        <ul class="footer-list-top">
          <li>
            <a href="">About us</a>
          </li>
          <li>
            <a href="">Work with us</a>
          </li>
          <li>
            <a href="">Certificate Professionals</a>
          </li>
          <li>
            <a href="">Tecnology and Tools</a>
          </li>
        </ul>
      </section>
      <section class="col-md-3">
        <h2 >SOCIAL MEDIA</h2>
        <a class="social-image" href="#" :key="index" v-for="(images, index) in socialImages">
          <img :src="images.image" :alt="images.alt">
        </a>
      </section>
      <section class="col-md-3">
        <h2>DOWNLOADS</h2>
        <a href="#" :key="index" v-for="(images, index) in downloadImages">
          <img :src="images.imageLink" :alt="images.alt">
        </a>
      </section>
    </div>
    <div class="bussinessense-footer">
      BUSINESSENSE.COM - CPNJ: 00.000.00/0000-00. - TODOS OS DIREITOS RESERVADOS 
    </div>
  </footer>  
</template>

<script>
import Appstore from '@/assets/img/appstore.png';
import Google from '@/assets/img/googleplay.png';

export default {
  name: 'Login',
  data: () => ({
    downloadImages: [
      {
        imageLink: Appstore,
        alt: 'App Store Download'
      },
      {
        imageLink: Google,
        alt: 'Google Play Download'
      }
    ],
    socialImages: [
      {
        imageLink: Appstore,
        alt: 'App Store Download'
      },
      {
        imageLink: Google,
        alt: 'Google Play Download'
      },
      {
        imageLink: Google,
        alt: 'Google Play Download'
      }
    ]
  })
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0px;
  margin-left: 15px;
}

img {
  height: 45px;
  width: 160px;
  margin-bottom: 5px;
}

h2 {
  font-size: 18px;
  color: #373737;
}

.section-footer {
  padding-bottom: 35px;
}

.social-image {
  display: inline-block;
}

section {
  padding-top: 30px;
}

.footer-list-top > li > a {
  font-size: 12px;
  font-weight: 600;
  color: #373737;
}

.content-footer {
  background-color: #FAF4EB;
  width: 100%;
}

.bussinessense-footer {
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  height: 40px;
  background-color: #373737;
  color: white;
  padding-top: 15px;
  font-size: 10.6px;
}
</style>
