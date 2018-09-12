<template>
  <div style="background:white;">
    <div class="case-base">
      <p>Nexmile 致力于在功能材料领域为客户探求更佳的柔性解决方案。</p>
      <p>专业服务于信息通讯，消费电子，智能穿戴，新能源，国防军工，医疗设备等科技领域。</p>
    </div>
    <div class="case-box">
      <div class='box-div'>
        <case-item v-for="(item,index) in list" :key='index' :image='item.image' :content='item.name' @click='click(item)'></case-item>
      </div>
    </div>
  </div>
</template>

<script>
import CaseItem from '../components/CaseItem'
export default {
  components: { CaseItem },
  data () {
    return {
      list: [
        {
          image: require('../assets/应用案例icon-03.png'),
          name: '军工'
        },
        {
          image: require('../assets/应用案例icon-04.png'),
          name: '通讯'
        },
        {
          image: require('../assets/应用案例icon-05.png'),
          name: '手机'
        },
        {
          image: require('../assets/应用案例icon-06.png'),
          name: '医疗'
        },
        {
          image: require('../assets/应用案例icon-07.png'),
          name: '汽车'
        },
        {
          image: require('../assets/应用案例icon-08.png'),
          name: '锂电池'
        },
        {
          image: require('../assets/应用案例icon-09.png'),
          name: '太阳能'
        },
        {
          image: require('../assets/应用案例icon-10.png'),
          name: '穿戴电子'
        },
        {
          image: require('../assets/应用案例icon-11.png'),
          name: '工业设备'
        }
      ]

    }
  },
  methods: {
    click (item) {
      this.$router.push({ name: 'CaseDetail' })
    }
  }
}
</script>

<style scoped>
.case-base {
  padding: 40px 0;
  width: 1050px;
  margin: auto;
}

.case-base p {
  color: #808080;
  font-size: 21pt;
  line-height: 36pt;
  margin: 4px;
}

.case-box {
  background-image: url("../assets/solution/应用案例背景.jpg");
}

.box-div {
  width: 1025px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  padding: 90px 0;
}
</style>
