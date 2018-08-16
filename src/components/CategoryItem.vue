<template>
  <div class="base">
    <div class="div" @click="$emit('click')">
      <div>
        <img class="img" :src="image">
      </div>
      <div class="text">
        <p class="h1">{{name}}</p>
        <p class="p">{{introduction}}</p>
        <p class="p">{{feature}}</p>
      </div>
    </div>
    <div class="tip-div">
      <p class="tip">查看详细参数</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    name: String,
    introduction: String,
    feature: String
  }
}
</script>

<style scoped>
.base {
  background-color: white;
  margin: 20px;
  padding: 40px;
}
.div {
  display: flex;
  flex-direction: row;
}
.img {
  height: 250px;
}
.text {
  padding: 0px 40px;
  height: 100%;
}
.tip-div {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.tip {
  text-align: center;
  margin: 0;
  line-height: 40px;
  width: 180px;
  position: relative;
  right: -40px;
  color: white;
  background-color: #7dbe4e;
}
.h1 {
  font-size: 1.5rem;
  margin: 0px;
  color: #0055aa;
}
.p {
  color: #666;
  line-height: 2rem;
}
</style>
