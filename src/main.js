// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueResource from 'vue-resource'
import router from './router'

Vue.use(vueResource)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: `<div id="app">
     <ul>
          <li> <router-link to="/">Users</router-link></li>
          <li> <router-link to="/test">Test</router-link></li>
     </ul>
     <router-view> </router-view>


  
  </div>`
}).$mount('#app')
