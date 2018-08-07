// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import { Tabs, TabPane, Select, Option } from 'element-ui'

Vue.component(Tabs.name, Tabs)
Vue.component(TabPane.name, TabPane)

Vue.component(Select.name, Select)
Vue.component(Option.name, Option)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
