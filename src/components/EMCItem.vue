<template>
  <div class="div" @click="$emit('click')" :style="{  flexDirection:first?'row':'row-reverse'  }">
    <img :src="src">
    <div>
      <p class="item-p1">{{label}}</p>
      <p class="item-p2">{{getContent}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    first: Boolean,
    src: String,
    label: String,
    subLabel: String
  },
  computed: {
    getContent () {
      let str = this.subLabel
      if (this.subLabel && this.subLabel.length > 60) {
        str = this.subLabel.substring(0, 60) + '...'
      }
      return str
    }
  }
}
</script>

<style scoped>
.div {
  width: 960px;
  height: 320px;
  display: flex;
  /* background: white; */
  margin-bottom: 50px;
}
.div img {
  width: 595px;
  height: 320px;
}
.div div {
  width: 315px;
  height: 280px;
  padding: 20px;
}
.item-p1 {
  color: #0055aa;
  font-size: 26px;
}

.item-p2 {
  color: #4d4d4d;
  font-size: 17px;
  line-height: 30px;
}
</style>
