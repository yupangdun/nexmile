<template>
  <div class="base" @click="$emit('click')">
    <img :src="image">
    <p>{{content}}</p>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    content: String
  }
}
</script>

<style scoped>
.base {
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #808080;
  width: 318px;
  height: 181px;
}

.base img {
  max-width: 20%;
  max-height: 80px;
}
.base p {
  font-size: 1.2rem;
  color: #666;
}
</style>
