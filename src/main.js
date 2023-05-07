import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import "whatwg-fetch";
import App from './App.vue'
import { request } from "./assets/js/request";
import store from "./store/index"

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$request = request;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')