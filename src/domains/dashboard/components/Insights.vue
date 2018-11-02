<template>
  <div>
    <div class="col-md-12 col-xs-12"> 
      <div class="row">
        <div class="page-title">
          <div style="text-align: start;" class="container">
            <a class="a-page-title" href="">
              <span>
                <i style="margin-right: 5px;" class="arrow-new fas fa-chevron-left"></i>
              </span>
              Back to dashboard
            </a>
          </div>
          <h1>Common Pain Points</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="col-md-12 col-xs-12"> 
        <div class="row">
          <div class="col-md-4 col-xs-4">
            <h1>Tell more to us about your insights</h1>
            <h3 class="pain-points">Type yout own pain point</h3>
            <hr class="about">
            <div class="col-md-2 new-block" style="background-color:#66CCCC;">
              Type new one here
              <div class="new-button">
                <a href="" class="btn"><i class="fas fa-plus-circle"></i></a>
              </div>
            </div>
            <div class="col-md-6 text">
              <span><i class="arrow-new fas fa-5x fa-chevron-right"></i></span>
            </div>
          </div>
          <div class="col-md-8 col-xs-8">
            <div class="header-pain-point">
              <div class="col-md-4 col-xs-4">
                <h3 class="pain-points">your pain points</h3>
              </div>
              <div class="col-md-8 col-xs-8 pull-right">
                <span><i class="fas fa-info"></i></span>
              </div>
            </div>
            <hr class="about">
            <div>
              <div class="col-md-2 margin-blocks">
                <div class="blocks" style="background-color:#669999;">
                  Decreasing
                  profits
                  <div class="buttons">
                    <a href="" class="btn"><i class="fas fa-plus-circle"></i></a>
                    <a href="" class="btn"><i class="fas fa-minus-circle"></i></a>
                  </div>
                </div>
              </div>
              <div class="col-md-2 margin-blocks">
                <div class="blocks" style="background-color:#669999;">
                  Decreasing
                  profits
                  <div class="buttons">
                    <a href="" class="btn"><i class="fas fa-plus-circle"></i></a>
                    <a href="" class="btn"><i class="fas fa-minus-circle"></i></a>
                  </div>
                </div>
              </div>
              <div class="col-md-2 margin-blocks">
                <div class="blocks" style="background-color:#669999;">
                  Decreasing
                  profits
                  <div class="buttons">
                    <a href="" class="btn"><i class="fas fa-plus-circle"></i></a>
                    <a href="" class="btn"><i class="fas fa-minus-circle"></i></a>
                  </div>
                </div>
              </div>
              <div class="col-md-2 margin-blocks">
                <div class="blocks" style="background-color:#669999;">
                  Decreasing
                  profits
                  <div class="buttons">
                    <a href="" class="btn"><i class="fas fa-plus-circle"></i></a>
                    <a href="" class="btn"><i class="fas fa-minus-circle"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12 issues">
        <div class="row">
          <div class="col-md-4">
            <div class="col-md-4" style="
    margin-top: 35px;">
              <span><i class="fas fa-6x fa-exclamation-triangle"></i></span>
            </div>
            <div class="col-md-3" style="
    margin-top: 67px;">
              <h2 style="display: inline; margin: 0;">Issues identified</h2>
            </div>
          </div>
          <div class="col-md-8 col-xs-8">
            <div class="header-insights">
              <div class="col-md-6 col-xs-6">
                <h3 class="pain-points">issues connected to your Pain Points</h3>
              </div>
              <div class="col-md-6 col-xs-6 pull-right">
                <span><i class="fas fa-info"></i></span>
              </div>
            </div>
            <hr class="about">
            <div class="list-pain-points">
              <ul>
                <li class="insights-high">
                  <div class="col-md-8">teste</div>
                  <div class="col-md-4">teste teste teste</div>
                </li>
                <li class="insights-medium">
                  <div class="col-md-8">teste</div>
                  <div class="col-md-4">teste teste teste</div>
                </li>
                <li class="insights-low">
                  <div class="col-md-8">teste</div>
                  <div class="col-md-4">teste teste teste</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Insights",
  methods: {
    goToRisk () {
      this.$router.push('/dashboard/risks')
    }
  }
}
</script>

<style scoped>

.header-pain-point {
  height: 140px;
  padding-top: 115px;
}

.page-title {
  color: #fff;
  font-family: CircularStd-Book;
  background-color: #66cccc;
  height: 100px;
  text-align: center;
}

.a-page-title {
  color: #fff;
}

.page-title > h1 {
  font-weight: 100;
  margin: 0;
}

.header-insights {
  height: 20px;
  margin-top: 20px;
}

.arrow-new {
  margin-top: 20px;
}

.pain-points {
  display: inline;
  color: #666666;
}

.about {
  border-bottom: 1.3px solid black;
}

.blocks {
  color: #fff;
  margin-top: 10px;
  height: 90px;
  width: 120px;
  border-radius: 4px;
  padding: 10px;
}

.text {
  color: #66cccc;
}

.new-block {
  color: #fff;
  margin-top: 10px;
  height: 90px;
  width: 120px;
  border-radius: 4px;
  padding: 10px;
}

.margin-blocks {
  margin-right: 60px;
}

.new-button {
  position: absolute;
  bottom: 0px;
  right: 0px;
}

.box-center {
  display: flex;
  align-content: flex-start;
}

.buttons {
  position: absolute;
  bottom: 0;
  right: -16px;
}

.btn {
  padding: 0.15em;
  font-size: 18px;
  color: #fff;
}

.pull-right {
  text-align: right;
}

.issues {
  padding-top: 10px;
}

.list-pain-points {
  height: 350px;
  width: 100%;
  display: flex;
  overflow: auto;
}

.list-pain-points > ul {
  padding: 0;
  list-style: none;
  flex: 1;
}

.list-pain-points > ul > li {
  height: 40px;
  margin: 5px;
  align-items: center;
  align-content: center;
  border-radius: 5px;
  padding: 10px;
  color: #fff;
}

.button-padding {
  padding-bottom: 20px;
}

.btn-next-step {
  height: 40px;
  border-radius: 3px;
  border: 0;
  background-color: #323031;
  color: #66cccc;
  margin-top: 10px;
}

.btn-next-step:active {
  height: 40px;
  border-radius: 3px;
  border: 0;
  background-color: #323031;
  color: #66cccc;
}

.fa-exclamation-triangle {
  color: #663333 !important;
}

.insights-high {
  background-color: #663333;
}

.insights-medium {
  background-color: #996666;
}

.insights-low {
  background-color: #FF9999;
}
</style>

