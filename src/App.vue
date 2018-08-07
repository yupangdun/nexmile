<template>
  <div id="app">
    <div style="display: flex;flex-direction: row;align-items: center; justify-content: center;">
      <img style="width:100px;height: 100px;" src="./assets/logo.png" />
      <c-tab :list="['产品解决方案', '应用案例', '资讯', '关于NEXMILE', '联系我们']" v-model="index" @click="click"></c-tab>
    </div>
    <el-select v-model="value" placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
    <router-view/>
  </div>
</template>

<script>
import Tab from './components/Tab.vue'
export default {
  name: 'App',
  components: { 'c-tab': Tab },
  data () {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      index: 0
    }
  },
  methods: {
    click (index) {
      console.log('============>', this.index)
    }
  }
}
</script>

<style>
</style>
