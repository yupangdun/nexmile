<template>
  <div class="base">
    <infomation-cell v-for="(item,index) in list" :key='index' v-bind="item" @click="click(item)"></infomation-cell>
    <div class='pagination'>
      <el-pagination :page-size="10" :pager-count="7" layout="prev, pager, next" :total="total" :current-page.sync="value" :hack="change"> </el-pagination>
    </div>

  </div>
</template>

<script>
import InfomationCell from '../components/InfomationCell'
import request from '../api/index.js'
export default {
  components: { InfomationCell },
  data () {
    return {
      total: 0,
      value: 1,
      list: []
    }
  },
  computed: {
    change () {
      return this.load(this.value - 1)
    }
  },
  methods: {
    click (item) {
      this.$router.push({ name: 'InfomationDetail', params: item })
    },
    load (page, count = 10) {
      this.list = []
      request.getNews(page, count).then(result => {
        if (result.data.status === 200) {
          this.list = result.data.data.list
          this.total = result.data.data.count
        }
      })
    }
  }
}
</script>

<style scoped>
.base {
  margin: 0 10%;
  padding: 0 80px;
}
.pagination {
  display: flex;
  justify-content: center;
  padding: 20px;
}
</style>
