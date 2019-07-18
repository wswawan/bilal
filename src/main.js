import { sync } from "vuex-router-sync";
import Vue from 'vue'
import './plugins/axios'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false
sync(store, router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
