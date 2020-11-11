import Axios from "axios";

import Vue from "vue";

Axios.defaults.baseURL = "http://localhost:5000/api";
Axios.defaults.headers.common.Accept = "application/json";

Vue.prototype.$http = Axios;

Object.defineProperty(Vue.prototype, "$http", {
  get() {
    return Axios;
  }
});

export default Axios;
