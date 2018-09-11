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
  align-items: center;
  padding: 20px 0;
}
img {
  width: 100px;
  margin-top: 40px;
}
.address {
  color: #7dbe41;
  font-size: 21pt;
}

.content {
  color: #4d4d4d;
  font-size: 12pt;
  margin: 0;
}
</style>
