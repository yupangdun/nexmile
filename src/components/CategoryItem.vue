<template>
  <div class="base">
    <div class="div" @click="$emit('click')">
      <div>
        <img class="img" :src="image">
      </div>
      <div class="text">
        <p class="h1">{{name}}</p>
        <p class="p">{{introduction}}</p>
        <!-- <p class="p">{{feature}}</p> -->
        <ul>
          <li v-for="i in feature" :key="i">
            <span>{{i}}</span>
          </li>
        </ul>
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
    feature: Array
  }
}
</script>

<style scoped>
.base {
  position: relative;
  background-color: white;
  padding: 20px;
  margin: 20px 0;
  height: 360px;
}
.div {
  display: flex;
  flex-direction: row;
}
.img {
  height: 360px;
  width: 520px;
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
  position: absolute;
  top: 320px;
  right: 0px;
  color: white;
  background-color: #7dbe4e;
}
.h1 {
  font-size: 20px;
  margin: 0px;
  color: #0055aa;
}
.p {
  color: #666;
  font-size: 12px;
  line-height: 20px;
}

li {
  color: #0055aa;
}

li span {
  line-height: 20px;
  color: #666;
}
</style>
