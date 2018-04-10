<template>
<div class="wrap">
  <div class="logo">
    <div class="logo_pic"><img src="@/common/image/logo.png" alt="" height="157px" width="157px"></div>
  </div>
  <div class="inputs">
    <div class="input">
      <div class="input_explain">账号</div>
      <input type="number" min="7" max="10" placeholder="输入账号" class="input_filled">
    </div>
    <div class="input">
      <div class="input_explain">密码</div>
      <input type="number" min="7" max="10" placeholder="输入密码" class="input_filled">
    </div>
    <div class="input">
      <div class="input_explain" style="width:2rem">验证码</div>
      <input type="number" min="7" max="10" placeholder="输入验证码" class="input_filled">
    </div>
    <div class="input_img"></div>
  </div>
  <div class="author"></div>
</div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
  .wrap
    position relative
    padding 0
    margin 0
    background-color #f8f8f8

    .logo
      height 5.2rem /* 390/75 */
      width 10rem
      background-color #ffffff
      display flex
      justify-content center
      flex-direction column
      border-bottom solid 2px #e8e8e8
      margin-bottom 1.08rem /* 81/75 */

      .logo_pic
        width 4.186667rem /* 314/75 */
        height 4.186667rem /* 314/75 */
        border-radius 50%
        margin-left auto
        margin-right auto
    .inputs
      border-top solid 4px #efefef
      .input
        width 10rem
        height 1.04rem /* 78/75 */
        display flex
        justify-content space-around
        border-bottom solid 1px #ececec
        .input_explain
          width 0.866667rem /* 65/75 */
          height 1.04rem /* 78/75 */
          line-height 1.04rem
          color #121212
          font-size 14px
          font-weight bold
        .input_filled
          height 1.04rem
          width 7rem
          border 0px
          outline none
          background-color #f8f8f8
</style>
