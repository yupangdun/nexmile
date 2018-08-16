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
      list: [
        {
          src: require('../assets/solution/产品解决方案-EMC-01.jpg'),
          header: '导电裸布',
          label: '导电橡胶材料是通过在硅橡胶中添加导电微粒制成的一种新型高分子材料具有良好的导电性，电磁屏蔽效果，同时具备优异的水汽密封性、抗腐蚀性。',
          detail: '导电橡胶材料是通过在硅橡胶中添加导电微粒制成的一种新型高分子材料具有良好的导电性，电磁屏蔽效果，同时具备优异的水汽密封性、抗腐蚀性。'
        },
        {
          src: require('../assets/solution/产品解决方案-EMC-01.jpg'),
          header: '导电裸布',
          label: '导电橡胶材料是通过在硅橡胶中添加导电微粒制成的一种新型高分子材料具有良好的导电性，电磁屏蔽效果，同时具备优异的水汽密封性、抗腐蚀性。',
          detail: '导电橡胶材料是通过在硅橡胶中添加导电微粒制成的一种新型高分子材料具有良好的导电性，电磁屏蔽效果，同时具备优异的水汽密封性、抗腐蚀性。'
        },
        {
          src: require('../assets/solution/产品解决方案-EMC-01.jpg'),
          header: '导电裸布',
          label: '导电橡胶材料是通过在硅橡胶中添加导电微粒制成的一种新型高分子材料具有良好的导电性，电磁屏蔽效果，同时具备优异的水汽密封性、抗腐蚀性。',
          detail: '导电橡胶材料是通过在硅橡胶中添加导电微粒制成的一种新型高分子材料具有良好的导电性，电磁屏蔽效果，同时具备优异的水汽密封性、抗腐蚀性。'
        }, {
          src: require('../assets/solution/产品解决方案-EMC-01.jpg'),
          header: '导电裸布',
          label: '导电橡胶材料是通过在硅橡胶中添加导电微粒制成的一种新型高分子材料具有良好的导电性，电磁屏蔽效果，同时具备优异的水汽密封性、抗腐蚀性。',
          detail: '导电橡胶材料是通过在硅橡胶中添加导电微粒制成的一种新型高分子材料具有良好的导电性，电磁屏蔽效果，同时具备优异的水汽密封性、抗腐蚀性。'
        },
        {
          src: require('../assets/solution/产品解决方案-EMC-01.jpg'),
          header: '导电裸布',
          label: '导电橡胶材料是通过在硅橡胶中添加导电微粒制成的一种新型高分子材料具有良好的导电性，电磁屏蔽效果，同时具备优异的水汽密封性、抗腐蚀性。',
          detail: '导电橡胶材料是通过在硅橡胶中添加导电微粒制成的一种新型高分子材料具有良好的导电性，电磁屏蔽效果，同时具备优异的水汽密封性、抗腐蚀性。'
        }
      ]
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
  color: #808080;
}
</style>
