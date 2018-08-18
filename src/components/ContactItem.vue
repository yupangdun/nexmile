<template>
  <div class="base">
    <img :src="image">
    <p class="address">地址</p>
    <p class="content">工业园区唯新路58号</p>
    <p class="content">启迪人工智能产业园31#第二单元</p>
  </div>
</template>

<script>
export default {
  props: {
    image: String
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
