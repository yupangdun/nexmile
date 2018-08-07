<template>
  <el-container id="app">
    <!-- 头部 -->
    <el-header height="500px">
      <div style="height: 120px; display: flex;flex-direction: row;align-items: center; justify-content: center;">
        <div style="flex: 1;display: flex; align-items: center; justify-content: center;">
          <img style="width:80px;" src="./assets/logo.png" />
        </div>
        <div style="flex: 2; display: flex;align-items: center;justify-content: center;">
          <c-tab :list="['产品解决方案', '应用案例', '资讯', '关于NEXMILE', '联系我们']" v-model="index" @click="click"></c-tab>
          <div style="margin:0 40px;color:#8ac454;">中/EN</div>
          <el-input placeholder="搜索" style="width: 180px;">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </div>
      </div>
      <el-carousel arrow="never" trigger="click">
        <el-carousel-item v-for="(item,index) in bannerList" :key="index" style="text-align: center;">
          <img style="width: 100%;height: 100%;" :src="item.src" />
          <div>
            <span style="position: relative;top: -230px;color: white;font-size: 32px;">产品解决方案</span>
          </div>
          <div>
            <span style="position: relative;top: -220px;color: white;font-size: 24px;">电磁屏蔽&兼容 , 射频吸收 , 无线充电解决方案</span>
          </div>
        </el-carousel-item>
      </el-carousel>
    </el-header>
    <!-- 内容 -->
    <el-main>
      <router-view/>
    </el-main>
    <!-- 底部 -->
    <el-footer style="background-color: #002d56;height:400px;">

    </el-footer>
  </el-container>
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
