<template>
  <div class="ibase" @click='$emit("click")'>
    <img :src="image">
    <div class="div-2">
      <p class="name">{{title}}</p>
      <p class="date">{{getDate}}</p>
      <div class="content">
        <p>{{getContent}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  props: {
    title: String,
    content: String,
    date: String,
    image: String
  },
  computed: {
    getDate () {
      return moment(this.date).format('YYYY年MM月DD日')
    },
    getContent () {
      let str = this.content
      if (this.content && this.content.length > 60) {
        str = this.content.substring(0, 100) + '...'
      }
      return str
    }
  }
}
</script>

<style scoped>
.ibase {
  display: flex;
  justify-content: space-between;
  height: 200px;
  width: 960px;
  margin: 0 0 70px 0;
}
.ibase img {
  width: 300px;
  height: 100%;
}

.name {
  font-size: 24px;
  color: #0055aa;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin: 0;
}

.date {
  font-size: 14px;
  color: #808080;
}

.content {
  font-size: 17px;
  line-height: 30px;
  color: #4d4d4d;
  height: 80px;
}

.content p {
  height: 70px;
}

.div-2 {
  width: 620px;
  height: 100%;
  overflow: hidden;
}
</style>
