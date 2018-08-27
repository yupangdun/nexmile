<template>
  <div class="base">
    <img :src="image">
    <p class="address">{{name}}</p>
    <p class="content">{{content1}}</p>
    <p class="content">{{content2}}</p>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    name: String,
    content1: String,
    content2: String
  }
}
</script>

<style scoped>
.base {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
img {
  width: 100px;
}
.address {
  color: #7dbe41;
  font-size: 1.4rem;
}

.content {
  color: #666;
  font-size: 1rem;
  margin: 8px 0;
}
</style>
