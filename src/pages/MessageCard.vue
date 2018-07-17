<template>
    <div>message</div>
</template>

<script>
import {apiname} from '../api/getData.js'
export default {
  name: 'MC',
  data () {
    return {}
  },
  mounted () {
    apiname()
      .then(res => res.json())
      .then(data => {
        this.guessCityid = data.id
        this.guessCity = data.name
      })
  }
}
//  采用async不用mounted更加优雅
</script>

<style>

</style>
