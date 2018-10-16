<template>
  <div>
    <div class="fiexd">
      <div class="header-div">
        <div class="header-div-div header-icon" @click="home">
          <img style="width:100px;" :src="icon" />
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
      <el-carousel-item v-for="(item,index) in bannerList" indicator-position="relative" :key="index" style="text-align: center;">
        <div class="image-div">
          <img style="height: 100%;" :src="item.src" />
        </div>
        <div class="image-box">
          <p class="p1">{{item.h1}}</p>
          <p class="p2">{{item.h2}}</p>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<style scoped>
.image-box {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.p1 {
  color: white;
  font-size: 40px;
  letter-spacing: 1px;
  margin: 0px;
}

.p2 {
  color: white;
  font-size: 21px;
  letter-spacing: 1px;
  width: 520px;
}

.image-div {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
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
          src: require('../assets/banner/home.jpg'),
          h1: 'STEP TO THE NEXT',
          h2: '昨天的历练，今天的努力，明天的探索，未来的思考我们永远在征途'
        }
        // {
        //   src: require('../assets/banner/banner1.jpg'),
        //   h1: '产品解决方案',
        //   h2: '电磁屏蔽&兼容，射频吸收，无线充电解决方案'
        // },
        // {
        //   src: require('../assets/banner/banner4.jpg'),
        //   h1: '应用案例',
        //   h2: '广泛应用于通讯设备、航空航天、医疗、电子、机械制造、轨道交通、新能源等行业'
        // },
        // {
        //   src: require('../assets/banner/banner5.jpg'),
        //   h1: '资讯',
        //   h2: '在功能材料领域为客户探求更适的资源和创造更佳的解决方案'
        // },
        // {
        //   src: require('../assets/banner/banner2.jpg'),
        //   h1: '关于NEXMILE',
        //   h2: '深入挖掘功能材料行业特点，以合理的价格，优质的产品，快速的响应，优质的供应链管理，提供给客户全新非凡的价值体验'
        // }
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
