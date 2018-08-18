<template>
  <div class="ibase">
    <div class="div-1">
      <p class="date-day">07</p>
      <p class="date-month">2017年07月</p>
    </div>
    <div class="div-2">
      <p class="name">柔性功能材料</p>
      <div class="content">
        <p>广泛广泛应用与广泛应用与应用与广泛应用与广泛应用与广泛应用与广泛应用与广泛应用与广泛应用与广泛应用与广泛应用与广泛应用与广泛应用与广泛应用与广泛应用与广泛应用与广泛广泛应用与广泛应用与应用与广泛应用与广泛应用与广泛应用与广泛应用与广泛应用与广泛应用与广泛应用与广泛应用与广泛应用与广泛应用与广泛应用与广泛应用与广泛应用与
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.ibase {
  display: flex;
  height: 180px;
  margin: 40px 0;
}
.div-1 {
  border-right: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 180px;
}
.date-day {
  font-size: 6rem;
  color: #7dbe41;
  margin: 0;
}

.date-month {
  font-size: 1.2rem;
  color: #333;
  margin: 0;
}

.name {
  font-size: 1.8rem;
  margin: 0;
}

.content {
  font-size: 1.2rem;
  line-height: 2rem;
  color: #666;
  height: 80px;
  text-overflow: ellipsis;
  overflow: hidden;
}

.content p {
  height: 70px;
}

.div-2 {
  flex: 1;
  padding: 30px 40px;
  height: 120px;
}
</style>
