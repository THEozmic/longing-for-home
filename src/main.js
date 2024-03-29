import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as Tabs from "vue-slim-tabs";

Vue.config.productionTip = false;

Vue.use(Tabs);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
