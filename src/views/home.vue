<template>
  <div>
    <div class="base">
      <div>
        <p class="p1">产品解决方案</p>
      </div>
      <div v-for='(list,i) in solutionList' :key='i' :class="[i?'other-list':'first-list']">
        <solution-item v-for="(item) in list" :key="item.icon" v-bind="item" @click="click(item)"> </solution-item>
        <div v-for='item in (3-list.length)' :key="item" style="width:320px;height:460px;"></div>
      </div>
    </div>
    <div style="height:150px;margin:120px 0 0 0;">
      <img style="width: 100%;height:150px;" src="../assets/solution/首页-应用案例.jpg" />
      <p class="img-p1">NEXMILE SOLUTIONS</p>
    </div>
    <div style="background:white;">
      <div class="info">
        <p class='p1'>我们的服务</p>
        <div class="home-row">
          <service-item v-for="(item,i) in serviceList" :key="i" v-bind="item" @click="click(item)"> </service-item>
        </div>
      </div>
      <hr class="border">
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
import InformationItem from '../components/InformationItem'
import ServiceItem from '../components/HomeServiceItem'
import AppcationItem from '../components/HomeAppcationItem'
import request from '../api/index.js'

export default {
  components: { SolutionItem, InformationItem, ServiceItem, AppcationItem },
  data () {
    return {
      list: [],
      serviceList: [
        {
          image: require('../assets/service/实验室服务.jpg'),
          title: '实验室服务',
          content: '从概念到全配方产品，我们专注于终端市场的专业实验室和专业人员可以为您的产品创造创新配方。'
        },
        {
          image: require('../assets/service/OEM服务.jpg'),
          title: 'OEM服务',
          content: '我们专注于了解合作伙伴的业务——从设计到制造再到交付——因此我们可以帮助您创建智能解决方案以推动成功。'
        },
        {
          image: require('../assets/service/定制包装和自有品牌服务.jpg'),
          title: '定制包装和自有品牌服务',
          content: '从特殊配方和标签设计到消费者和定制包装以及批量生产，我们提供多种选择以满足您的需求。'
        },
        {
          image: require('../assets/service/供应链.jpg'),
          title: '供应链',
          content: '凭借专为性能而构建的集中式网络和专有操作系统，我们可以优化您的装卸台之外的操作，从而提高您的业务成功率。'
        },
        {
          image: require('../assets/service/材料选择支持.jpg'),
          title: '材料选择支持',
          content: '我们的技术支持专家拥有来自业界领先塑料制造商的数 千种产品，可帮助您确定最适合您应用需求的材料。'
        },
        {
          image: require('../assets/service/自定义混合.jpg'),
          title: '自定义混合',
          content: '凭借端到端的愿景，我们提供化学分析，产品测试，质量保证，技术支持等，以确保最高质量的混合化学产品。'
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

.img-p1 {
  position: relative;
  top: -110px;
  color: white;
  font-size: 30px;
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
  border-top: 2px solid #808080;
}
</style>
