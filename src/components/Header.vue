<template>
  <div>
    <div class="fiexd">
      <div class="header-div">
        <div class="header-div-div header-icon" @click="home">
          <img style="width:80px;" :src="icon" />
        </div>
          <div class="header-div-div" style="flex: 3; ">
            <c-tab :list="['解决方案', '应用案例', '新闻资讯', '关于我们', '联系我们']" :value="header.index-1" @click="click"></c-tab>
            <div class="language">中/EN</div>
            <el-input placeholder="搜索" style="max-width: 180px;">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </div>
        </div>
      </div>
      <el-carousel arrow="never" trigger="click" :indicator-position='$store.state.index?"none":""'>
        <el-carousel-item v-for="(item,index) in bannerList" indicator-position="none" :key="index" style="text-align: center;">
          <img style="width: 100%;height: 100%;" :src="item.src" />
          <p class="p1">{{item.h1}}</p>
          <p class="p2">{{item.h2}}</p>
        </el-carousel-item>
      </el-carousel>
    </div>
</template>
<style scoped>
.p1 {
  position: relative;
  top: -300px;
  color: white;
  font-size: 40px;
  letter-spacing: 1px;
  margin: 0px;
  /* text-shadow: 1px 1px 1px #ffffff; */
}

.p2 {
  position: relative;
  top: -284px;
  color: white;
  font-size: 21px;
  letter-spacing: 1px;
  margin: 0px;
  padding: 0 20%;
  /* text-shadow: 1px 1px 1px #ffffff; */
}
</style>
<script>
import Tab from './Tab.vue'
export default {
  components: { 'c-tab': Tab },
  data () {
    return {
      icon: require('../assets/logo.png')
    }
  },
  computed: {
    header () {
      return this.$store.getters.header
    },
    bannerList () {
      let list = [
        {
          src: require('../assets/banner/banner3.jpg'),
          h1: 'OUR VISION',
          h2: '成为全球最佳的功能材料解决方案开拓者以及提供商'
        },
        {
          src: require('../assets/banner/banner1.jpg'),
          h1: '产品解决方案',
          h2: '电磁屏蔽&兼容，射频吸收，无线充电解决方案'
        },
        {
          src: require('../assets/banner/banner4.jpg'),
          h1: '应用案例',
          h2: '广泛应用于通讯设备、航空航天、医疗、电子、机械制造、轨道交通、新能源等行业'
        },
        {
          src: require('../assets/banner/banner5.jpg'),
          h1: '资讯',
          h2: '在功能材料领域为客户探求更适的资源和创造更佳的解决方案'
        },
        {
          src: require('../assets/banner/banner2.jpg'),
          h1: '关于NEXMILE',
          h2: '深入挖掘功能材料行业特点，以合理的价格，优质的产品，快速的响应，优质的供应链管理，提供给客户全新非凡的价值体验'
        }
      ]
      if (this.$store.state.index) {
        list = [this.$store.getters.header]
      } else {
      }
      return list
    }
  },
  methods: {
    click (index) {
      this.$store.state.index = index + 1
      this.$emit('click', index + 1)
    },
    home () {
      this.$store.state.index = 0
      this.$emit('click', 0)
    }
  }

}
</script>
