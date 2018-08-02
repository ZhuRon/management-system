<template>
    <div><Header :HeaderMes="HeaderMes"></Header></div>
</template>

<script>
import Header from '@/components/header'
// import {apiname} from '../api/getData.js'
export default {
  components: {
    Header
  },
  name: 'MC',
  data () {
    return {
      HeaderMes: {
        title: '信息表'
      }
    }
  }
}
//  mounted () {
//  apiname()
//  .then(res => res.json())
//  .then(data => {
//  this.guessCityid = data.id
//  this.guessCity = data.name
//  })
//  }
//  采用async不用mounted更加优雅
</script>

<style>

</style>
