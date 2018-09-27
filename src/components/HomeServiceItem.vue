<template>
  <div class="item-base">
    <div class="item-image-div">
      <img class="item-image" :src="image" :alt="title">
    </div>
      <div class="margin">
        <p class="p1">{{title}}</p>
        <p class="p2">{{content}}</p>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    image: String,
    title: String,
    content: String
  }

}
</script>

<style scoped>
.item-base {
  display: flex;
  flex-direction: row;
  width: 475px;
  height: 130px;
  margin-bottom: 50px;
}

.item-image-div {
  width: 170px;
  height: 130px;
  overflow: hidden;
}

.item-image-div img {
  transition: all 0.5s ease-out;
}

.item-image {
  width: 100%;
  height: 100%;
}

.item-base:hover .item-image {
  width: 120%;
  height: 120%;
}

.item-base .margin {
  flex: 1;
  padding-left: 25px;
}

p {
  margin: 0;
}

.p1 {
  font-size: 17px;
  color: #0055aa;
  font-weight: 700;
}
.p2 {
  font-size: 15px;
  line-height: 24px;
  color: #4d4d4d;
}
</style>
