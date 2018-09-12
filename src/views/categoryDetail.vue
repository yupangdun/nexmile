<template>
  <div class="base">
    <div class="c-row">
      <div class="c-header-div">
        <p class="p1">{{item.name}}</p>
        <p class="p2">{{item.introduction}}</p>
      </div>
      <div class="c-header-image"><img style="width:100%;" :src="item.image" alt="图片加载中..."></div>
    </div>
    <hr style="margin:20px 40px;color:#d3d3d3;background-color:#d3d3d3;height:1px;border:none;" />
    <div class="c-row-body">
      <div>
        <p class="p1">特性与优势</p>
        <!-- <p class="p2">{{item.feature}}</p> -->
        <ul>
          <li v-for="i in item.feature" :key="i">
            <span>{{i}}</span>
          </li>
        </ul>
      </div>
      <div>
        <p class="p1">应用领域</p>
        <ul>
          <li v-for="i in item.application" :key="i">
            <span>{{i}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div style="padding:0 40px;">
      <img style="width:100%;" :src="item.product_image">
    </div>
    <div class="tip-div">
      <a class="tip" target='_blank' href="http://www.la-smiless.com/client">查看更多产品</a>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      item: {}

    }
  },
  methods: {
    goback () {
      this.$router.go(-1)
    }
  },
  created () {
    this.item = this.$route.query
  }
}
</script>
<style scoped>
.base {
  background-color: white;
  padding: 20px 0;
  width: 1050px;
  margin: auto;
}
.c-row {
  display: flex;
  flex-direction: row;
  padding: 0 40px;
}
.c-row-body {
  display: flex;
  flex-direction: row;
  padding: 0 40px;
}

.c-row-body div {
  width: 50%;
  padding: 0 40px 20px 0;
}
.c-row-body .p1 {
  font-size: 1.4rem;
  color: #0055aa;
}
li {
  color: #0055aa;
}

li span {
  line-height: 26pt;
  font-size: 13pt;
  color: #4d4d4d;
}

.c-header-div {
  flex: 1;
  padding: 0 40px 0 0;
}

.c-header-div .p1 {
  font-size: 24pt;
  color: #0055aa;
}

.c-header-div .p2 {
  font-size: 13pt;
  line-height: 26pt;
  color: #4d4d4d;
}

.c-header-image {
  width: 40%;
}

.tip-div {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 20px 40px;
}
.tip {
  text-align: center;
  margin: 0;
  line-height: 40px;
  width: 180px;
  position: relative;
  color: white;
  background-color: #7dbe4e;
  text-decoration: none;
}
</style>
