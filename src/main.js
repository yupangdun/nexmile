// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import { Carousel, CarouselItem, Container, Header, Main, Footer, Input, Pagination, Dialog } from 'element-ui'

Vue.component(Container.name, Container)
Vue.component(Header.name, Header)
Vue.component(Main.name, Main)
Vue.component(Footer.name, Footer)
Vue.component(Input.name, Input)
Vue.component(Carousel.name, Carousel)
Vue.component(CarouselItem.name, CarouselItem)
Vue.component(Pagination.name, Pagination)
Vue.component(Dialog.name, Dialog)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
