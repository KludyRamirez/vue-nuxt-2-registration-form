import Vue from 'vue'
import {
  extend,
  localize,
  ValidationProvider,
  ValidationObserver,
} from 'vee-validate'
import { required, min, max, confirmed, email } from 'vee-validate/dist/rules'
import en from 'vee-validate/dist/locale/en.json'

extend('required', required)
extend('min', min)
extend('max', max)
extend('confirmed', confirmed)
extend('email', email)

localize('en', {
  messages: en.messages,
  names: {
    email: 'Email',
    password: 'Password',
  },
  fields: {
    password_confirmation: {
      confirmed: 'The password confirmation does not match',
    },
  },
})

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
