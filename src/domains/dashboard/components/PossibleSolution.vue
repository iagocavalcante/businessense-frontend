<template>
  <div>
    <div class="col-md-12 col-xs-12"> 
      <div class="row">
        <div class="page-title">
          <div style="text-align: start;" class="container">
            <a href=""><span><i style="margin-right: 5px;" class="arrow-new fas fa-chevron-left"></i></span>back to dashboard</a>
          </div>
          <h1>Possible Solutions</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="col-md-12 col-xs-12"> 
        <div class="row">
          <div style="border-bottom: 1px solid #000; padding-bottom: 24px;" class="col-md-4 col-xs-4">
            <h1>Tell more to us about your insights</h1>
            <hr class="about">
            <div class="col-md-2 new-block" style="background-color:#66CCCC;">
              Type new one here
              <div class="new-button">
                <a href="" class="btn">yes</a>
              </div>
            </div>
            <div class="col-md-6 text">
              <span><i class="arrow-new fas fa-5x fa-chevron-right"></i></span>
            </div>
          </div>
          <div style="margin-top: 100px; border-bottom: 1px solid #000;" class="col-md-8 col-xs-8">
            <hr class="about">
            <div>
              <div class="list-pain-points">
                <ul>
                  <li>
                    <div class="col-md-8">teste</div>
                    <div class="col-md-4">teste teste teste</div>
                  </li>
                  <li>
                    <div class="col-md-8">teste</div>
                    <div class="col-md-4">teste teste teste</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="border-bottom: 1px solid black;" class="col-md-12 col-xs-12"> 
        <div class="row">
          <div style="text-align:center;">
            <h1>Solution Constraints</h1>
            <div style="padding-bottom: 10px;" class="col-md-12 col-xs-12">
              <div class="col-md-3">
                <div class="blocks" style="background-color:#669999;">
                  Decreasing
                  profits
                  <div class="buttons">
                    <a href="" class="btn">yes</a>
                    <a href="" class="btn">no</a>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="blocks" style="background-color:#669999;">
                  Decreasing
                  profits
                  <div class="buttons">
                    <a href="" class="btn">yes</a>
                    <a href="" class="btn">no</a>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="blocks" style="background-color:#669999;">
                  Decreasing
                  profits
                  <div class="buttons">
                    <a href="" class="btn">yes</a>
                    <a href="" class="btn">no</a>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="blocks" style="background-color:#669999;">
                  Decreasing
                  profits
                  <div class="buttons">
                    <a href="" class="btn">yes</a>
                    <a href="" class="btn">no</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PossibleSolution'
}
</script>

<style scoped>
.header-pain-point {
  height: 140px;
  padding-top: 115px;
}

.page-title {
  background-color: #66cccc;
  height: 100px;
  text-align: center;
}

.page-title > h1 {
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
  color: #66cccc;
}

.about {
  border-bottom: 1.3px solid black;
}

.blocks {
  margin-top: 10px;
  height: 90px;
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

.box-center {
  display: flex;
  align-content: flex-start;
}

.buttons {
  position: absolute;
  bottom: 5px;
  left: 30px;
}

.btn {
  padding: 0.15em;
  font-size: 18px;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
  margin-right: 5px;
}

.pull-right {
  text-align: right;
}

.issues {
  padding-top: 10px;
}

.list-pain-points {
  height: auto;
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
  background-color: #1f4238;
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
</style>

