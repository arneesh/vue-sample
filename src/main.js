import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import "./plugins/vue-sidebar";

import Design from "./plugins/design-kit";

Vue.config.productionTip = false;

Vue.use(Design);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
