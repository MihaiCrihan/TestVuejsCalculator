import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import router from './Router'
import Vuex from 'vuex'
import store from './components/store/store.js'
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router :router,
  store,
  render: h => h(App),
}).$mount('#app')
