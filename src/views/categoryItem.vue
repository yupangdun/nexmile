<template>
  <div style="background-color: #e8e8e8;">
    <div class="emc-header">
      <p class="header-p">{{item.name}}</p>
      <p class="header-p-2">{{item.introduction}}</p>
    </div>
    <div style="display:flex; flex-direction:column;padding:40px 10%;">
      <CategoryItem v-for="(item,index) in list" :key="index" v-bind="item" @click="click(item)"></CategoryItem>
    </div>
  </div>
</template>

<script>
import CategoryItem from '../components/CategoryItem'
import request from '../api/index.js'
export default {
  components: { CategoryItem },
  data () {
    return {
      item: {},
      list: []
    }
  },
  methods: {
    click (item) {
      this.$router.push({ name: 'CategoryDetail', query: item })
    }
  },
  created () {
    this.item = this.$route.query
    request.getCategroy(this.item.id).then(res => {
      if (res.status === 200 && res.data.status === 200) {
        this.list = res.data.data
      } else {
        alert('请求网络错误')
      }
    })
  }
}
</script>

<style scoped>
.emc-header {
  background-color: white;
  margin: auto;
  height: 255px;
}

.emc-header p {
  margin: 0;
  width: 1200px;
  margin: auto;
}

.header-p {
  font-size: 32pt;
  line-height: 80pt;
  color: #4d4d4d;
}

.header-p-2 {
  font-size: 16pt;
  line-height: 26pt;
  color: #808080;
}
</style>
