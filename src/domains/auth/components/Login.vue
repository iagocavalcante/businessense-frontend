<template>
  <div class="login col-md-12 col-xs-12">
    <div class="container">
      <div class="login-form background-login">
        <h5 class="welcome">Welcome back, friend</h5>
        <div class="form-group relative">
          <input class="text-input" type="text" name="login" id="login" placeholder="EMAIL ADRESS OR LOGIN">
          <i class="fa fa-user"></i>
        </div>
        <div class="form-group relative">
          <input class="text-input" type="password" name="password" id="password" placeholder="PASSWORD">
          <i class="fa fa-lock"></i>
        </div>
        <div class="forgot-password">
          <a class="forgot-password" href="http://">Forgot your password?</a>
        </div>
        <div class="form-group">
          <button class="btn-block btn-login" @click.prevent="">Log in</button>
        </div>
        <p class="divider">or</p>
        <button class="btn-block btn-facebook" @click.prevent="">Log in with Facebook</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

h5 {
  color: #fff;
}

.login {
  background-color: #65DFBE;
  height: 550px;
}

.welcome {
  margin: 0;
  margin-bottom: 7px; 
}

.background-login {
  position: relative;
  width: 100%;
  background-image: url('/assets/img/login.jpg')
} 

.forgot-password {
  padding-bottom: 5px;
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.login-form {
  width: 270px;
  top: 0;
  left: 0;
  padding-top: 135px;
}

.login-form .form-group {
  margin-right: 0;
  margin-left: 0;
}

.login-form i {
  position: absolute;
  top: 14px;
  left: 15px;
  color:#1ED9BA;
}

.relative {
  position: relative;
}

.text-input {
  margin-bottom: 10px;
  height: 40px;
  border-width: 0;
  border-style: solid;
  background-color: #FDF3EA;
  width: 270px;
  padding-left: 35px;
  outline: 0;
  color: #A39C92;
}

.text-input:focus {
  border-color: #323031;
  border-left-width: 7px;
  padding-left: 28px;
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
