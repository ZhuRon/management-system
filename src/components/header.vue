<template>
    <x-header>
        <span v-if="HeaderMes.title">{{HeaderMes.title}}</span>
        <div v-if="HeaderMes.avatar" class="avatar">
            <div class="avatar_border">
                <!-- <img src="@/assets/images/test/jiangjiang.jpg" alt=""> -->
            </div>
            <div class="avatar_name">
                {{HeaderMes.IdName}}
                <div class="avatar_level">
                    {{HeaderMes.level}}
                </div>
            </div>
            <!-- <div class="avatar_mess">
                <div class="follow">
                    <p>关注</p>
                    <span>0</span>
                </div>
                <div class="fans">
                    <p>粉丝</p>
                    <span>0</span>
                </div>
                <div class="getZan">
                    <p>获赞</p>
                    <span>0</span>
                </div>
            </div> -->
            <!-- <nav-bar :navbarItemProps="navbarItem" :Selected="navbarSelected" @clickItem="clickItemChange"></nav-bar> -->
        </div>
        <!-- <x-img slot="overwrite-left" :src="ic_appbar_msg" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-img> -->
        <div slot="overwrite-left">
            <!-- <img v-if="HeaderMes.type== 0 || !HeaderMes.type" src="@/assets/images/navbar/ic_appbar_search_large.png" alt="mess" style="width:50%;height:50%;"> -->
            <!-- <img v-if="HeaderMes.type== 1" src="@/assets/images/link/ic_appbar_back.png" alt="mess" style="width:40%;height:40%;" @click="routerBack()"> -->
        </div>
        <div slot="right">
            <!-- <img src="@/assets/images/navbar/ic_appbar_msg.png" alt="mess" style="width:50%;height:50%;float:right;"> -->
        </div>
    </x-header>
</template>

<script>
import { XHeader, XImg } from 'vux'
// import navBar from '@/components/navbar'
export default {
  data () {
    return {
      // navbarSelected:0,
      // navbarItem:[{
      //     title:'数据'
      // },{
      //     title:'动态'
      // },{
      //     title:'设备'
      // }],
    }
  },
  props: [ 'HeaderMes' ],
  computed: {
  },
  components: {
    XHeader,
    XImg
    // navBar
  },
  methods: {
    clickItemChange (index) {
      // console.log(index)
      this.$data.navbarSelected = index
    },
    routerBack () {
      this.$router.back(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
flex(e)
    display flex
    justify-content center
    align-items center
    flex-direction e
.avatar
    height 4.2666667rem;
    flex(column)
    justify-content flex-start
    padding-top 0.4rem
    .avatar_border
        width 1.6533333rem
        height 1.6533333rem
        border-radius 50%
        overflow hidden
        flex(row)
        img
            height 100%
    .avatar_name
        font-style 14px
        color #14191e
        font-weight bold
        flex(row)
        img
            width 0.4rem
    .avatar_mess
        flex(row)
        div
            font-size 14px
            color #6e7378
            flex(row)
            p
                margin-left .3rem
            span
                width 0.826667rem
                position relative
                &:after
                    content ''
                    position absolute
                    width 1px
                    height 0.3rem
                    right 0
                    top .38333333rem
                    background-color #c8cdd2
    .getZan:after
        background-color transparent
</style>
