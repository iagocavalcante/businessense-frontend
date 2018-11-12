<template>
  <div class="create-form">
    <h5 class="welcome">You are new here?</h5>
    <b-input
      :placeholder="'EMAIL ADRESS'"
      :name="'email'"
      :id="'email'"
      :type="'email'"
      v-model="createForm.email"
      @blur="$v.createForm.$touch()"
    />
    <ul class="ContactForm__messages" v-if="$v.createForm.email.$error">
      <li v-if="!$v.createForm.email.required">
        This field is required.
      </li>
    </ul>
    <b-input
      :placeholder="'FIRST NAME'"
      :name="'firstName'"
      :id="'firstName'"
      v-model="createForm.firstName"
      @blur="$v.createForm.$touch()"  
    />
    <ul class="ContactForm__messages" v-if="$v.createForm.firstName.$error">
      <li v-if="!$v.createForm.firstName.required">
        This field is required.
      </li>
    </ul>
    <b-input
      :placeholder="'LAST NAME'"
      :name="'lastName'"
      :id="'lastName'"
      v-model="createForm.lastName"
      @blur="$v.createForm.$touch()"
    />
    <ul class="ContactForm__messages" v-if="$v.createForm.lastName.$error">
      <li v-if="!$v.createForm.lastName.required">
        This field is required.
      </li>
    </ul>
    <b-input
      :hasIcon="true"
      :placeholder="'PASSWORD'"
      :type="'password'"
      :name="'createPassword'"
      :classIcon="'fa fa-lock'"
      :id="'createPassword'"
      v-model="createForm.createPassword"
      @blur="$v.createForm.$touch()"
    />
    <ul class="ContactForm__messages" v-if="$v.createForm.createPassword.$error">
      <li v-if="!$v.createForm.createPassword.required">
        This field is required.
      </li>
    </ul>
    <b-input
      :hasIcon="true"
      :placeholder="'CONFIRM PASSWORD'"
      :type="'password'"
      :name="'confirmPassword'"
      :classIcon="'fa fa-lock'"
      :id="'confirmPassword'"
      v-model="createForm.confirmPassword"
      @blur="$v.createForm.$touch()"  
    />
    <ul class="ContactForm__messages" v-if="$v.createForm.confirmPassword.$error">
      <li v-if="!$v.createForm.confirmPassword.required">
        This field is required.
      </li>
    </ul>
    <div class="col-md-12">
      <input type="checkbox" class="form-checkbox" name="agree" id="">
      <span class="checkbox-text">
        I agree to the terms of use of busissense.
      </span>
    </div>
    <div class="col-md-12 mb-10">
      <input type="checkbox" class="form-checkbox" name="" id="">
      <span class="checkbox-text">
        I agree to receive email newsletters and contriubutions about my account.
      </span>
    </div>
    <div class="form-group">
      <button class="btn-block btn-login" @click.prevent="createUser()">Create</button>
    </div>
  </div>
</template>

<script>
import BInput from '@/components/BInput.vue'
import { email, required } from 'vuelidate/lib/validators'
import axios from 'axios'

export default {
  name: 'CreateUser',
  components: {
    BInput
  },
  data: () => ({
    createForm: {
      email: '',
      firstName: '',
      lastName: '',
      createPassword: '',
      confirmPassword: ''
    }
  }),
  methods: {
    createUser () {
      this.$v.createForm.$touch()
      // if its still pending or an error is returned do not submit
      if (this.$v.createForm.$pending || this.$v.createForm.$error) return
      
      const email = this.createForm.email 
      const password = this.createForm.createPassword
      const firstname = this.createForm.firstName 
      const lastname = this.createForm.lastName
      axios.post(`${process.env.VUE_APP_HOST}/user/new`, { email, password, firstname, lastname})
        .then((response) => {
          if(response.data.status) {
            console.log('criado com sucesso')
            this.createForm = Object.assign({}, createForm)
          }
        })
        .catch(err => console.log(err))
    }
  },
  validations: {
    createForm: {
      email: {
        required,
        email,
      },
      firstName: {
        required,
      },
      lastName: {
        required,
      },
      createPassword: {
        required,
      },
      confirmPassword: {
        required,
      }
    }
  }
}
</script>

<style>
.create-form {
  position: relative;
  width: 270px;
  padding-top: 125px;
  padding-bottom: 135px;
}

.btn-block {
  display: block;
  width: 100%;
}

.ContactForm__messages {
  list-style-type: none;
  padding-left: 0;
  color: red;
}

.btn-login {
  height: 40px;
  border-radius: 3px;
  border: 0;
  background-color: #323031;
  color: white;
}

.form-checkbox {
  position: absolute;
  top: 0;
  left: 0;
  height: 12px;
  width: 12px;
  margin-top: 4px;
  cursor: pointer;
  background: rgba(40,40,40,0.1);
  color:black;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 1.4px solid #ffffff;
}

.form-checkbox:checked {
  background: rgba(40,40,40,0.7);
}

.form-checkbox:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.form-checkbox:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the form-checkbox when checked */
input:checked ~ .form-checkbox:after {
  display: block;
}

.checkbox-text {
  color: #fff;
  padding-left: 10px;
  padding-top: 0;
  font-size: 12px;
}

.welcome {
  margin: 0;
  margin-bottom: 7px; 
}

h5 {
  color: #fff;
}
</style>
