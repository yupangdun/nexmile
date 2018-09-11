<template>
  <div class="item-base" @click="$emit('click')">
    <div class="img">
      <img :src="src" alt="">
    </div>
    <div class="p">
      <p>{{label}}</p>
      <p>解决方案</p>
    </div>
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
.item-base {
  width: 380px;
  height: 320px;
}

.item-base:hover .p {
  background: #0055aa;
}

.img {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
}

.p {
  height: 120px;
  background: #002d55;
  padding: 20px;
}

p {
  margin: 0px;
  font-size: 21pt;
  color: white;
  line-height: 32pt;
}

.p::after {
  font-family: "iconfont" !important;
  font-style: normal;
  font-size: 24pt;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "\e61c";
  color: white;
  position: relative;
  top: 14px;
  left: calc(100% - 34px);
  line-height: 0px;
}

/* div::before {
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

p {
  position: relative;
  top: -60px;
  color: white;
  font-size: 1.6rem;
  text-indent: 1rem;
  margin: 0;
  line-height: 0px;
} */
</style>
