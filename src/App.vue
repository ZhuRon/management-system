<template>
  <div id="app">
    <!-- <headera></headera> -->
    <router-link to="/">home</router-link>
    <router-link to="/login">登入界面</router-link>
    <router-link to="/EM">考核界面</router-link>
    <router-link to="/MC">信息表</router-link>
    <router-link to="/TM">三会一课</router-link>
    <keep-alive include="MC"><router-view></router-view></keep-alive>   <!-- 信息表经常需要查看，所以用keep-alive保留缓存 -->
  </div>
</template>

<script>
// import Headera from './components/header.vue'
export default {
  components: {
    // Header
  }
}
</script>

<style lang="stylus">
  *
    margin 0
    padding 0
  #app
    color red
    margin 0
    padding 0
</style>
