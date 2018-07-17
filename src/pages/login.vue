<template>
    <div>
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
    </div>
</template>

<script>
import { getCaptchChas } from '../api/getData.js'
export default {
  data () {
    return {
      captchCodeImg: '',
      codeNumber: null,
    }
  },
  methods: {
    async  getCaptchCode () {
      const res = await getCaptchChas()
      this.captchCodeImg = res.code
    },
  },
  mounted () {
    this.getCaptchCode()
  }
}
</script>

<style lang="stylus" scoped>
@import '../common/stylus/mixin.styl';
.input_container{
  display: flex;
  justify-content: space-between;
  padding: .6rem .8rem;
  border-bottom: 1px solid #f1f1f1;
}
.captcha_code_container{
  height: 2.2rem;
}
</style>
