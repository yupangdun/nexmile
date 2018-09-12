<template>
  <div class="case-base">
    <div class="case-base-div-1">
      <img src="../assets/solution/产品解决方案-EMC-导电布及胶带-01.jpg" alt="">
      <p class="p1">汽车</p>
      <p class="content">随着城市社区力求更有效和可持续的公共交通解决方案，轨道交通正在世界各地的城市中复兴。<br><br> 采用重量更轻的材料和时尚的设计，今天的铁路设计</p>
    </div>
    <div class="case-base-div-2">
      <div class="case-base-div-2-1">
        <p class="p2">相关解决方案</p>
        <hr>
        <div class='p-div'>
          <p>导电胶带贴附式接地或者胶带缠绕式 EMI材料解决方案</p>
          <p>轻压触导电缓冲EMI屏蔽垫片</p>
          <p>导电密封EMI 屏蔽gusket</p>
          <p>无基材导电双面胶</p>
        </div>
      </div>
      <div @click="outerVisible=true">
        <p>定制化方案</p>
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
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
    post () {
      console.log('============>', {
        name: this.name,
        company: this.company,
        tel: this.tel,
        email: this.email,
        country: this.country,
        other: this.other
      })
      this.outerVisible = false
    }
  }
}
</script>

<style ccoped>
.case-base {
  width: 1050px;
  margin: auto;
  display: flex;
  flex-direction: row;
  padding: 70px 0 55px;
}

.case-base-div-1 {
  width: 730px;
  background-color: white;
  padding: 40px;
}
.case-base-div-1 img {
  width: 100%;
}

.case-base-div-2 {
  width: 300px;
  margin-left: 20px;
}

.case-base-div-2-1 {
  background-color: white;
  padding: 10px 20px 0;
}

.case-base-div-2 > div:last-child {
  background: #7dbe41;
  height: 40px;
}
.case-base-div-2 > div:last-child p {
  text-align: center;
  font-size: 14pt;
  color: white;
  line-height: 40px;
  margin: 0;
}

.p-div p {
  margin: 0;
  line-height: 32pt;
  padding: 10px 0;
  border-bottom: 1px solid #f2f2f2;
  color: #0055aa;
  font-size: 13pt;
  font-weight: 700;
}

.p1 {
  font-size: 24pt;
  color: #0055aa;
}

.p2 {
  font-size: 14pt;
  color: #808080;
}

.content {
  color: #4d4d4d;
  font-size: 14pt;
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
  font-size: 21pt;
}
.h-p {
  font-size: 36pt;
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
  font-size: 13pt;
  color: #4d4d4d;
  width: 160px;
}
.el-dialog__body > div > div > input,
.el-dialog__body > div > div > textarea {
  flex: 1;
  font-size: 13pt;
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
  font-size: 14pt;
  color: white;
  line-height: 30pt;
  background-color: #7dbe41;
}
</style>
