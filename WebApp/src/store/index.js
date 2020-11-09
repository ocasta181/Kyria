import Vue from "vue"
import Vuex from "vuex"
import columns from "./modules/columns"
import tasks from "./modules/tasks"

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
      columns,
      tasks
  }
})

export default store