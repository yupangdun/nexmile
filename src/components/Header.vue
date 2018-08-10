<template>
  <div>
    <div class="header-div">
      <div class="header-div-div header-icon">
        <img style="width:80px;" :src="icon" />
      </div>
      <div class="header-div-div" style="flex: 3; ">
        <c-tab :list="['产品解决方案', '应用案例', '资讯', '关于NEXMILE', '联系我们']" v-model="index" @click="$emit('click',index)"></c-tab>
        <div class="language">中/EN</div>
        <el-input placeholder="搜索" style="max-width: 180px;">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
    </div>
    <el-carousel arrow="never" trigger="click">
      <el-carousel-item v-for="(item,index) in bannerList" indicator-position="none" :key="index" style="text-align: center;">
        <img style="width: 100%;height: 100%;" :src="item.src" />
        <p style="position: relative;top: -280px;color: white;font-size: 2rem;letter-spacing:1px;margin: 0px;">产品解决方案</p>
        <p style="position: relative;top: -264px;color: white;font-size: 1.5rem;letter-spacing:1px;margin: 0px;">电磁屏蔽&兼容 , 射频吸收 , 无线充电解决方案</p>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import Tab from './Tab.vue'
export default {
  components: { 'c-tab': Tab },
  props: {
    i: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      index: 0,
      icon: require('../assets/logo.png'),
      bannerList: [
        {
          src: require('../assets/banner/banner1.jpg'),
          url: ''
        }
        // {
        //   src: require('./assets/banner/banner2.jpg'),
        //   url: ''
        // },
        // {
        //   src: require('./assets/banner/banner3.jpg'),
        //   url: ''
        // },
        // {
        //   src: require('./assets/banner/banner4.jpg'),
        //   url: ''
        // },
        // {
        //   src: require('./assets/banner/banner5.jpg'),
        //   url: ''
        // }
      ]
    }
  },
  methods: {
    click (index) {

    }
  }

}
</script>
