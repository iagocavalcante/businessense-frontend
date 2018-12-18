<template>
  <div>
    <div class="image">
      <div class="container">
        <div class="row">
          <div class="col-md-6" style="padding: 90px">
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
          <div class="col-md-6"></div>
          
        </div>
      </div>
    </div>
    
    <div class="container section">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-6">
          <h1>Better management means 
            better results: 
            40% higher growth, 
            140% higher profits and 
            75% higher employee 
            productivity*

            But identifying what will 
            really make a difference in your 
            business can be overwhelming
          </h1>
        </div>
        <div class="col-md-5"></div>
      </div>
    </div>
    <div class="container whatis">
      <div class="row" style="display: table-cell;
    vertical-align: middle;">
        <div class="col-md-2"></div>
        <div style="text-align: center; vertical-align: middle;" class="col-md-8">
          <h1>What is businessense</h1>
          <h3>Businessense is a platform for small and medium business owners. 
  We diagnose your major opportunities, get you spot-on, 
  actionable recommendations and even provide you with 
  third party providers, when it makes sense. </h3>
        </div>
        <div class="col-md-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style lang="scss" scoped>
.image {
  background: url("./../assets/img/login.jpg")
    no-repeat center center;
  background-size: cover;
}
.image::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 475px;
  background-image: linear-gradient(
    90deg,
    rgba(101, 223, 190, 1) 0.01%,
    rgba(250, 250, 250, 0.1) 150%
  );
}

.home {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  background: url("./../assets/img/login.jpg") center center no-repeat;
  background-position: center top;
  background-size: cover;
}

.home:before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    90deg,
    rgba(101, 223, 190, 1) 0.01%,
    rgba(250, 250, 250, 0.1) 150%
  );
}

.section {
  width: 100%;
  height: auto;
  background: url("./../assets/img/home-bg.png") center center no-repeat;
  background-position: center top;
  background-size: cover;
}

.section:before {
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    90deg,
    rgba(250, 244, 235, 1) 0.01%,
    rgba(250, 250, 250, 0.1) 150%
  );
}

.whatis {
  background-color: #65DFBE;
  height: 312px;
  display: table;
  width: 100%;
}
</style>

