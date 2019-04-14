import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import Input from '@/pages/Input.vue'
import Output from '@/pages/Output.vue'
import Results from '@/pages/Results.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Input',
      name: 'Input',
      component: Input
    },
    {
      path: '/Output',
      name: 'Output',
      component: Output
    },
    {
      path: '/Results',
      name: 'Results',
      component: Results
    }
  ]
})