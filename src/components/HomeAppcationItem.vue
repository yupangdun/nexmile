<template>
  <div @click='$emit("click")' class="backgroud" :style="getStyle">
    <div class="item-base">
      <div class="box">
        <p class="p1">{{title}}</p>
        <p class="content">{{content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    title: String,
    content: String
  },
  computed: {
    getStyle () {
      return {
        backgroundImage: `url(${this.image})`
      }
    }
  }
}
</script>

<style scoped>
.backgroud {
  width: 240px;
  height: 325px;

  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: 100% auto;
}
.item-base {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.item-base:hover {
  background: rgba(0, 85, 170, 0.6);
}

.item-base:hover:before {
  content: "";
}

.item-base:hover .box {
  top: 0px;
}

.item-base::before {
  font-family: "iconfont" !important;
  font-style: normal;
  font-size: 30px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "\e61c";
  color: white;
  position: relative;
  left: 180px;
  top: 40px;
  line-height: 0px;
}

.box {
  position: relative;
  padding: 20px;
  height: 325px;
  position: relative;
  top: 210px;
  transition: all 0.3s ease-out;
  overflow: hidden;
}

.box:after {
  font-family: "iconfont" !important;
  font-style: normal;
  font-size: 30px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "\e600";
  color: white;
  position: absolute;
  right: 20px;
  bottom: 80px;
  line-height: 0px;
}

.p1 {
  color: white;
  font-size: 21px;
}

.content {
  color: white;
  font-size: 15px;
  line-height: 24px;
}
</style>
