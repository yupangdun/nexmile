<template>
  <div class="i-base">
    <div class="i-box" @click="$emit('click')">
      <p style="color:#0055a9;">{{date}}</p>
      <p class="i-p1">{{title}}</p>
      <div style="flex:1;">
        <p class="i-p2">{{getContent}}</p>
      </div>
      <p style="color:#0055a9;">阅读更多</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    content: String,
    date: String
  },
  computed: {
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
.i-base {
  flex: 1;
  height: 300px;
  padding: 0 0 0 40px;
}
.i-box {
  height: 100%;
  background: white;
  border-top: 2px solid #0055a9;
  padding: 0 40px 10px;
  display: flex;
  flex-direction: column;
}

.i-p1 {
  font-size: 1.2rem;
  color: #666;
  margin: 0;
}
.i-p2 {
  font-size: 1rem;
  line-height: 1.4rem;
  color: #666;
}
</style>
