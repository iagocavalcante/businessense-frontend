 <template>
  <div class="login col-md-12 col-xs-12">
    <div class="container">
      <div class="row">
        <div class="col-md-5 col-xs-5">
          <login/>
        </div>

        <div class="col-md-1 col-xs-1 divider-right"></div>

        <div class="col-md-6 col-xs-6">
          <create-user/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CreateUser from './components/CreateUser'
import Login from './components/Login'

export default {
  name: 'ContainerAuth',
  components: {
    CreateUser,
    Login
  }
}
</script>


<style scoped>

.login {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  background: url('./../../assets/img/login.jpg') center center no-repeat;
  background-position: center top;
  background-size: cover;
}

.login:before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(90deg, rgba(101, 223, 190, 1) 15%, rgba(101, 223, 190, 1) 70%, rgba(250, 250, 250, 0.1) 150%);
}

.divider-right {
  border-left: 2px solid #fff;
  margin-top: 110px;
  padding-right: 40px;
  height: 270px;
}

.divider{
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1em 1em;
}

.divider::before {
  content: '';
  height: .08em;
  background: white;
  flex: 1;
  margin: 0 .25em 0 0;
}

.divider::after{
  content: '';
  height: .08em;
  background: white;
  flex: 1;
  margin: 0 0 0 .25em;
}
</style>
