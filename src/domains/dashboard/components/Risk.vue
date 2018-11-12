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
          <h1>Innefective fixes cost budge</h1>
          <div style="text-align: end;" class="container">
            <p href="">Accuracy: <span style="color: #669999">High</span></p>
            <p href="">Risk: <span style="color: #669999">medium</span></p>
          </div>
        </div>
      </div>
    </div>
    <div class="container" style="padding-top: 30px;">
      <div style="border-bottom: 1px solid black; margint-top: 30px;" class="col-md-12 col-xs-12"> 
        <div class="row">
          <div style="padding-bottom: 10px; margin-right: 10px;" class="col-md-3 col-xs-3">
            <div class="col-md-2">
              <span><i class="orange-icon mt-20 far fa-5x fa-file-alt"></i></span>
              <h1 class="risks-h1">Description</h1>
            </div>
          </div>
          <div style="padding: 10px;" class="col-md-8 col-xs-8">
            <p class="sugestions">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dicta repudiandae sint alias inventore ex similique rem, dignissimos minima recusandae, quae eaque cum nesciunt nobis repellat cumque asperiores vel hic?</p>
            <p class="sugestions">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dicta repudiandae sint alias inventore ex similique rem, dignissimos minima recusandae, quae eaque cum nesciunt nobis repellat cumque asperiores vel hic?</p>
          </div>
        </div>
      </div>
      <div style="border-bottom: 1px solid black;" class="col-md-12 col-xs-12"> 
        <div class="row">
          <div style="padding-bottom: 10px; margin-right: 10px;" class="col-md-3 col-xs-3">
            <div class="col-md-2">
              <span><i class="orange-icon mt-20 fas fa-5x fa-chart-line"></i></span>
              <h1 class="risks-h1">Stats</h1>
            </div>
          </div>
          <div style="padding: 10px;" class="col-md-8 col-xs-8">
            <p class="sugestions">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dicta repudiandae sint alias inventore ex similique rem, dignissimos minima recusandae, quae eaque cum nesciunt nobis repellat cumque asperiores vel hic?</p>
            <p class="sugestions">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dicta repudiandae sint alias inventore ex similique rem, dignissimos minima recusandae, quae eaque cum nesciunt nobis repellat cumque asperiores vel hic?</p>
          </div>
        </div>
      </div>
      <div style="border-bottom: 1px solid black;" class="col-md-12 col-xs-12"> 
        <div class="row pt-20">
          <div style="padding-bottom: 10px; margin-right: 10px;" class="col-md-3 col-xs-3">
            <span><i class="orange-icon mt-20 fas fa-5x fa-map-marker-alt"></i></span>
            <h1 class="risks-h1">Usual Pain
              <br>Points</h1>
          </div>
          <div style="padding-bottom: 10px;" class="col-md-8 col-xs-8">
            <div>
              <div class="col-md-3">
                <div class="blocks medium">
                  Decreasing
                  profits
                </div>
              </div>
              <div class="col-md-3">
                <div class="blocks high">
                  Decreasing
                  profits
                </div>
              </div>
              <div class="col-md-3">
                <div class="blocks low">
                  Decreasing
                  profits
                </div>
              </div>
              <div class="col-md-3">
                <div class="blocks low">
                  Decreasing
                  profits
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12 col-xs-12"> 
        <div class="row">
          <div style="padding-bottom: 10px; margin-right: 10px;" class="col-md-3 col-xs-3">
            <h1 class="risks-h1">Risks Factors</h1>
          </div>
          <div style="padding: 10px;" class="col-md-8 col-xs-8">
            <p class="sugestions">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dicta repudiandae sint alias inventore ex similique rem, dignissimos minima recusandae, quae eaque cum nesciunt nobis repellat cumque asperiores vel hic?</p>
            <p class="sugestions">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dicta repudiandae sint alias inventore ex similique rem, dignissimos minima recusandae, quae eaque cum nesciunt nobis repellat cumque asperiores vel hic?</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Risks',
  mounted () {
    axios.get(`${process.env.VUE_APP_HOST}/issue/6`)
      .then(response => {
        console.log(response.data)
      })
      .catch(error => console.log(error))
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
  height: auto;
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

.sugestions {
  color: #333333;
  font-family: Circularstd-Book;
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
  color: #fff;
}

.text {
  color: #66cccc;
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

.high {
 background-color: #FF9933;
}

.medium {
 background-color: #663300;
}

.low {
  background-color: #996633;
}

.risks-h1 {
  font-family: Circularstd-Book;
}

.orange-icon {
  color: #FF9933;
}
</style>

