<template>
  <div class="about-base">
    <div class="about-common about-header">
      <p>在即将全面到来的万物互联时代，以及人们对于智能电子设备以及功能设备的要求越来越高，同时对快速高质量消费需求的诉求，伴随系列的电子可靠性的挑战，功能材料犹如人的肌肉，血液或者眼睛一样起着非常关键的作用，如何快速选择对的材料来达到对应的整体可靠性要求将变得非常重要；NEXMILE致力于为客户提供最佳的柔性功能材料立体解决方案；为客户的产品功能可靠性提供全方位支持。</p>
    </div>
    <div class="about-img">
      <div>
        <img src="../assets/banner/about.jpg">
      </div>
        <div>
          <p>
            制造基地网络
          </p>
        </div>
      </div>
      <div class="about-common">
        <p class='p1'>我们的服务</p>
        <div class="home-row">
          <service-item v-for="(item,i) in serviceList" :key="i" v-bind="item" @click="click(item)"> </service-item>
        </div>
      </div>
      <hr class="border">
      <div class="about-common">
        <p class="p1">我们的核心团队</p>
        <div class="more">
          <img src="../assets/service/OEM服务.jpg">
          <p>NEXMILE 团队由国内外专家数十名组成，按不同的解决方案在不同的领域发挥专业的作用，研发团队和清华大学和中山大学以及中科院等形成长期的共同合作开发项目，为新产品等研发和未来基础功能材料等探索提供了高质量的技术护航，同时拥有供应链的管理专家和团队，为功能材料的一体化解决方案提供了有效保障，打造了材料领域的生态圈；并与全球领先的智能设备终端客户都保持着良好的合作关系，共同打造稳定可靠的材料系统保障。</p>
        </div>
      </div>
    </div>
</template>
<script>
import ServiceItem from '../components/HomeServiceItem'
export default {
  components: { ServiceItem },
  data () {
    return {
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
      ]
    }
  }
}
</script>

<style scoped>
.about-base {
  background-color: white;
}
.about-common {
  width: 1050px;
  margin: auto;
}

.about-header {
  height: 220px;
  display: flex;
  justify-content: center;
}
.about-header p {
  font-size: 18px;
  line-height: 30px;
  color: #808080;
  margin: auto;
}
.about-img {
  width: 100%;
  height: 700px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.about-img img {
  height: 100%;
}

.about-img div {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  justify-content: center;
}

.about-img div p {
  width: 1050px;
  margin: auto;
  font-size: 36px;
  color: white;
}

.p1 {
  font-size: 30px;
  color: #4d4d4d;
  padding: 80px 0 60px;
  margin: 0;
}

.home-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}

.more {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 80px;
}

.more img {
  width: 475px;
  height: 300px;
}

.more p {
  width: 525px;
  margin: 0;
  font-size: 17px;
  line-height: 30px;
  color: #4d4d4d;
}
</style>
