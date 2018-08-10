<template>
  <div class="div">
    <div style="display: flex;flex-direction: row;flex-wrap: wrap;margin:80px 0;">
      <solution-item v-for="item in list1" :key="item.src" v-bind="item" @click="click(item.url)"> </solution-item>
    </div>
    <div style="display: flex;flex-direction: row;flex-wrap: wrap;margin: 0 0 100px 0;">
      <solution-item v-for="item in list2" :key="item.src" v-bind="item"> </solution-item>
    </div>
  </div>
</template>
<script>
import SolutionItem from '../components/SolutionItem.vue'
export default {
  components: { SolutionItem },
  data () {
    return {
      list1: [
        {
          src: require('../assets/solution/产品解决方案-01.jpg'),
          label: 'EMC解决方案',
          alt: 'EMC解决方案',
          url: 'emc'
        },
        {
          src: require('../assets/solution/产品解决方案-02.jpg'),
          label: '热管理解决方案',
          alt: '热管理解决方案'
        },
        {
          src: require('../assets/solution/产品解决方案-03.jpg'),
          label: 'EMC解决方案',
          alt: 'EMC解决方案'
        }
      ],
      list2: [
        {
          src: require('../assets/solution/产品解决方案-04.jpg'),
          label: '缓冲密封类解决方案',
          alt: '缓冲密封类解决方案'
        },
        {
          src: require('../assets/solution/产品解决方案-05.jpg'),
          label: 'EMC解决方案',
          alt: 'EMC解决方案'
        },
        {
          src: require('../assets/solution/产品解决方案-06.jpg'),
          label: '热管理解决方案',
          alt: '热管理解决方案'
        }
      ]
    }
  },
  methods: {
    click (url) {
      this.$router.push(url)
    }
  }
}
</script>
<style scoped>
.div {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  padding: 0 10%;
}

solutionItem {
  margin: 20px;
}
</style>
