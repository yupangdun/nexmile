<template>
  <div class="item-base" @click="$emit('click')">
    <img class="item-image" :src="image" :alt="name">
    <div class="absolute"></div>
    <img class="item-icon" :src="icon" :alt="name">
    <img class="item-icon-hover" :src="icon_bg" :alt="name">
    <div class="p">
      <p>{{name}}</p>
      <p>解决方案</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    icon: String,
    icon_bg: String,
    name: String
  }
}
</script>

<style scoped>
.item-base {
  width: 320px;
  height: 400px;
  background: white;
  position: relative;
}
.item-base:hover {
  background: #0055aa;
}

.item-base:hover .item-icon {
  display: none;
}
.item-base:hover .item-icon-hover {
  display: block;
}

.item-base:hover p,
.item-base:hover .p::after {
  color: white;
}

.item-base:hover .absolute {
  background: rgba(255, 255, 255, 0);
}

.item-image {
  height: 200px;
  width: 100%;
}
.absolute {
  position: absolute;
  top: 0;
  width: 100%;
  height: 200px;
  background: linear-gradient(rgba(0, 85, 170, 0), rgba(0, 45, 85, 1));
}

.item-icon {
  height: 24px;
  margin: 26px 20px;
}

.item-icon-hover {
  height: 24px;
  margin: 26px 20px;
  display: none;
}
.p {
  padding: 18px 20px 0;
}

.p::after {
  font-family: "iconfont" !important;
  font-style: normal;
  font-size: 30px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "\e61c";
  color: #4d4d4d;
  position: relative;
  left: 240px;
  top: -20px;
  line-height: 0px;
}

p {
  font-size: 16px;
  line-height: 28px;
  margin: 0;
  color: #4d4d4d;
}
</style>
