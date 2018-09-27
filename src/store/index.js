import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    index: 0
  },
  getters: {
    header: state => {
      let h1 = ''
      let h2 = ''
      let src
      switch (state.index) {
        case 1:
          src = require('../assets/banner/banner1.jpg')
          h1 = '解决方案'
          break
        case 2:
          src = require('../assets/banner/banner4.jpg')
          h1 = '应用案例'
          break
        case 3:
          src = require('../assets/banner/banner5.jpg')
          h1 = '新闻资讯'
          break
        case 4:
          src = require('../assets/banner/banner2.jpg')
          h1 = '我们只选对的材料给客户'
          break
        case 5:
          src = require('../assets/banner/banner2.jpg')
          h1 = '联系我们'
          break
      }
      return {
        index: state.index, h1, h2, src
      }
    }
  }
})
