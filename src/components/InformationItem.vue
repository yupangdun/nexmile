<template>
  <div class="i-base">
    <div class="i-box">
      <p style="color:#0055a9;">2018-5-3</p>
      <p class="i-p1">优化3D打印材料和软件</p>
      <div style="flex:1;">
        <p class="i-p2">3D打印是一种变革性的技术，它使完全个性化产品的大规模制造成为可能，同时保持成本高效，具备彻底革新所有行业的潜力...</p>
      </div>
      <p style="color:#0055a9;">阅读更多</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.i-base {
  flex: 1;
  height: 300px;
  padding: 0 0 0 40px;
}
.i-box {
  height: 100%;
  background: white;
  border-top: 2px solid #0055a9;
  padding: 0 40px 10px;
  display: flex;
  flex-direction: column;
}

.i-p1 {
  font-size: 1.2rem;
  color: #666;
  margin: 0;
}
.i-p2 {
  font-size: 1rem;
  line-height: 1.4rem;
  color: #666;
}
</style>
