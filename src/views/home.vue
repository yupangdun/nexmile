<template>
  <div>
    <div class="base">
      <div style="padding:0 40px;">
        <p class="p1">产品解决方案</p>
        <p class="p2">在优质、轻型、高性能材料方面，我们为行业指明了未来的道路</p>
        <p class="p2">凭借在材料科学领域的丰富知识，我们致力于创新解决方案助你应对挑战</p>
      </div>
      <div class="c-row">
        <solution-item v-for="item in list" :key="item.name" :src="item.image" :label='item.name' :alt='item.name' @click="click(item)"> </solution-item>
      </div>

      <div class="more" @click="more">
        <div>
          <p>查看更多解决方案</p>
        </div>
      </div>
    </div>
    <div style="height:430px;">
      <img style="width: 100%;height:430px;" src="../assets/solution/首页-应用案例.jpg" />
      <p class="img-p1">应用案例</p>
      <p class="img-p2">广泛应用于通讯设备、航空航天、医疗、电子、机械制造、轨道交通、新能源等行业</p>
    </div>
    <div class="info">
      <div style="padding:0 40px;">
        <p class='p1'>资讯</p>
        <p class='p2'>在这里,您可以查询新闻稿、照片、视频、出版物、播客以及媒体活动。</p>
        <p class='p2'>我们很愿意及时、直接地回答媒体垂询。</p>
      </div>
      <div class="information">
        <InformationItem></InformationItem>
        <InformationItem></InformationItem>
        <InformationItem></InformationItem>
      </div>
    </div>
  </div>
</template>

<script>
import SolutionItem from '../components/SolutionItem'
import InformationItem from '../components/InformationItem'
import request from '../api/index.js'

export default {
  components: { SolutionItem, InformationItem },
  data () {
    return {
      list: [
        {
          name: 'EMC解决方案',
          image: require('../assets/solution/首页-产品解决方案-1.jpg')
        },
        {
          name: '热管理解决方案',
          image: require('../assets/solution/首页-产品解决方案-2.jpg')
        },
        {
          name: '粘接类解决方案',
          image: require('../assets/solution/首页-产品解决方案-3.jpg')
        },
        {
          name: '缓冲密封类解决方案',
          image: require('../assets/solution/首页-产品解决方案-4.jpg')
        }
      ]
    }
  },
  methods: {
    click (item) {
      this.$router.push({ name: 'Category', query: item })
    },
    more () {
      this.$router.push({ name: 'Solution' })
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
.base {
  padding: 0 10%;
  background-color: white;
}
.c-row {
  display: flex;
  flex-direction: row;
}
.p1 {
  font-size: 2rem;
  padding: 2rem;
  margin: 0;
}
.p2 {
  font-size: 1.2rem;
  color: #666;
  padding: 0;
  line-height: 2rem;
  margin: 0;
}

.img-p1 {
  position: relative;
  top: -280px;
  color: white;
  font-size: 2rem;
  letter-spacing: 1px;
  margin: 0px;
  text-align: center;
}
.img-p2 {
  position: relative;
  top: -264px;
  color: white;
  font-size: 1.5rem;
  letter-spacing: 1px;
  margin: 0px;
  padding: 0 20%;
  line-height: 3rem;
  text-align: center;
}

.more {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.more div {
  width: 200px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #7dbe4e;
}
.more p {
  color: white;
  margin: 0;
}

.info {
  padding: 0 10%;
  background-color: #eee;
}

.information {
  display: flex;
  flex-direction: row;
  padding: 60px 0;
}
</style>
