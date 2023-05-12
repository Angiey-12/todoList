import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "whatwg-fetch";
import App from './App.vue';
import { request } from "./assets/js/request";
import store from "./store/index";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.prototype.$request = request;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')