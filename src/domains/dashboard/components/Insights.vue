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
              <span v-show="!clicked" @click="changeInput()">Type new one here</span>
              <input ref="newPain" class="input-pain-point" v-show="clicked" type="text" v-model="newPainPoint">
              <div class="new-button">
                <a @click="createPainPoints()" class="btn"><i class="fas fa-plus-circle"></i></a>
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
              <div class="col-md-2 margin-blocks" :key="painPoint.ID" v-for="painPoint in painPoints">
                <div class="blocks" style="background-color:#669999;">
                  {{painPoint.name}}
                  <div class="buttons">
                    <a @click="savePainPointSelected(painPoint.ID)" class="btn">
                      <i class="fas fa-plus-circle"></i>
                    </a>
                    <a @click="removePainPointSelected(painPoint.ID)" class="btn">
                      <i class="fas fa-minus-circle"></i>
                    </a>
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
            <div class="col-md-4" style="margin-top: 35px;">
              <span><i class="fas fa-6x fa-exclamation-triangle"></i></span>
            </div>
            <div class="col-md-3" style="margin-top: 67px;">
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
                <li v-if="issues.length" :class="getStyle(issue.Relevance)" :key="issue.IssueID" v-for="issue in issues">
                  <div class="col-md-8">{{issue.Name}}</div>
                  <div class="col-md-4">accuracy: {{getAccuracy(issue.Relevance)}}</div>
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
import axios from 'axios'
import { notification } from '@/support/utils/notification-mixin'

export default {
  name: 'Insights',
  mixins: [notification],
  data: () => ({
    painPoints: [],
    newPainPoint: '',
    clicked: false,
    painPointsSelected: [],
    issues: []
  }),
  mounted() {
    this.searchPainPoints()
  },
  methods: {
    goToRisk () {
      this.$router.push('/dashboard/risks')
    },
    searchPainPoints () {
      axios.get(`${process.env.VUE_APP_HOST}/painpoint/search`)
        .then(response => {
          if ( response.data.status ) {
            this.painPoints = [...response.data.data]
          } else {
            throw new Error(`${response.data.message}`)
          }
        })
        .catch(error => this.error('Pain Points Error', `${error}`))
    },
    createPainPoints () {
      const name = this.newPainPoint
      axios.post(`${process.env.VUE_APP_HOST}/painpoint/new`, { name })
        .then(response => {
          if ( response.data.status ) {
            this.searchPainPoints()
            this.newPainPoint = ''
            this.clicked = false
            this.successMsg('Pain Point', 'Pain point created')
          } else {
            throw new Error(`${response.data.message}`)
          }
        })
        .catch(error => this.error('Pain Points Error', `${error}`))
    },
    savePainPointSelected ( id ) {
      if (this.painPointsSelected.find(paintPoint => paintPoint === id.toString())) {
        this.infoMsg('Pain Point', 'This pain point was selected')
        return
      }
      this.painPointsSelected.push(id.toString())
      this.getIssueList()
    },
    removePainPointSelected ( id ) {
      if (this.painPointsSelected.find(painPoint => painPoint === id.toString())) {
        this.painPointsSelected = this.painPointsSelected.filter(painPoint => painPoint !== id.toString())
        this.getIssueList()
        return
      }
      this.infoMsg('Pain Point','This pain point was removed')
      return
    },
    getIssueList () {
      const arrayPainPoints = this.painPointsSelected
      axios.post(`${process.env.VUE_APP_HOST}/issuerelevance`, arrayPainPoints)
        .then(response => {
          if ( response.data.status ) {
            this.issues = [...response.data.data]
            window.localStorage.setItem('pain-points', this.painPointsSelected)
            this.clicked = false
          } else {
            throw new Error(`${response.data.message}`)
          }
        })
        .catch(error => this.error('Pain Points Error', `${error}`))
    },
    getAccuracy( value ) {
      if (value > 0 && value <= 0.333 ) {
        return 'Low'
      } else if (value > 0.333 && value <= 0.666) {
        return 'Medium'
      } else {
        return 'High'
      }
    },
    getStyle( value ) {
      if (value > 0 && value <= 0.333 ) {
        return 'insights-low'
      } else if (value > 0.333 && value <= 0.666) {
        return 'insights-medium'
      } else {
        return 'insights-high'
      }
    },
    changeInput () {
      this.clicked = !this.clicked
      this.$refs.newPain.autofocus = true
    }
  }
}
</script>

<style scoped>
.input-pain-point {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  width: 95px;
  border: 0;
  background-color: transparent;
}

.input-pain-point:focus-within {
  border: 0;
  border-color: #323031;
}

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
  cursor: pointer;
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
