<template>
  <div>
    <div class="header-div">
      <div class="header-div-div header-icon" @click="home">
        <img style="width:80px;" :src="icon" />
      </div>
      <div class="header-div-div" style="flex: 3; ">
        <c-tab :list="['产品解决方案', '应用案例', '资讯', '关于NEXMILE', '联系我们']" :value="header.index-1" @click="click"></c-tab>
        <div class="language">中/EN</div>
        <el-input placeholder="搜索" style="max-width: 180px;">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
    </div>
    <el-carousel arrow="never" trigger="click">
      <el-carousel-item v-for="(item,index) in bannerList" indicator-position="none" :key="index" style="text-align: center;">
        <img style="width: 100%;height: 100%;" :src="header.src" />
        <p class="p1">{{header.h1}}</p>
        <p class="p2">{{header.h2}}</p>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<style scoped>
.p1 {
  position: relative;
  top: -280px;
  color: white;
  font-size: 2rem;
  letter-spacing: 1px;
  margin: 0px;
}

.p2 {
  position: relative;
  top: -264px;
  color: white;
  font-size: 1.5rem;
  letter-spacing: 1px;
  margin: 0px;
  padding: 0 20%;
  line-height: 3rem;
}
</style>
<script>
import Tab from './Tab.vue'
export default {
  components: { 'c-tab': Tab },
  data () {
    return {
      icon: require('../assets/logo.png'),
      bannerList: [{}]
    }
  },
  computed: {
    header () {
      return this.$store.getters.header
    }
  },
  methods: {
    click (index) {
      this.$store.state.index = index + 1
      this.$emit('click', index + 1)
    },
    home () {
      this.$store.state.index = 0
    }
  }

}
</script>
