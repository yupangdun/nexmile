<template>
  <div @click="$emit('click')">
    <img :src="src" :alt="alt" />
    <p>{{label}}</p>
  </div>
</template>
<script>
export default {
  name: 'solutionItem',
  props: {
    src: String,
    alt: {
      type: String,
      default: ''
    },
    label: String
  }
}
</script>
<style scoped>
@font-face {
  font-family: "iconfont";
  src: url("../assets/font/iconfont.ttf?t=1533735893629") format("truetype"),
    url("../assets/font/iconfont.svg?t=1533735893629#iconfont") format("svg");
}

div {
  flex: 1;
  padding: 0px 0px 0px 40px;
}

div::before {
  font-family: "iconfont" !important;
  font-style: normal;
  font-size: 2.2em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "\e61c";
  color: white;
  position: relative;
  top: 60px;
  left: calc(100% - 60px);
  line-height: 0px;
}

img {
  width: 100%;
}

p {
  position: relative;
  top: -60px;
  color: white;
  font-size: 1.6rem;
  text-indent: 1rem;
  margin: 0;
  line-height: 0px;
}
</style>
