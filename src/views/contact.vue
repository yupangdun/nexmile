<template>
  <div class="c-base">
    <div class="div">
      <contact-item :image='image1' name="地址" content1="苏州工业园区唯新路58号" content2="启迪人工智能产业园31#第二单元"></contact-item>
      <contact-item :image='image2' name="联系电话" content1="0512-65927157"></contact-item>
      <contact-item :image='image3' name="传真" content1="0512-65920039"></contact-item>
      <contact-item :image='image4' name="企业邮箱" content1="info@nex-mile.com"></contact-item>
    </div>
    <div style="width:1025px;margin:auto;padding:70px 0 85px;">
      <iframe src="/static/map.html" frameborder="0" scrolling="no"></iframe>
    </div>
  </div>
</template>

<script>
import ContactItem from '../components/ContactItem'
export default {
  components: { ContactItem },
  data () {
    return {
      image1: require('../assets/联系我们-1.png'),
      image2: require('../assets/联系我们-2.png'),
      image3: require('../assets/联系我们-3.png'),
      image4: require('../assets/联系我们-4.png')
    }
  }
}
</script>

<style scoped>
.c-base {
  background: white;
}
.c-base > div:first-child {
  width: 1025px;
  margin: auto;
}
.c-base .div {
  display: flex;
  flex-direction: row;
}
iframe {
  width: 100%;
  height: 600px;
}
</style>
