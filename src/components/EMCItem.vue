<template>
  <!-- <div class="div" @click="$emit('click')" :style="{  flexDirection:first?'row':'row-reverse'  }">
    <img :src="src">
    <div>
      <p class="item-p1">{{label}}</p>
      <p class="item-p2">{{getContent}}</p>
    </div>
  </div> -->
  <div class="emc-item" @click="$emit('click')">
    <img :src="src">
    <div class="active">
      <p>{{label}}</p>
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
  }
}
</script>

<style scoped>
.emc-item {
  height: 295px;
  width: 470px;
  margin-bottom: 20px;
  position: relative;
}

.emc-item img {
  width: 100%;
  height: 100%;
}
.emc-item:hover .active {
  opacity: 0;
}

.active {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  height: 295px;
  width: 470px;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.emc-item p {
  font-size: 19px;
  line-height: 28px;
  text-align: center;
  width: 100%;
  color: white;
}
</style>
