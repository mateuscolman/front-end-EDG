import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Spells from './components/Spells.vue'
import axios from 'axios'

Vue.prototype.$http = axios

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [        
    {path: '/', component: Home},
    {path: '/spells', component: Spells}
  ]
})


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
