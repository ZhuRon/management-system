<template>
    <div>
      <form class="loginForm">
        <section class="input_container">
                <input type="text" placeholder="账号" v-model.lazy="userAccount">
        </section>
            <section class="input_container">
                <input v-if="!showPassword" type="password" placeholder="密码"  v-model="passWord">
                <input v-else type="text" placeholder="密码"  v-model="passWord">
                <div class="button_switch" :class="{change_to_text: showPassword}">
                    <div class="circle_button" :class="{trans_to_right: showPassword}" @click="changePassWordType"></div>
                    <span>abc</span>
                    <span>...</span>
                </div>
            </section>
        <img :src="captchCodeImg" v-if="captchCodeImg" style="margin-top:10rem"/>
<section class="input_container captcha_code_container">
  <input type="text" placeholder="验证码" maxlength="4" v-model="codeNumber">
  <div class="img_change_img">
    <img v-show="captchCodeImg" :src="captchCodeImg">
    <div class="change_img" @click="getCaptchaCode">
      <p>看不清</p>
      <p>换一张</p>
    </div>
  </div>
</section>
</form>
    </div>
</template>

<script>
import { getCaptchChas, accountLogin, getcaptchas } from '../api/getData.js'
export default {
  data () {
    return {
      captchCodeImg: '',
      codeNumber: null,
      userAccount: null,
      showPassword: false,
      passWord: null
    }
  },
  created () {
    this.getCaptchaCode()
  },
  methods: {
    changePassWordType () {
      this.showPassword = !this.showPassword
    },
    async  getCaptchCode () {
      const res = await getCaptchChas()
      this.captchCodeImg = res.code
    },
    async getCaptchaCode () {
      let res = await getcaptchas()
      this.captchaCodeImg = res.code
    },
    async  mobileLogin () {
      if (this.loginWay) { if (!this.userAccount) { this.showAlert = true; this.alertText = '请输入手机号/邮箱/用户名'; return } else if (!this.passWord) { this.showAlert = true; this.alertText = '请输入密码'; return } else if (!this.codeNumber) { this.showAlert = true; this.alertText = '请输入验证码'; return } } else {
        //    用户名登录
        this.userInfo = await accountLogin(this.userAccount, this.passWord, this.codeNumber)
      }
      //    如果返回的值不正确，则弹出提示框，返回的值正确则返回上一页
      if (!this.userInfo.user_id) {
        this.showAlert = true
        this.alertText = this.userInfo.message
        if (!this.loginWay) this.getCaptchaCode()
      } else {
        this.RECORD_USERINFO(this.userInfo)
        this.$router.go(-1)
      }
    }
  },
  mounted () {
    this.getCaptchCode()
  }
}
</script>

<style lang="stylus" scoped>
@import '../common/stylus/mixin.styl';
.loginForm{
  background-color: #fff;
  margin-top: .6rem;
}
  .input_container{
    display: flex;
    justify-content: space-between;
    padding: .6rem .8rem;
    border-bottom: 1px solid #f1f1f1;
  }
  .captcha_code_container{
    height: 2.2rem;
  }
.button_switch{
    background-color: #ccc;
    display: flex;
    justify-content: center;
    width 2rem
    height 0.7rem
    padding: 0 .2rem;
    border: 1px;
    border-radius: 0.5rem;
    position: relative;
}
    .circle_button{
        transition: all .3s;
        position: absolute;
        top: -0.2rem;
        z-index: 1;
        left: -0.3rem;
        height 1.2rem
        width 1.2rem
        box-shadow: 0 0.026667rem 0.053333rem 0 rgba(0,0,0,.1);
        background-color: #f1f1f1;
        border-radius: 50%;
    }
    .trans_to_right{
        transform: translateX(1.3rem);
    }
    span{
         sc(.45rem #fff);
        transform: translateY(.05rem);
        line-height: .6rem;
    }
    span:nth-of-type(2){
        transform: translateY(-.08rem);
    }
.change_to_text{
    background-color: #4cd964;
}
</style>
