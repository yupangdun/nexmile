<template>
  <div class="base">
    <div>
      <p class="h1">{{item.title}}</p>
      <p class="date">{{item.date}}</p>
      <hr>
      <div>
        <img class="img" :src="item.image" alt="">
        <p class="content">{{item.content}}</p>
      </div>
    </div>
    <!-- <hr>
    <div class="info-footer">
      <div>上一篇</div>
      <div>所有文章</div>
      <div>下一篇</div>
    </div> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      item: {}
    }
  },
  created () {
    this.item = this.$route.params
  }
}
</script>

<style scoped>
.base {
  background: white;
  padding: 70px 0 55px;
}

.base > div:first-child {
  width: 960px;
  margin: auto;
}

p {
  margin: 0;
}
.h1 {
  font-size: 24pt;
  color: #0055aa;
  margin-bottom: 0px;
}
.date {
  color: #4d4d4d;
  font-size: 14pt;
  margin: 10px 0 40px;
}
.img {
  float: left;
  width: 500px;
  margin: 40px 40px 40px 0;
}

.content {
  padding: 40px 40px 40px 0;
  font-size: 17pt;
  color: #4d4d4d;
  line-height: 30pt;
}

.info-footer {
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  /* align-items: center; */
  height: 60px;
  font-size: 1.2rem;
  color: #666;
}
</style>
