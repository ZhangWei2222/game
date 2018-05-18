// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import fastclick from 'fastclick'
import store from './store'
// import 'lib-flexible/flexible.js'

// import css
// import './assets/bootstrap.min.css'
import 'normalize.css'
import '../theme/index.css'

fastclick.attach(document.body)

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
