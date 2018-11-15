<template>
  <div>
    <div class="col-xs-12 home">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h1>
              Need help with 
              your business?
            </h1>
            <h1>
              Solve your management issue. 
            </h1>
            <h1>
              Now.
            </h1>
          </div>
          <div class="col-md-4"></div>
          <div class="col-md-4"></div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-7">
        <h1>teste</h1>
      </div>
      <div class="col-md-2"></div>
    </div>
    <div class="row">
      <div class="col-md-2"></div>
      <div style="text-align: center;" class="col-md-8">
        <h1>What is businessense</h1>
        <h3>Businessense is a platform for small and medium business owners. 
We diagnose your major opportunities, get you spot-on, 
actionable recommendations and even provide you with 
third party providers, when it makes sense. </h3>
      </div>
      <div class="col-md-2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style scoped>
.home {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  background: url('./../assets/img/login.jpg') center center no-repeat;
  background-position: center top;
  background-size: cover;
}

.home:before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(90deg, rgba(101, 223, 190, 1) 0.01%, rgba(250, 250, 250, 0.1) 150%);
}
</style>

