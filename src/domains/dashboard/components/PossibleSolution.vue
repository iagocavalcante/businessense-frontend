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
          <h1>Possible Solutions</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="col-md-12 col-xs-12"> 
        <div class="row">
          <div style="border-bottom: 1px solid #000; padding-bottom: 24px;" class="col-md-4 col-xs-4">
            <h1 class="possible-solution-h1">Tell more to us about your insights</h1>
            <hr class="about">
            <div>
              <h1 class="possible-solution-h1">Possible Solutions</h1>
              <span><i class="head-icon"></i></span>
            </div>
          </div>
          <div style="height: 225px; margin-top: 100px; border-bottom: 1px solid #000;" class="col-md-8 col-xs-8">
            <hr class="about">
            <div>
              <div class="list-pain-points">
                <ul>
                  <li @click="openModal">
                    <div class="possible-solution-h1 col-md-8">teste</div>
                    <div class="possible-solution-h1 col-md-4">teste teste teste</div>
                  </li>
                  <li>
                    <div class="possible-solution-h1 col-md-8">teste</div>
                    <div class="possible-solution-h1 col-md-4">teste teste teste</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12 col-xs-12"> 
        <div class="row">
          <div style="text-align:center;">
            <h1 class="possible-solution-h1">Solution Constraints</h1>
            <div style="padding-bottom: 10px; height: 200px; overflow-x: auto;" class="col-md-12 col-xs-12">
              <div class="col-md-3">
                <div class="blocks possible-solution-h1" style="background-color:#669999;">
                  Decreasing
                  profits
                  <div class="possible-solution-h1 buttons">
                    <a href="" class="possible-solution-h1 btn yes">yes</a>
                    <a href="" class="possible-solution-h1 btn">no</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-modal :show="modalControl"></b-modal>
  </div>
</template>

<script>
import BModal from '@/components/BModal'

export default {
  name: 'PossibleSolution',
  components: {
    BModal
  },
  data: () => ({
    modalControl: false
  }),
  methods: {
    openModal () {
      this.modalControl =  true
    }
  }
}
</script>

<style scoped>
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

.head-icon::before {
  font-size: 5em;
  content: url('./../../../assets/img/head.png');
}

.arrow-new {
  margin-top: 20px;
}

.about {
  border-bottom: 1.3px solid black;
}

.possible-solution-h1 {
  font-family: Circularstd-Book;
  font-weight: 100;
}

.blocks {
  color: #fff;
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
  height: 180px;
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
  cursor: pointer;
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

.yes {
  background-color: #1f4238;
}

</style>

