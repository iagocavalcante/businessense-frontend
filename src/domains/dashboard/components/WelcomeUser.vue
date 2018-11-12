<template>
  <div>
    <div class="welcome col-md-12 col-xs-12">
      <div class="container">
        <div class="row">
          <div class="pt-30 pb-30 col-md-12 col-xs-12">
            <div class="header">
              <h1>Welcome <span class="user">User!</span></h1>
              <h2>We need to ask you 2 simple <br> questions to get started</h2>
            </div>
            <div>
              <div class="col-md-2"></div>
              <div class="col-md-4">
                <label class="label-left" for="What industry are you in?">What industry are you in?</label>
                <div class="icon">
                  <img class="industry" src="./../../../assets/img/Icones-06.png" alt="">
                </div>
                <select class="form-industry mt-10" v-model="industry" name="industry" id="industry">
                  <option value="" :key="industry.ID" v-for="industry in industries">{{industry.name}}</option>
                </select>
                <button class="plus-button" @click.prevent="">+</button>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="What is your approximate montly revenue?">What is your approximate montly revenue?</label>
                  <input class="form-industry text-center mt-10" placeholder="20.000 CAD" type="text" name="" id="">
                  <i class="input-icon"></i>
                </div>
                <div class="icon-person">
                  <img class="person" src="./../../../assets/img/Icones-07.png" alt="">
                </div>
                <div class="pt-10 label-right button-padding">
                  <button class="btn-next-step" @click.prevent="goToInsights">Next Step</button>
                </div>
              </div>
              <div class="col-md-2"></div>
              <div class="col-md-12" style="text-align:center;">
                <div class="col-md-2"></div>
                <div class="col-md-8">
                  <p class="info-text">We use this info to group you with other companies similar to yours. 
      This way you only get relevant recommendations</p>
                </div>
              </div>
                <div class="col-md-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-12 col-xs-12 second"></div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Welcome',
  data: () => ({
    industry: '',
    industries: [
      {
        label: 'Teste 1',
        value: 1
      },
      {
        label: 'Teste 2',
        value: 2
      },
      {
        label: 'Teste 3',
        value: 3
      },
      {
        label: 'Teste 4',
        value: 4
      },
    ]
  }),
  mounted() {
    this.searchIndustries()
  },
  methods: {
    searchIndustries () {
      axios.get(`${process.env.VUE_APP_HOST}/industry/search`)
        .then(response => {
          if ( response.data.status ) {
            this.industries = [...response.data.data]
          }
        })
    },
    goToInsights () {
      this.$router.push('/dashboard/insights')
    }
  }
}
</script>

<style scoped>
h1 {
  font-weight: 600;
  font-family: CircularStd-Medium;
}

.info-text {
  font-size: 18px;
  color: #fff;
  font-family: CircularStd-Medium;
}

.welcome {
  display: block;
  position: relative;
  width: 100%;
  height: 350px;
  background-image: linear-gradient(90deg, rgba(101, 223, 190, 1));
  background-position: center top;
  background-size: cover;
}

.second {
  display: block;
  width: 100%;
  height: 550px;
  background-image: url('./../../../assets/img/background-dash.jpg');
  background-position: center top;
  background-size: cover;
}

.business {
  display: inline-block;
  width: 100%;
  text-align: center;
}

.form-industry {
  padding-left: 10px;
  height: 40px;
  width: 270px;
  color: #999999;
  padding-top: 5px;
  font-size: 18px;
  font-family: CircularStd-Book;
  border-radius: 5px;
  border: 1px solid #e7e3e3;
}

.plus-button {
  margin-left: 5px;
  height: 40px;
  width: 30px;
  color: #999999;
  font-size: 25px;
  font-family: CircularStd-Book;
  border-radius: 5px;
  border: 1px solid #e7e3e3;
  background-color: white;
}

.header {
  text-align: center;
}

.icon {
  position: absolute;
  top: 30px;
  left: -30px;
}

.icon-person {
  position: absolute;
  top: 30px;
  right: 25px;
}

.text-center {
  text-align: center;
}

.industry {
  height: 40px;
}

.person {
  height: 50px;
}

.button-padding {
  padding-right: 80px;
}

.btn-next-step {
  height: 40px;
  border-radius: 3px;
  border: 0;
  background-color: #323031;
  color: #66CCCC;
}

.btn-next-step:active {
  height: 40px;
  border-radius: 3px;
  border: 0;
  background-color: #323031;
  color: #66CCCC;
}

.user {
  color: white;
}

</style>
