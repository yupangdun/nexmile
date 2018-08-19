<template>
  <div class="base">
    <infomation-cell @click="click"></infomation-cell>
    <infomation-cell></infomation-cell>
    <infomation-cell></infomation-cell>
    <infomation-cell></infomation-cell>
    <infomation-cell></infomation-cell>
    <infomation-cell></infomation-cell>
    <infomation-cell></infomation-cell>

  </div>
</template>

<script>
import InfomationCell from '../components/InfomationCell'
export default {
  components: { InfomationCell },
  methods: {
    click () {
      this.$router.push({ name: 'InfomationDetail' })
    }
  }
}
</script>

<style scoped>
.base {
  margin: 0 10%;
  padding: 0 80px;
}
</style>
