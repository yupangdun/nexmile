<template>
    <div @click="$emit('click')">
        <img :src="src" :alt="alt" />
        <p>{{label}}</p>
    </div>
</template>
<script>
export default {
  name: 'solutionItem',
  props: {
    src: String,
    alt: {
      type: String,
      default: ''
    },
    label: String
  }
}
</script>
<style scoped>
    @font-face {
        font-family: "iconfont";
        /* IE9*/
        src: url('../assets/font/iconfont.ttf?t=1533735893629') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
        url('../assets/font/iconfont.svg?t=1533735893629#iconfont') format('svg');
        /* iOS 4.1- */
    }

    div {
        margin: 40px 20px;
        width: 420px;
        height: 270px;
    }

    div::after {
        font-family: "iconfont" !important;
        font-style: normal;
        font-size: 1.8em;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        content: "\e61c";
        color: white;
        position: relative;
        top: -260px;
        left: 320px;
    }

    img {
        width: 100%;
        height: 100%;
        /* object-fit: cover; */
    }

    p {
        position: relative;
        top: -60px;
        color: white;
        font-size: 1.2em;
        text-indent: 1em;
        margin: 0;

    }
</style>
