<template>
<div>
    <tabbar @on-index-change="onIndexChange">
      <tabbar-item :selected="sth==0?true:false" link="/TM">
        <!-- <img slot="icon" src="../assets/images/navbar/nav_bar_discover_normal.png">
        <img slot="icon-active" src="../assets/images/navbar/nav_bar_discover_selected.png"> -->
        <span slot="label">信息表</span>
      </tabbar-item>
      <tabbar-item :selected="sth==1?true:false" link="/EM">
        <!-- <img slot="icon" src="../assets/images/navbar/nav_bar_store_normal.png"> -->
        <!-- <img slot="icon-active" src="../assets/images/navbar/nav_bar_store_selected.png"> -->
        <span slot="label">考核</span>
      </tabbar-item>
      <tabbar-item :selected="sth==2?true:false" link="/MC">
        <!-- <img slot="icon" src="../assets/images/navbar/nav_bar_bbs_normal.png">
        <img slot="icon-active" src="../assets/images/navbar/nav_bar_bbs_selected.png"> -->
        <span slot="label">三会一课</span>
      </tabbar-item>
    </tabbar>
</div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
  data () {
    return {
      sth: 0
    }
  },
  components: {
    Tabbar,
    TabbarItem
  },
  mounted () {
    if (this.$route.path === '/') {
      this.$data.sth = 0
    } else if (this.$route.path === '/TM') {
      this.$data.sth = 1
    } else if (this.$route.path === '/EM') {
      this.$data.sth = 2
    } else if (this.$route.path === '/MC') {
      this.$data.sth = 3
    }
  },
  methods: {
    onIndexChange (newIndex, oldIndex) {
      // console.log(newIndex, oldIndex)
    }
  }
}
</script>

<style>

</style>
