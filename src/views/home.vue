<template>
  <div>
    <div class="base">
      <div>
        <p class="p1">产品解决方案</p>
      </div>
      <div v-for='(list,i) in solutionList' :key='i' :class="[i?'other-list':'first-list']">
        <solution-item v-for="(item) in list" :key="item.icon" v-bind="item" @click="click(item)"> </solution-item>
        <solution-item-add v-for='item in (3-list.length)' :key="item"></solution-item-add>
      </div>
    </div>
    <div style="height:150px;margin:120px 0 0 0;display:flex;justify-content:center;align-items:center;overflow:hidden;">
      <img style="height:150px;" src="../assets/solution/首页-应用案例.jpg" />
    </div>
    <div style="background:white;">
      <div style="background-color:#f2f2f2;">
        <div class="info">
          <p class='p1'>我们的服务</p>
          <div class="home-row">
            <service-item v-for="(item,i) in serviceList" :key="i" v-bind="item" @click="click(item)"> </service-item>
          </div>
        </div>
      </div>
      <!-- <hr class="border"> -->
      <div class="info ">
        <p class='p1'>应用领域</p>
        <div class="home-row">
          <appcation-item v-for="(item,i) in appcationList" :key="i" v-bind="item" @click="clickAPP"></appcation-item>
        </div>
        <div class="more" @click="moreAPP">
          <div>
            <p>查看更多解决方案</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SolutionItem from '../components/HomeSolutionItem'
import SolutionItemAdd from '../components/HomeSolutionItemAdd'

import InformationItem from '../components/InformationItem'
import ServiceItem from '../components/HomeServiceItem'
import AppcationItem from '../components/HomeAppcationItem'

import request from '../api/index.js'

export default {
  components: { SolutionItem, SolutionItemAdd, InformationItem, ServiceItem, AppcationItem },
  data () {
    return {
      list: [],
      serviceList: [
        {
          image: require('../assets/service/OEM服务.jpg'),
          title: '材料的定制开发服务',
          content: 'NEXMILE 专注于客户的产品应用和设计，我们可以帮助客户从源头配方设计材料以及测试到交付，协助创建解决方案到推动成功。'
        },
        {
          image: require('../assets/service/材料选择支持.jpg'),
          title: '更佳的材料选用支持',
          content: 'NEXMILE 拥有业界知名的技术专家以及全球优质材料制造商，帮客户以更最适的成 本选择到更佳的应用需求材料。'
        },
        {
          image: require('../assets/service/供应链.jpg'),
          title: '供应链服务 ',
          content: 'NEXMILE 通过集中混合管理采购的方式，帮客户实现更佳快捷的供应链服务，省去客户的诸多管理成本和开发，特别适应于侧重于应用端和开发端客户。'
        },
        {
          image: require('../assets/service/自定义混合.jpg'),
          title: '供应链',
          content: '凭借专为性能而构建的集中式网络和专有操作系统，我们可以优化您的装卸台之外的操作，从而提高您的业务成功率。'
        },
        {
          image: require('../assets/service/定制包装和自有品牌服务.jpg'),
          title: '功能参数大数据服务',
          content: 'NEXMILE 拥有庞大的典型材料技术参数数据库，可以帮客户以最快的速度选到参数支持，从数字角度找到理想的材料作为设计参考。'
        },
        {
          image: require('../assets/service/实验室服务.jpg'),
          title: '更佳准确的实验室分析支持',
          content: 'NEXMILE 和国内众多高校实验室以及第三方实验室进行了精确对接服务，为材料的前期开发产品功能物性和后期的产品稳定性提供了准确完善的理论验证和数据支持，相比自有实验室具有更客观的保证。'
        }
      ],
      appcationList: [
        {
          image: require('../assets/appcation/消费电子-1.jpg'),
          title: '消费电子',
          content: '粘接类材料广泛应用于工业， 日常消费等众多领域，有常温 粘贴，热熔加热粘贴，业态固 化粘贴，特殊粘贴等'
        },
        {
          image: require('../assets/appcation/新能源-1.jpg'),
          title: '新能源',
          content: '粘接类材料广泛应用于工业， 日常消费等众多领域，有常温 粘贴，热熔加热粘贴，业态固 化粘贴，特殊粘贴等'
        },
        {
          image: require('../assets/appcation/军工-1.jpg'),
          title: '军工',
          content: '粘接类材料广泛应用于工业， 日常消费等众多领域，有常温 粘贴，热熔加热粘贴，业态固 化粘贴，特殊粘贴等'
        },
        {
          image: require('../assets/appcation/通讯-1.jpg'),
          title: '通讯',
          content: '粘接类材料广泛应用于工业， 日常消费等众多领域，有常温 粘贴，热熔加热粘贴，业态固 化粘贴，特殊粘贴等'
        }
      ],
      infoList: []
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
        this.list = res.data.data
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
  width: 1050px;
  margin: auto;
  /* background-color: white; */
}
.c-row {
  display: flex;
  flex-direction: row;
}
.p1 {
  font-size: 30px;
  color: #4d4d4d;
  padding: 80px 0 60px;
  margin: 0;
}
.p2 {
  font-size: 1.2rem;
  color: #666;
  padding: 0;
  line-height: 2rem;
  margin: 0;
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

.home-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
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
  width: 1050px;
  margin: auto;
  /* padding: 0 10%;
  background-color: #fff; */
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
  justify-content: space-between;
}
.other-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 75px 0 0 0;
}

.border {
  margin: 0;
  border-top: 0.25px solid #808080;
}
</style>
