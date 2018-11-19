<template>
  <div>
    <div class="welcome col-md-12 col-xs-12">
      <div class="container">
        <div class="row">
          <div class="pb-30 col-md-12 col-xs-12">
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
                <select class="form-industry mt-10" v-model="industryId" name="industry" id="industry">
                  <option :value="industry.ID" :key="industry.ID" v-for="industry in industries">{{industry.name}}</option>
                </select>
                <button class="plus-button" @click.prevent="modalControl = !modalControl">+</button>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="What is your approximate montly revenue?">What is your approximate montly revenue?</label>
                  <input v-model="revenue" class="form-industry text-center mt-10" placeholder="20.000 CAD" type="text" name="" id="">
                  <ul class="ContactForm__messages" v-if="$v.revenue.$error">
                    <li v-if="!$v.revenue.required">
                      This field is required.
                    </li>
                  </ul>
                  <i class="input-icon"></i>
                </div>
                <div class="icon-person">
                  <img class="person" src="./../../../assets/img/Icones-07.png" alt="">
                </div>
                <div class="pt-10 label-right button-padding">
                  <button :disabled="loadingIndustries" class="btn-next-step" @click.prevent="goToInsights()">Next Step</button>
                  
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
      <b-modal :show="modalControl" @close="modalControl = false" :hasDefaultButton="false">
        <template slot="modal-header">
          <h1>Create Industry</h1>
        </template>
        <template slot="modal-body">
          <b-input
            :hasIcon="true"
            :placeholder="'Industry Name'"
            :type="'text'"
            :name="'industry'"
            :id="'industry'"
            v-model="industry"
            @blur="$v.industry.$touch()"  
          />
          <ul class="ContactForm__messages" v-if="$v.industry.$error">
            <li v-if="!$v.industry.required">
              This field is required.
            </li>
          </ul>
        </template>
        <template slot="modal-footer">
          <button class="btn-next-step" @click="createIndustry()">Create</button>
        </template>
      </b-modal>
    </div>
    <div class="col-md-12 col-xs-12 second"></div>
  </div>
</template>

<script>
import axios from 'axios'
import BModal from '@/components/BModal'
import BInput from '@/components/BInput'
import { required } from 'vuelidate/lib/validators'
import { notification } from '@/support/utils/notification-mixin'

export default {
  name: 'Welcome',
  mixins: [notification],
  components: {
    BModal,
    BInput
  },
  data: () => ({
    industry: '',
    revenue: '',
    industryId: '',
    industries: [],
    modalControl: false,
    loadingIndustries: true
  }),
  mounted() {
    axios.defaults.headers.common['Authorization'] = `Bearer ${window.localStorage.getItem('token')}`
    setTimeout(() => {
      this.searchIndustries()
    }, 2000)
  },
  methods: {
    searchIndustries () {
      axios.get(`${process.env.VUE_APP_HOST}/industry/search`)
        .then(response => {
          this.loadingIndustries = false
          if ( response.data.status ) {
            this.industries = [...response.data.data]
          }
        })
    },
    createIndustry () {
      const name = this.industry
      this.$v.industry.$touch()
      // if its still pending or an error is returned do not submit
      if (this.$v.industry.$pending || this.$v.industry.$error) return
      axios.post(`${process.env.VUE_APP_HOST}/industry/new`, { name })
        .then(response => {
          if ( response.data.status ) {
            this.searchIndustries()
            this.modalControl = false
            this.industry = ''
            this.$v.$reset()
            this.successMsg('Industry', `New industry was created`)
          } else {
            throw new Error('Something wrong when try create inustry')
          }
        })
        .catch(error => this.errorMsg('Industry', `${error}`))
    },
    goToInsights () {
      const name = 'New Company'
      const revenue = Number(this.revenue)
      const accountid = Number(window.localStorage.getItem('accountId'))
      const industryid = this.industryId
      this.$v.revenue.$touch()
      // if its still pending or an error is returned do not submit
      if (this.$v.revenue.$pending || this.$v.revenue.$error) return
      axios.post(`${process.env.VUE_APP_HOST}/company/new`, { name, revenue, accountid, industryid })
        .then(response => {
          if ( response.data.status ) {
            this.$v.$reset()
            this.$router.push('/dashboard/insights')
          } else {
            throw new Error('Something went wrong when try create company')
          }
        })
        .catch(error => this.errorMsg('Company', `${error}`))
    }
  },
  validations: {
    industry: {
      required
    },
    revenue: {
      required
    }
  }
}
</script>

<style scoped>
.ContactForm__messages {
  list-style-type: none;
  padding-left: 0;
  color: red;
}

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
