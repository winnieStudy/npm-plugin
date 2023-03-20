<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <pig-button></pig-button>
    <button @click="test">Test</button>
  </div>
</template>

<script>

import a from '@zhenwf/test2';
export default {
  name: 'HomeView',
  methods: {
    dataFormat() {
      console.log(a)
      let time = a.FormatDate(1412345673)
      console.log(time)
      console.log(a.Thousand('12121212121'))
      console.log(a.isValidIP(1.2))
      console.log(this)
    },
    
    test: a.debounce(function() {
      this.dataFormat()
    }, 500, true)
    
  }
}
</script>
