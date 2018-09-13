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
  height: 125px;
  margin: 0 0 70px 0;
}
.div-1 {
  border-right: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 125px;
}
.date-day {
  font-size: 60px;
  color: #7dbe41;
  margin: 0;
}

.date-month {
  font-size: 15px;
  color: #808080;
  margin: 0;
}

.name {
  font-size: 20px;
  color: #4d4d4d;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin: 0;
}

.content {
  font-size: 14px;
  line-height: 24px;
  color: #666;
  height: 80px;
}

.content p {
  height: 70px;
}

.div-2 {
  flex: 1;
  padding: 0 40px;
  height: 125px;
  overflow: hidden;
}
</style>
