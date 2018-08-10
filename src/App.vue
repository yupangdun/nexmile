<template>
  <el-container id="app">
    <!-- 头部 -->
    <el-header class="header">
      <div class="header-div">
        <div class="header-div-div header-icon">
          <img style="width:80px;" src="./assets/logo.png" />
        </div>
        <div class="header-div-div" style="flex: 3; ">
          <c-tab :list="['产品解决方案', '应用案例', '资讯', '关于NEXMILE', '联系我们']" v-model="index" @click="click"></c-tab>
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
    </el-header>
    <!-- 内容 -->
    <el-main>
      <router-view/>
    </el-main>
    <!-- 底部 -->
    <el-footer class="footer">
      <div class="footer-div">
        <div>
          <p style="font-size: 1.5rem;margin: 20px 0;">关于NEXMILE</p>
          <p>为了工业和商业用户提供功能性原材料以及加工解决方案的供应商，以及配套企业服务，技术服务，解决方案的一体化供应链伙伴。 </p>
          <p style="flex: 1;"></p>
          <p>睿惢思工业科技（苏州）有限公司 版权所有 苏ICP备17027514号</p>
        </div>
        <div class="address">
          <p style="font-size: 1.5rem;margin: 20px 0;">联系我们 </p>
          <p>
            <img src="./assets/页尾-1.png" />苏州工业园区唯新路58号 启迪人工智能产业园31#第二单元
          </p>
          <p>
            <img src="./assets/页尾-2.png" />0512-65927151
          </p>
          <p>
            <img src="./assets/页尾-3.png" />service@nexmile.com
          </p>
          <div>
            <img src="./assets/页尾-4.png">
            <img src="./assets/页尾-5.png">
          </div>
        </div>
      </div>
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
@media screen and (min-width: 800px) {
  .header-icon {
    flex: 1;
  }
}

.header {
  height: 550px !important;
}

.header-div {
  height: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.header-icon {
  padding: 0 40px;
}

.header-div-div {
  display: flex;
  align-items: center;
  justify-content: center;
}

.language {
  margin: 0 40px;
  color: #8ac454;
}

.el-header {
  padding: 0px;
}

.el-main {
  overflow: unset;
  padding: 0px;
}

.el-carousel__container {
  height: 430px;
}

.footer {
  background-color: #002d56;
  height: 350px !important;
  padding: 0px;
}

.footer-div {
  display: flex;
  height: 100%;
  flex-direction: row;
  overflow: hidden;
  padding: 0 10%;
}

.footer-div div {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 40px 40px 20px 40px;
}

.footer-div p {
  font-size: 1rem;
  line-height: 36px;
  margin: 0;
  color: white;
}

.address img {
  max-width: 16px;
  max-height: 16px;
  margin: 0px 10px 0 0;
}

.address div {
  padding: 20px 0;
  display: flex;
  flex-direction: row;
}

.address div img {
  max-width: 70px;
  max-height: 70px;
  height: 58px;
  margin-right: 30px;
}
</style>
