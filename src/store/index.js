import Vue from "vue"
import Vuex from "vuex"
import columns from "./modules/columns"

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
      columns
  }
})

export default store