// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'swiper/dist/css/swiper.css'
import VueLazyload from 'vue-lazyload'
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
import PrettyCheckbox from 'pretty-checkbox-vue';
import './mock'

Vue.config.productionTip = false

import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=11971430,2548688016&fm=200&gp=0.jpg',
  loading: 'http://img.lanrentuku.com/img/allimg/1212/5-121204193R5-50.gif',
  attempt: 1
})
Vue.use(MintUi)
Vue.use(PrettyCheckbox)

router.beforeEach(function (to,from,next) {
  document.title = to.meta.title
  next()
})

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
