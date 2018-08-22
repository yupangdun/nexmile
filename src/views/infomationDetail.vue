<template>
  <div class="base">
    <p class="h1">{{item.title}}</p>
    <p class="date">{{item.date}}</p>
    <hr>
    <div>
      <img class="img" :src="item.image" alt="">
      <p class="content">{{item.content}}</p>
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
  margin: 0 10%;
  padding: 40px 100px;
}

.h1 {
  font-size: 1.6rem;
  color: #0055aa;
  margin-bottom: 0px;
}
.date {
  color: #666;
  font-size: 1.2rem;
  margin: 10px 0 40px;
}
.img {
  float: left;
  width: 400px;
  margin: 40px 40px 40px 0;
}

.content {
  padding: 40px 40px 40px 0;
  font-size: 1.2rem;
  color: #666;
  line-height: 2.5rem;
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
