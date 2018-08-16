<template>
  <div class="c-base">
    <div class="div">
      <contact-item :image='image'></contact-item>
      <contact-item :image='image'></contact-item>
      <contact-item :image='image'></contact-item>
      <contact-item :image='image'></contact-item>
    </div>
    <div style="padding:100px;">
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
      image: require('../assets/联系我们-1.png')
    }
  }
}
</script>

<style scoped>
.c-base {
  margin: 0 10%;
  padding: 60px;
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
