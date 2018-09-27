<template>
  <div class="item-base">
    <img src="../assets/logo.png"/>
    <div class="item-absolute">
      <div>+</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.item-base {
  width: 320px;
  height: 400px;
  background: white;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-base img {
  width: 75%;
}

.item-absolute {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(204, 204, 204, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-absolute div {
  width: 80px;
  height: 80px;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  font-size: 70px;
  line-height: 70px;
  font-weight: 200;
  color: white;
}
</style>
