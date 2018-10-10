<template>
  <div class="login col-md-12 col-xs-12">
    <div class="container">
      <div class="row">
        <div class="col-md-5 col-xs-5">
          <div class="login-form">
            <h5 class="welcome">Welcome back, friend</h5>
            <b-input
              :hasIcon="true"
              :placeholder="'EMAIL ADRESS OR LOGIN'"
              :name="'login'"
              :classIcon="'fa fa-user'"
              :value="model">
            </b-input>
            <b-input
              :hasIcon="true"
              :placeholder="'PASSWORD'"
              :name="'password'"
              :type="'password'"
              :classIcon="'fa fa-lock'"
              :id="'password'"
              :value="model">
            </b-input>
            <div class="forgot-password">
              <a class="forgot-password" href="http://">Forgot your password?</a>
            </div>
            <div class="form-group pt-10">
              <button class="btn-block btn-login" @click.prevent="">Log in</button>
            </div>
            <div class="login-users pt-30">
              <img src="./../../../assets/img/login-users.png" alt="">
            </div>
          </div>
        </div>

        <div class="col-md-1 col-xs-1 divider-right"></div>

        <div class="col-md-6 col-xs-6">
          <div class="create-form">
            <h5 class="welcome">You are new here?</h5>
            <b-input :placeholder="'EMAIL ADRESS'" :name="'email'" :id="'email'" :value="model" :type="'email'"></b-input>
            <b-input :placeholder="'FIRST NAME'" :name="'firstName'" :id="'firstName'" :value="model"></b-input>
            <b-input :placeholder="'LAST NAME'" :name="'lastName'" :id="'lastName'" :value="model"></b-input>
            <b-input
              :hasIcon="true"
              :placeholder="'PASSWORD'"
              :type="'password'"
              :name="'createPassword'"
              :classIcon="'fa fa-lock'"
              :id="'createPassword'"
              :value="model">
            </b-input>
            <b-input
              :hasIcon="true"
              :placeholder="'CONFIRM PASSWORD'"
              :type="'password'"
              :name="'confirmPassword'"
              :classIcon="'fa fa-lock'"
              :id="'confirmPassword'"
              :value="model">
            </b-input>
            <div class="col-md-12">
              <input type="checkbox" class="form-checkbox" name="agree" id="">
              <span class="checkbox-text">
                I agree to the terms of use of busissense.
              </span>
            </div>
            <div class="col-md-12 mb-10">
              <input type="checkbox" class="form-checkbox" name="" id="">
              <span class="checkbox-text">
                I agree to receive email newsletters and contriubutions about my account.
              </span>
            </div>
            <div class="form-group">
              <button class="btn-block btn-login" @click.prevent="">Create</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BInput from './../../../components/BInput.vue'
export default {
  components: {
    BInput
  },
  data: () => ({
    model: ''
  })
}
</script>


<style>

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

.create-form {
  position: relative;
  width: 270px;
  padding-top: 125px;
  padding-bottom: 135px;
}

.form-checkbox {
  position: absolute;
  top: 0;
  left: 0;
  height: 12px;
  width: 12px;
  margin-top: 4px;
  cursor: pointer;
  background: rgba(40,40,40,0.1);
  color:black;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 1.4px solid #ffffff;
}

.form-checkbox:checked {
  background: rgba(40,40,40,0.7);
}

.form-checkbox:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.form-checkbox:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the form-checkbox when checked */
input:checked ~ .form-checkbox:after {
  display: block;
}

.checkbox-text {
  color: #fff;
  padding-left: 10px;
  padding-top: 0;
}

.divider-right {
  border-left: 2px solid #fff;
  margin-top: 110px;
  padding-right: 40px;
  height: 270px;
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

.btn-facebook {
  height: 40px;
  border-radius: 3px;
  border: 0;
  background-color: 	#3b5998;
  color: white;
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
