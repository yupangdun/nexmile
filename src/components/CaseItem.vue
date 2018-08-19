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
  background-color: white;
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  border: 1px solid #eeeeee;
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
