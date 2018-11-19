 <template>
  <div class="login-form">
    <h5 class="welcome">Welcome back</h5>
    <b-input
      :hasIcon="true"
      :placeholder="'EMAIL ADRESS OR LOGIN'"
      :name="'login'"
      :classIcon="'fa fa-user'"
      v-model="loginForm.email"
      @blur="$v.loginForm.$touch()"
    />
    <ul class="ContactForm__messages" v-if="$v.loginForm.email.$error">
      <li v-if="!$v.loginForm.email.required">
        This field is required.
      </li>
      <li v-if="!$v.loginForm.email.emai">
        Please enter a valid email address.
      </li>
    </ul>
    <b-input
      :hasIcon="true"
      :placeholder="'PASSWORD'"
      :name="'password'"
      :type="'password'"
      :classIcon="'fa fa-lock'"
      :id="'password'"
      v-model="loginForm.password"
      @blur="$v.loginForm.$touch()"
    />
    <ul class="ContactForm__messages" v-if="$v.loginForm.password.$error">
      <li v-if="!$v.loginForm.password.required">
        This field is required.
      </li>
    </ul>
    <div class="forgot-password">
      <a class="forgot-password" href="http://">Forgot your password?</a>
    </div>
    <div class="form-group pt-10">
      <button class="btn-block btn-login" @click.prevent="doLogin()">
        <span v-if="!loading">
          Log in
        </span>
        <i v-if="loading" class="fa fa-spinner fa-pulse fa-3x fa-fw" style="font-size:24px; color: white;"></i>
      </button>
    </div>
    <div class="login-users pt-30">
      <img src="./../../../assets/img/login-users.png" alt="">
    </div>
  </div>
</template>

<script>
import BInput from '@/components/BInput.vue'
import { mapActions } from 'vuex'
import { email, required } from 'vuelidate/lib/validators'
import { notification } from '@/support/utils/notification-mixin'

export default {
  name: 'Login',
  mixins: [notification],
  components: {
    BInput
  },
  data: () => ({
    loading: false,
    loginForm: {
      email: '',
      password: '',
    }
  }),
  methods: {
    ...mapActions('Login', ['login']),
    doLogin () {
      this.loading = true
      this.$v.loginForm.$touch()
      // if its still pending or an error is returned do not submit
      if (this.$v.loginForm.$pending || this.$v.loginForm.$error) return
      
      const email = this.loginForm.email 
      const password = this.loginForm.password
      this.login({ email, password })
        .then(() => {
          this.loading = false
          this.$router.push({name: 'welcome'})
        })
        .catch(err => {
          this.loading = false
          this.errorMsg('Login Error', `${err}`)
        })
    }
  },
  validations: {
    loginForm: {
      email: {
        required,
        email,
      },
      password: {
        required,
      },
    }
  }
}
</script>

<style scoped>

.ContactForm__messages {
  list-style-type: none;
  padding-left: 0;
  color: red;
}

h5 {
  color: #fff;
}

.login {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  background: url('./../../../assets/img/login.jpg') center center no-repeat;
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

.welcome {
  margin: 0;
  margin-bottom: 7px; 
}

.login-users {
  text-align: center;
}

.login-users > img {
  height: 70px;
  width: 70px;
}

.forgot-password {
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.login-form {
  width: 270px;
  position: relative;
  top: 0;
  left: 0;
  padding-top: 135px;
  padding-bottom: 135px;
}

.btn-block {
  display: block;
  width: 100%;
}

.btn-login {
  height: 40px;
  border-radius: 3px;
  border: 0;
  background-color: #323031;
  color: white;
}
</style>
