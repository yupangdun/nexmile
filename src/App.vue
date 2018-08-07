<template>
  <div id="app">
    <el-container>
      <el-header height="500px">
        <div style="height: 120px; display: flex;flex-direction: row;align-items: center; justify-content: center;">
          <div style="flex: 1;display: flex; align-items: center; justify-content: center;">
            <img style="width:80px;" src="./assets/logo.png" />
          </div>
          <div style="flex: 2; display: flex;align-items: center;justify-content: center;">
            <c-tab :list="['产品解决方案', '应用案例', '资讯', '关于NEXMILE', '联系我们']" v-model="index" @click="click"></c-tab>
            <div style="margin:0 40px;">中/EN</div>
            <el-input placeholder="搜索" style="width: 180px;">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </div>
        </div>
        <el-carousel arrow="never" trigger="click">
          <el-carousel-item v-for="(item,index) in bannerList" :key="index">
            <img style="width: 100%;height: 100%;" :src="item.src" />
          </el-carousel-item>
        </el-carousel>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>

      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Tab from './components/Tab.vue'
export default {
  name: 'App',
  components: { 'c-tab': Tab },
  data () {
    return {
      index: 0,
      bannerList: [
        {
          src: require('./assets/banner/banner1.jpg'),
          url: ''
        },
        {
          src: require('./assets/banner/banner2.jpg'),
          url: ''
        },
        {
          src: require('./assets/banner/banner3.jpg'),
          url: ''
        },
        {
          src: require('./assets/banner/banner4.jpg'),
          url: ''
        },
        {
          src: require('./assets/banner/banner5.jpg'),
          url: ''
        }
      ]
    }
  },
  methods: {
    click (index) {
    }
  }
}
</script>

<style>
  .el-header {
    padding: 0px;
  }

  .el-carousel__container {
    height: 380px;
  }

  /* .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  } */
</style>
