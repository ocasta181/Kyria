import Vue from 'vue'
import App from './App.vue'
import store from "./store"
import { loader } from "@/utils"

Vue.config.productionTip = false
Vue.prototype.$loader = loader

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
