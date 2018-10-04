<template>
  <div class="login col-md-12 col-xs-12">
    <div class="container">
      <div class="login-form">
        <h5>Welcome back, friend</h5>
        <div class="form-group relative">
          <input class="text-input" type="text" name="login" id="login">
          <i class="fa fa-user"></i>
        </div>
        <div class="form-group relative">
          <input class="text-input" type="password" name="password" id="password">
          <i class="fa fa-lock"></i>
        </div>
        <a href="http://">Forgot your password?</a>
        <div class="form-group">
          <button class="btn-block " @click.prevent="">Log in</button>
        </div>
        <p class="divider">or</p>
        <button class="btn-block" @click.prevent="">Log in with Facebook</button>
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
  background-color: #02DFBE;
}

.login-form {
  width: 270px;
  top: 0;
  left: 0;
  padding-top: 120px;
}

.login-form .form-group {
  margin-right: 0;
  margin-left: 0;
}

.login-form i {
  position: absolute;
  top: 14px;
  left: 10px;
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
  padding-left: 30px;
  outline: 0;
  color: #A39C92;
}

.text-input:focus {
  border-color: #323031;
  border-left-width: 5px;
}

.btn-block {
  display: block;
  width: 100%;
}

.divider{
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 1em;
}

.divider::before{
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
