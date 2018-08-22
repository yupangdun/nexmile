<template>
  <div class="ibase" @click='$emit("click")'>
    <div class="div-1">
      <p class="date-day">{{getDay}}</p>
      <p class="date-month">{{getDate}}</p>
    </div>
    <div class="div-2">
      <p class="name">{{title}}</p>
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
    date: String
  },
  computed: {
    getDay () {
      return moment(this.date).format('DD')
    },
    getDate () {
      return moment(this.date).format('YYYY年MM月')
    },
    getContent () {
      let str = this.content
      if (this.content && this.content.length > 60) {
        str = this.content.substring(0, 60) + '...'
      }
      return str
    }
  }
}
</script>

<style scoped>
.ibase {
  display: flex;
  height: 180px;
  margin: 40px 0;
}
.div-1 {
  border-right: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 180px;
}
.date-day {
  font-size: 6rem;
  color: #7dbe41;
  margin: 0;
}

.date-month {
  font-size: 1.2rem;
  color: #333;
  margin: 0;
}

.name {
  font-size: 1.8rem;
  margin: 0;
}

.content {
  font-size: 1.2rem;
  line-height: 2rem;
  color: #666;
  height: 80px;
  text-overflow: ellipsis;
  overflow: hidden;
}

.content p {
  height: 70px;
}

.div-2 {
  flex: 1;
  padding: 30px 40px;
  height: 120px;
}
</style>
