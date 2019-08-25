import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/styles/base.scss";
import { Toast, Tab, Tabs, List, Cell, Search, NavBar } from "vant";
Vue.use(Toast)
  .use(Tab)
  .use(Tabs)
  .use(List)
  .use(Cell)
  .use(Search)
  .use(NavBar);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
