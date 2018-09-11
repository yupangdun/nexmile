<template>
  <div class="item-base">
    <img class="item-image" :src="image" :alt="name">
    <div class="absolute"></div>
    <img class="item-icon" :src="icon" :alt="name">
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
    name: String
  }
}
</script>

<style scoped>
.item-base {
  width: 380px;
  height: 460px;
  background: white;
  position: relative;
}
.item-base:hover {
  background: #0055aa;
}

.item-base:hover p,
.item-base:hover .p::after {
  color: white;
}

.item-base:hover .absolute {
  background: rgba(255, 255, 255, 0);
}

.item-image {
  height: 230px;
  width: 100%;
}
.absolute {
  position: absolute;
  top: 0;
  width: 100%;
  height: 230px;
  background: linear-gradient(rgba(0, 85, 170, 0), rgba(0, 45, 85, 1));
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
