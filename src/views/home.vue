<template>
  <div>
    <div class="base">
      <div style="padding:0 40px;">
        <p class="p1">产品解决方案</p>
        <p class="p2">NEXMILE在结构热管理，EMC电磁防护，功能粘接，光学解决方案，缓冲密封</p>
        <p class="p2">以及绝缘等材料领域为客户提供优质和专业的产品解决方案</p>
      </div>

      <div v-for='(list,i) in solutionList' :key='i' :class="[i?'other-list':'first-list']">
        <solution-item v-for="item in list" :key="item.src" :src="item.image" :label='item.name' :alt='item.name' @click="click(item)"> </solution-item>
        <div v-for='item in (3-list.length)' :key="item" style="flex: 1;padding: 0px 0px 0px 40px;"></div>
      </div>
      <!-- <div class="c-row"> -->
      <!-- <solution-item v-for="item in list" :key="item.name" :src="item.image" :label='item.name' :alt='item.name' @click="click(item)"> </solution-item> -->
      <!-- </div> -->

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
        <p class='p1'>应用案例</p>
        <p class='p2'>NEXMILE产品广泛应用于消费电子，智能家居，通讯设施、军工设备、医疗设备、</p>
        <p class='p2'>新能源、轨道交通，汽车等工业领域</p>
      </div>

      <div class="other-list">
        <solution-item v-for="item in caseList" :key="item.name" :src="item.image" :label='item.name' :alt='item.name' @click="clickAPP(item)"> </solution-item>
      </div>

      <div class="more" @click="moreAPP">
        <div>
          <p>查看更多解决方案</p>
        </div>
      </div>
      <!-- <div class="information">
        <InformationItem v-for="(item,index) in infoList" :key="index" v-bind='item' @click="clickInfo(item)"></InformationItem>
      </div> -->
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
      list: [],
      infoList: [],
      caseList: [
        {
          name: '消费电子',
          image: require('../assets/solution/产品解决方案-04.jpg')
        },
        {
          name: '新能源',
          image: require('../assets/solution/产品解决方案-05.jpg')

        },
        {
          name: '军工',
          image: require('../assets/solution/产品解决方案-06.jpg')

        }
      ]
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
    },
    clickAPP (item) {
      this.$router.push({ name: 'CaseDetail' })
    },
    more () {
      this.$router.push({ name: 'Solution' })
    },
    moreAPP () {
      this.$router.push({ name: 'Case' })
    },
    clickInfo (item) {
      this.$router.push({ name: 'InfomationDetail', params: item })
    }
  },
  created () {
    request.getCategroy(0).then(res => {
      if (res.status === 200 && res.data.status === 200) {
        this.list = res.data.data.slice(0, 3)
      } else {
        alert('请求网络错误')
      }
    })

    request.getNews(0, 3).then(result => {
      if (result.data.status === 200) {
        this.infoList = result.data.data.list
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
  background-color: #fff;
}

.information {
  display: flex;
  flex-direction: row;
  padding: 60px 0;
}

.first-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 80px 0;
}
.other-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 0 100px 0;
}
</style>
