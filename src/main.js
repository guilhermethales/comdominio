import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import CpfValidator from './components/validators/cpf.validator'
import Dictionary from './components/validators/dictionary'
import router from './router'
import store from './vuex'

// Plugins
import GlobalComponents from './globalComponents'
import GlobalDirectives from './globalDirectives'
import Notifications from './components/UIComponents/NotificationPlugin'
import SideBar from './components/UIComponents/SidebarPlugin'
import App from './App'

// library imports
import Chartist from 'chartist'

Validator.extend('cpf', CpfValidator)

// plugin setup
Vue.use(VeeValidate,  {locale: 'pt', dictionary: Dictionary})
Vue.use(GlobalComponents)
Vue.use(GlobalDirectives)
Vue.use(Notifications)
Vue.use(SideBar)

// global library setup
Object.defineProperty(Vue.prototype, '$Chartist', {
  get () {
    return this.$root.Chartist
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  data: {
    Chartist: Chartist
  }
})
