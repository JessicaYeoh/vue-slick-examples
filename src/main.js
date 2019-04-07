import Vue from 'vue'
import App from './App.vue'
import store from './store'
import jquery from 'jquery'

window.jquery = jquery;

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
