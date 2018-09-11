<template>
  <div class="div">
    <div v-for='(list,i) in solutionList' :key='i' :class="[i?'other-list':'first-list']">
      <solution-item v-for="item in list" :key="item.src" :src="item.image" :label='item.name' :alt='item.name' @click="click(item)"> </solution-item>
    </div>
  </div>
</template>
<script>
import SolutionItem from '../components/SolutionItem.vue'
import request from '../api/index.js'
export default {
  components: { SolutionItem },
  data () {
    return {
      list: []
    }
  },
  computed: {
    solutionList () {
      let list = []
      for (let i = 0; i < Math.ceil(this.list.length / 3); i++) {
        for (let n = i * 3; n < (i + 1) * 3 && n < this.list.length; n++) {
          if (!list[i]) {
            list[i] = []
          }
          list[i].push(this.list[n])
        }
      }
      return list
    }
  },
  methods: {
    click (item) {
      this.$router.push({ name: 'Category', query: item })
    }
  },
  created () {
    request.getCategroy(0).then(res => {
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
.div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1200px;
  margin: auto;
}

.first-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 80px 0;
  justify-content: space-between;
}
.other-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 0 100px 0;
  justify-content: space-between;
}
</style>
