<template>
    <div style="display: flex;flex-direction: column; align-items: center;justify-content: center;padding: 20px;">
        <div style="display: flex;flex-direction: row;flex-wrap: wrap;">
            <solution-item v-for="item in list1" :key="item.src" v-bind="item"> </solution-item>
        </div>
        <div style="display: flex;flex-direction: row;flex-wrap: wrap;">
            <solution-item v-for="item in list1" :key="item.src" v-bind="item"> </solution-item>
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
          src: require('../assets/solution/首页-产品解决方案-1.jpg'),
          label: 'EMC解决方案',
          alt: 'EMC解决方案'
        },
        {
          src: require('../assets/solution/首页-产品解决方案-2.jpg'),
          label: 'EMC解决方案',
          alt: 'EMC解决方案'
        },
        {
          src: require('../assets/solution/首页-产品解决方案-3.jpg'),
          label: 'EMC解决方案',
          alt: 'EMC解决方案'
        }
      ]
    }
  }
}
</script>
<style>
    solutionItem {
        margin: 20px;

    }
</style>
