<template>
    <div class="page">
          <!-- <Header :HeaderMes="HeaderMes"></Header> -->
         <router-view></router-view>
         <tab-bar @tab="tab"></tab-bar>
    </div>
</template>

<script>
import tabBar from '../components/footer'
import Header from '../components/header'
export default {
  components: {
    tabBar,
    Header
  },
  mounted () {
    if (this.$route.path === '/TM') {
      this.$data.HeaderMes = {title: '三会一课'}
    } else if (this.$route.path === '/EM') {
      this.$data.HeaderMes = {title: '考核'}
    } else if (this.$route.path === '/MC') {
      this.$data.HeaderMes = {title: '考核表'}
    }
  },
  data () {
    return {
      HeaderMes: {
        page: 0,
        title: '发现'
      }
    }
  },
  methods: {
    clickItemChange (index) {
      this.$data.navbarSelected = index
    },
    tab (e) {
      console.log(e)
      this.$data.page = e
      this.$data.HeaderMes.title = this.$data.titleName[e]
    }
  }
}
</script>

<style lang="stylus" scoped>
.page
    overflow hidden
.contain
    width 100%
    height 13.97332rem
    overflow-x hidden
    overflow-y scroll
    ::-webkit-scrollbar
        width:0;
        height: 0;
        background-color: transparent;
.flex
    display flex
    justify-content center
    align-items center
    flex-direction column
</style>