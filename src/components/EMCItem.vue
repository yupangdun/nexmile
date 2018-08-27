<template>
  <div class="div">
    <div style="background-color:white;height:100%;" @click="$emit('click')">
      <div class="img-div">
        <img :src="src">
      </div>
      <div class="label-div">
        <p class="p1">{{label}}</p>
        <p class="p2">{{getContent}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
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
  flex: 1;
  padding: 40px 0 40px 40px;
}

.img-div img {
  width: 100%;
}
.label-div {
  padding: 20px;
}
.label-div p1,
.label-div p2 {
  letter-spacing: 2px;
}

.p1 {
  font-size: 1.4rem;
  color: #0055aa;
}
.p2 {
  font-size: 1rem;
  color: #808080;
  line-height: 2rem;
}
</style>
