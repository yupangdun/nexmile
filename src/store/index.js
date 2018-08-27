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
        case 0:
          src = require('../assets/banner/banner3.jpg')
          h1 = '在功能材料领域为客户探求更佳的柔性解决方案'
          h2 = ''; break
        case 1:
          src = require('../assets/banner/banner1.jpg')
          h1 = '产品解决方案'
          h2 = '电磁屏蔽&兼容，射频吸收，无线充电解决方案'; break
        case 2:
          src = require('../assets/banner/banner4.jpg')
          h1 = '应用案例'
          h2 = '广泛应用于通讯设备、航空航天、医疗、电子、机械制造、轨道交通、新能源等行业'; break
        case 3:
          src = require('../assets/banner/banner5.jpg')
          h1 = '资讯'
          h2 = '在功能材料领域为客户探求更适的资源和创造更佳的解决方案'; break
        case 4:
          src = require('../assets/banner/banner2.jpg')
          h1 = '关于NEXMILE'
          h2 = '深入挖掘功能材料行业特点，以合理的价格，优质的产品，快速的响应，优质的供应链管理，提供给客户全新非凡的价值体验'; break
        case 5:
          src = require('../assets/banner/banner2.jpg')
          h1 = '联系我们'
          h2 = '为工业和商业用户提供功能性原材料以及加工解决方案的供应商，以及配套的企业服务，技术服务，解决方案的一体化供应链伙伴'; break
      }
      return {
        index: state.index, h1, h2, src
      }
    }
  }
})
