<template>
    <header id='head_top'>
        <slot name='logo'></slot>
        <section class="head_goback" v-if="goBack" @click="$router.go(-1)">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255,255,255);stroke-width:2"/>
            </svg>
        </section>
        <section class="title_head ellipsis" v-if="headTitle">
            <span class="title_text">{{headTitle}}</span>
        </section>
        <slot name="edit"></slot>
        <slot name="three"></slot>
        <slot name="changecity"></slot>
        <slot name="changeLogin"></slot>
    </header>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  data () {
    return {
    }
  },
  mounted () {
    //  获取用户信息
    this.getUserInfo()
  },
  props: ['signinUp', 'headTitle', 'goBack'],
  computed: {
    ...mapState([
      'userInfo'
    ])
  },
  methods: {
    ...mapActions([
      'getUserInfo'
    ])
  }
}

</script>

<style lang="stylus" scoped>
@import '../common/stylus/mixin.styl';
#head_top{
    // background-color: blue;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    wh(100%,1.92rem)
}
.head_goback{
    left: 0.4rem;
    wh(0.6rem, 1rem);
    line-height: 2.2rem;
    margin-left: .4rem;
}
.head_login{
    right: 0.55rem;
    sc(0.65rem, #fff);
    ct;
    .login_span{
        color: #fff;
    }
    .user_avatar{
        fill: #fff;
        wh(.8rem, .8rem);
    }
}
.title_head{
    center;
    width: 50%;
    color: #fff;
    text-align: center;
    .title_text{
        sc(0.8rem, #fff);
        text-align: center;
        font-weight: bold;
    }
}
</style>
