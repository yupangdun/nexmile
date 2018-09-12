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
          <p class="footer-h1">关于NEXMILE</p>
          <p class="footer-content">为了工业和商业用户提供功能性原材料以及加工解决方案的供应商，以及配套企业服务，技术服务，解决方案的一体化供应链伙伴。 </p>
          <p style="flex: 1;"></p>
          <p class="footer-remark">睿惢思工业科技（苏州）有限公司 版权所有 苏ICP备17027514号</p>
        </div>
        <div class="address">
          <p class="footer-h1">联系我们 </p>
          <p class="footer-content">
            <img src="./assets/页尾-1.png" />苏州工业园区唯新路58号 启迪人工智能产业园31#第二单元
          </p>
          <p class="footer-content">
            <img src="./assets/页尾-2.png" />0512-65927151
          </p>
          <p class="footer-content">
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

.header {
  height: 530px !important;
}
.fiexd {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  background: white;
}
.header-div {
  height: 105px;
  width: 1050px;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
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

.el-carousel {
  margin-top: 105px;
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
  width: 1050px;
  margin: auto;
}

.footer-div > div {
  display: flex;
  flex-direction: column;
  width: 496px;
  overflow: hidden;
  padding: 56px 0 0 0;
}
.footer-div div:first-child {
  margin-right: 152px;
}

.footer-h1 {
  font-size: 18pt;
  color: white;
}

.footer-content {
  font-size: 13pt;
  color: white;
  margin: 0;
  line-height: 24pt;
}
.footer-remark {
  font-size: 12pt;
  color: white;
  line-height: 24pt;
}

.address p > img {
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
  height: 45px;
  margin-right: 20px;
}

.el-dialog {
  width: 700px;
}
</style>
