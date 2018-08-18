<template>
  <div class="case-base">
    <div class="case-base-div">
      <div class="case-base-div-1">
        <img src="../assets/solution/产品解决方案-EMC-导电布及胶带-01.jpg" alt="">
        <p class="p1">汽车</p>
        <p class="content">随着城市社区力求更有效和可持续的公共交通解决方案，轨道交通正在世界各地的城市中复兴。<br><br> 采用重量更轻的材料和时尚的设计，今天的铁路设计</p>
      </div>
      <div class="case-base-div-2">
        <div class="case-base-div-2-1">
          <p class="p2">查看解决方案</p>
          <hr>
          <div class='p-div'>
            <p>导电裸布 ></p>
            <p>双面导电布胶带 ></p>
            <p>单面导电布胶带 ></p>
            <p>无基材导电双面胶 ></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.case-base {
  background-color: #eee;
  padding: 40px 10%;
}
.case-base-div {
  display: flex;
  padding: 0px 40px;
  flex-direction: row;
}
.case-base-div-1 {
  flex: 1;
  background-color: white;
  padding: 40px;
}
.case-base-div-1 img {
  width: 100%;
}

.case-base-div-2 {
  width: 300px;
  margin-left: 40px;
  /* background-color: white; */
}

.case-base-div-2-1 {
  background-color: white;
  padding: 10px 20px 20px 20px;
}

.p1 {
  font-size: 1.6rem;
  color: #0055aa;
}

.p2 {
  font-size: 1.6rem;
  color: #666;
}
.p-div {
  color: #0055aa;
  font-size: 1.2rem;
  font-weight: 700;
}
.content {
  color: #333;
  font-size: 1.2rem;
}
</style>
