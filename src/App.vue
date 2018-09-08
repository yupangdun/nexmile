<template>
  <el-container id="app">
    <!-- 头部 -->
    <el-header class="header">
      <c-header @click='click'></c-header>
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
            <img src="./assets/页尾-3.png" />info@nex-mile.com
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

import Header from './components/Header.vue'
export default {
  name: 'App',
  components: { 'c-header': Header },
  data () {
    return {
    }
  },
  methods: {
    click (index) {
      let path = ['/', 'solution', 'case', 'infomation', 'about', 'contact']
      this.$router.push(path[index])
    }
  }
}
</script>

<style>
@font-face {
  font-family: "iconfont";
  src: url("./assets/font/iconfont.ttf?t=1533735893629") format("truetype"),
    url("./assets/font/iconfont.svg?t=1533735893629#iconfont") format("svg");
}
/* @media screen and (min-width: 800px) {
  .header-icon {
    flex: 1;
  }
} */

.header {
  height: 530px !important;
}

.header-div {
  height: 105px;
  /* padding-left: 10%; */
  width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */
}

.header-icon {
  /* padding: 0 40px; */
  height: 100%;
}

.header-div-div {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* padding-right: 5%; */
}

.language {
  margin: 0 20px;
  font-size: 16pt;
  color: #7dbe4e;
}

.el-header {
  padding: 0px;
}

.el-main {
  overflow: unset;
  padding: 0px;
  background: #f2f2f2;
}

.el-carousel__container {
  height: 425px;
}

.footer {
  background-color: #002d55;
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
  font-size: 1.1rem;
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
