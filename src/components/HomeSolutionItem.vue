<template>
  <div class="item-base" @mouseleave="hover=false" @mouseenter="hover=true">
    <img v-show="!hover" class="item-image" :src="image" :alt="content">
    <img v-show="hover" class="item-image" :src="hoverImage" :alt="content">
    <img v-show="!hover" class="item-icon" :src="icon" :alt="content">
    <img v-show="hover" class="item-icon" :src="icon" :alt="content">
    <div class="p">
      <p>{{content}}</p>
      <p>解决方案</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    hoverImage: String,
    icon: String,
    hoverIcon: String,
    content: String
  },
  data () {
    return {
      hover: false
    }
  }

}
</script>

<style scoped>
.item-base {
  width: 380px;
  height: 460px;
  background: white;
}
.item-base:hover {
  background: #0055aa;
}

.item-base:hover p,
.item-base:hover .p::after {
  color: white;
}

.hover-image {
  position: relative;
  top: -230px;
}

.item-image {
  height: 230px;
  width: 100%;
}
.item-icon {
  height: 24px;
  margin: 42px 20px;
}
.p {
  padding: 18px 20px 0;
}

.p::after {
  font-family: "iconfont" !important;
  font-style: normal;
  font-size: 30pt;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "\e61c";
  color: #4d4d4d;
  position: relative;
  left: 300px;
  top: -40px;
  line-height: 0px;
}

p {
  font-size: 16pt;
  line-height: 28pt;
  margin: 0;
  color: #4d4d4d;
}
</style>
