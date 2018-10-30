<template>
  <div class="container">
    <div class="col-md-12 col-xs-12"> 
      <div class="row">
        <div class="col-md-4 col-xs-4">
          <h1>Tell more to us about your insights</h1>
          <hr class="about">
          <div class="col-md-2 new-block" style="background-color:#66CCCC;">
            Type new one here
            <div class="new-button">
              <a href="" class="btn"><i class="fas fa-plus-circle"></i></a>
            </div>
          </div>
          <div class="col-md-6 text">
            <p>also you can 
              add your
              own insights.
              we are able to
              improve :)
            </p>
          </div>
        </div>
        <div class="col-md-8 col-xs-8">
          <div class="header-insights">
            <div class="col-md-4 col-xs-4">
              <p class="pain-points">your pain points</p>
            </div>
            <div class="col-md-8 col-xs-8 pull-right">
              <span><i class="fa fa-info"></i></span>
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
        <div class="col-md-12 issues">
          <div class="col-md-4">
            <span class="i fa fa-exclamation-triangle"></span>
          </div>
          <div class="col-md-8">
            <p class="pain-points">issues connected to your Pain Points</p>
            <hr class="about">
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
          <div class="pt-10 label-right button-padding">
            <button class="btn-next-step" @click.prevent="goToInsights">Next Step</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Insights'
}
</script>

<style scoped>
.header-insights {
  height: 99px;
  padding-top: 75px;
}

.pain-points {
  display: inline;
  color: #66CCCC;
  font-size: 20px;
}

.about {
  border-bottom: 1.3px solid black;
}

.blocks {
  margin-top: 10px;
  height: 90px;
  width: 120px;
  border-radius: 4px;
  padding: 10px;
}

.text {
  color: #66CCCC;
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
  margin-right: 20px;
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
  background-color: #1F4238;
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
  color: #66CCCC;
  margin-top: 10px;
}

.btn-next-step:active {
  height: 40px;
  border-radius: 3px;
  border: 0;
  background-color: #323031;
  color: #66CCCC;
}

</style>

