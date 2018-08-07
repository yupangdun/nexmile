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
        color: #3399ff;
    }

    .tab-div span {
        font-size: 20px;
        line-height: 40px;
    }
</style>
