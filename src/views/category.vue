<template>
  <div style="background-color: #e8e8e8;">
    <div class="emc-header">
      <p class="header-p">{{item.name}}</p>
      <p class="header-p-2">{{item.introduction}}</p>
    </div>

    <div v-for='(elist,i) in emcList' :key='i' style="display:flex; flex-direction: row;padding:0 10%;">
      <emc-item v-for="item in elist" :label="item.name" :src="item.image" :subLabel="item.introduction" :key='item.label' @click="click(item)"></emc-item>
      <div style="  flex: 1;  padding: 40px 0 40px 40px;" v-for="i in (4-elist.length)" :key='i'></div>
    </div>
  </div>
</template>
<script>
import emcItem from '../components/EMCItem'
import request from '../api/index.js'
export default {
  components: { emcItem },
  data () {
    return {
      item: {},
      list: []
    }
  },
  computed: {
    emcList () {
      let list = []
      for (let i = 0; i < Math.ceil(this.list.length / 4); i++) {
        for (let n = i * 4; n < (i + 1) * 4 && n < this.list.length; n++) {
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
      this.$router.push({ name: 'CategoryItem', query: item })
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
  padding: 10px 10%;
}

.emc-header p {
  padding: 0px 40px;
}

.header-p {
  font-size: 2rem;
}

.header-p-2 {
  font-size: 1.4rem;
  line-height: 2rem;
  color: #808080;
}
</style>
