<template>
    <div class="tab-div">
        <div v-for="(item,index) in list" :key="index" @click="$emit('click',index)">
            <span :class="{'tab-selected':index==value}">{{item}}</span>
        </div>
    </div>
</template>
<script>
export default {
  model: {
    prop: 'value',
    event: 'click'
  },
  props: {
    list: {
      type: Array,
      required: true
    },
    value: Number
  }
}
</script>
<style>
    .tab-div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .tab-div div {
        margin: 0 20px;
        cursor: pointer;
    }

    .tab-selected {
        color: #0055a9 !important;
    }

    .tab-div span {
        font-weight: 700;
        font-size: 1.2em;
        color: #4e4e4e;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    }
</style>
