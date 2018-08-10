<template>
  <div style="background-color: #e8e8e8;">
    <div class="emc-header">
      <p class="header-p">EMC解决方案</p>
      <p class="header-p-2">EMC为电磁兼容性省些，包含了EMI电磁屏蔽和EMS电磁敏感两个方面</p>
    </div>
    <div style="display:flex; flex-direction: row;padding:0 10%;">
      <emc-item v-for="item in list1" v-bind='item' :key='item.label'></emc-item>
      <div style="  flex: 1;  padding: 40px 0 40px 40px;" v-for="i in (4-list1.length)" :key='i'></div>
    </div>
    <div style="display:flex; flex-direction: row;padding:0 10%;">
      <emc-item v-for="item in list2" v-bind='item' :key='item.label'></emc-item>
      <div style="  flex: 1;  padding: 40px 0 40px 40px;" v-for="i in (4-list1.length)" :key='i'></div>
    </div>
  </div>
</template>
<script>
import emcItem from '../components/EMCItem'

export default {
  components: { emcItem },
  data () {
    return {
      list1: [
        {
          src: require('../assets/solution/产品解决方案-EMC-01.jpg'),
          label: '导电布以及胶带',
          subLabel: '导电布胶带是柔性EMI屏蔽材料的常规选择，常用于包边以及包裹导电泡棉'
        },
        {
          src: require('../assets/solution/产品解决方案-EMC-02.jpg'),
          label: '导电泡棉',
          subLabel: '导电泡棉可提供Z向导电需求，同时有优良的压缩填充性能'
        },
        {
          src: require('../assets/solution/产品解决方案-EMC-03.jpg'),
          label: '吸波材料',
          subLabel: '吸波材料是为了吸收噪波转换成能量形式'
        },
        {
          src: require('../assets/solution/产品解决方案-EMC-04.jpg'),
          label: '导电箔类',
          subLabel: '导电箔相比导电布系列，有支撑效果，类似导电铜箔，铝箔，复合PET等'
        }
      ],
      list2: [
        {
          src: require('../assets/solution/产品解决方案-EMC-05.jpg'),
          label: '导电橡胶',
          subLabel: '导电橡胶具有可压缩性，导电性，异填充性'
        },
        {
          src: require('../assets/solution/产品解决方案-EMC-06.jpg'),
          label: '导电布包裹泡棉',
          subLabel: '可根据客户需求定制不同的截面形状，适应不同的环境需求'
        },
        {
          src: require('../assets/solution/产品解决方案-EMC-07.jpg'),
          label: '导电薄膜类材料',
          subLabel: '此系列是在柔性薄膜上进行表面均匀溅射或者特殊印刷导电类材料，实现表面导电和EMI屏蔽'
        },
        {
          src: require('../assets/solution/产品解决方案-EMC-08.jpg'),
          label: 'From-In-Place导电胶',
          subLabel: '导电胶以硅胶弹性体为基体填充不同等级导电颗粒，有室温固话和高温固话'
        }
      ]
    }
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
