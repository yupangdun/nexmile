<template>
  <div style="background-color: #e8e8e8;">
    <div class='category-div'>
      <div>
        <div style="width:100%;height:90px;background-color:#0055aa;">
          <div style="width:960px;height:100%;margin:auto;display:flex;justify-content:space-between;align-items:center;">
            <p style="font-size:30px;color:white;">{{item.name}}</p>
            <img style="height:30px;" :src="item.icon" />
          </div>
        </div>
        <div class="list">
          <emc-item v-for="(item,i) in list" :first="!(i%2)" :label="item.name" :src="item.image" :subLabel="item.introduction" :key='i' @click='outerVisible=true'></emc-item>
        </div>
      </div>
      <!-- <div class="more" @click='outerVisible=true'>
        <div>
          <p>查看更多解决方案</p>
        </div>
      </div>
      <el-dialog :visible.sync="outerVisible">
        <div>
          <p class="h-p">联系我们</p>
          <div>
            <p>称呼</p>
            <input type="text" v-model="name">
          </div>
          <div>
            <p>公司</p>
            <input type="text" v-model="company">
          </div>
          <div>
            <p>电话</p>
            <input type="text" v-model="tel">
          </div>
          <div>
            <p>邮箱</p>
            <input type="text" v-model="email">
          </div>
          <div>
            <p>国家/城市</p>
            <input type="text" v-model="country">
          </div>
          <div>
            <p>请填写您的需求</p>
            <textarea type="text" v-model="other" />
            </div>
        <div>
          <p @click="post">提交信息</p>
        </div>
      </div>
    </el-dialog> -->
    </div>
  </div>
</template>
<script>
import emcItem from '../components/EMCItem'
import request from '../api/index.js'
export default {
  components: { emcItem },
  data () {
    return {
      item: {},
      list: [],
      outerVisible: false,
      name: '',
      company: '',
      tel: '',
      email: '',
      country: '',
      other: ''
    }
  },
  methods: {
    click (item) {
      this.$router.push({ name: 'CategoryItem', query: item })
    },
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
  },
  created () {
    this.item = this.$route.query
    debugger
    request.getCategroy(this.item.id).then(res => {
      if (res.status === 200 && res.data.status === 200) {
        this.list = res.data.data
      } else {
        alert('请求网络错误')
      }
    })
  }
}
</script>

<style scoped>
.category-div {
  background-image: url("../assets/banner/banner5.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
}

.category-div > div {
  background-color: rgba(242, 242, 242, 0.5);
}

.emc-header {
  background-color: white;
  margin: auto;
  height: 255px;
}

.emc-header p {
  margin: 0;
  width: 1050px;
  margin: auto;
}

.header-p {
  font-size: 32px;
  line-height: 80px;
  color: #4d4d4d;
}

.header-p-2 {
  font-size: 16px;
  line-height: 26px;
  color: #808080;
}

.list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 960px;
  margin: auto;
  flex-wrap: wrap;
  padding: 70px 0 32px;
}

.category-footer {
  height: 80px;
  width: 100%;
  background: #0055aa;
  display: flex;
  justify-content: center;
  align-items: center;
}

.category-footer p {
  color: white;
  font-size: 21px;
}
.h-p {
  font-size: 36px;
  color: #0055aa;
}
.el-dialog__body p {
  margin: 0;
}

.el-dialog__body > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.el-dialog__body > div > div {
  display: flex;
  width: 600px;
  margin: 10px;
}
.el-dialog__body > div > div > p {
  font-size: 13px;
  color: #4d4d4d;
  width: 160px;
}
.el-dialog__body > div > div > input,
.el-dialog__body > div > div > textarea {
  flex: 1;
  font-size: 13px;
  color: #4d4d4d;
}

textarea {
  height: 100px;
}
.el-dialog__body > div > div:last-child {
  justify-content: center;
  align-items: center;
}
.el-dialog__body > div > div:last-child p {
  text-align: center;
  font-size: 14px;
  color: white;
  line-height: 30px;
  background-color: #7dbe41;
}

.more {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 53px 0;
}

.more div {
  width: 200px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #7dbe4e;
}
.more p {
  color: white;
  margin: 0;
}
</style>
