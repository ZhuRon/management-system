<template>

<div>
     <Header :HeaderMes="HeaderMes"></Header>
</div>
</template>

<script>
import Header from '@/components/header'
export default {
  components: {
    Header
  },
  data () {
    return {
      HeaderMes: {
        title: '三会一课'
      }
    }
  }
}
</script>

<style>

</style>
