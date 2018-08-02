<template>
    <div class="page">
         <router-view></router-view>
         <tab-bar></tab-bar>
    </div>
</template>

<script>
import tabBar from '../components/footer'
export default {
  components: {
    tabBar
  },
  data () {
    return {
    }
  },
  methods: {
    clickItemChange (index) {
      this.$data.navbarSelected = index
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