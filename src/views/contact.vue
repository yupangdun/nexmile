<template>
  <div class="contact-base">
    <div class="row">
      <div>
        <p>如果您对NEXMILE产品和服务有任何问询，您可以通过以下方式与我们联系。</p>
        <p>地址：苏州工业园区唯新路58号启迪人工智能产业园31#第二单元<br>电话：0512-65927151<br>传真：0512-65920039<br>邮箱：info@nex-mile.com</p>
      </div>
      <div>
        <input type="text" placeholder="姓名" v-model="name">
        <input type="text" placeholder="公司" v-model="company">
        <input type="text" placeholder="电话" v-model="tel">
        <input type="text" placeholder="邮箱" v-model="email">
        <input type="text" placeholder="国家/城市" v-model="country">
        <textarea placeholder="请填写您的需求" cols="30" rows="5" v-model="other"></textarea>
        <div class="button">提交信息</div>
      </div>
    </div>
  </div>
</template>

<script>
import request from '../api/index.js'
export default {
  data () {
    return {
      name: '',
      company: '',
      tel: '',
      email: '',
      country: '',
      other: ''
    }
  },
  methods: {
    post () {
      request.postEmail({
        name: this.name,
        company: this.company,
        telephone: this.tel,
        email: this.email,
        city: this.country,
        information: this.other
      }).then(res => {
        if (res.data.status) {
          this.outerVisible = false
          alert('发送成功!')
        } else {
          alert(res.data.data)
        }
      })
    }
  }
}
</script>

<style>
.contact-base {
  background: white;
  padding: 60px 0 80px;
}

.row {
  width: 960px;
  margin: auto;
  display: flex;
  justify-content: space-between;
}

.row > div:first-child {
  width: 295px;
}

.row > div:last-child {
  width: 600px;
}
.row > div:last-child input,
.row > div:last-child textarea {
  width: calc(100% - 42px);
  line-height: 35px;
  margin-bottom: 17.5px;
  padding: 0 20px;
  font-size: 15px;
  color: #808080;
  font-family: Arial;
}

.row > div:first-child p:first-child {
  font-size: 18px;
  color: #808080;
  line-height: 30px;
  margin-top: 0;
}

.row div:first-child p:last-child {
  margin-top: 40px;
  font-size: 17px;
  line-height: 30px;
  color: #4d4d4d;
}

.button {
  width: 200px;
  /* margin: auto; */
  background-color: #7dbe4e;
  color: white;
  text-align: center;
  line-height: 30px;
}
</style>
