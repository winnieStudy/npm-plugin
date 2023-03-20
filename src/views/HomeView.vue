<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <pig-button></pig-button>
    <button @click="dataFormat">转换时间</button>
  </div>
</template>

<script>
// @ is an alias to /src
import a from 'zhen-test3';
export default {
  name: 'HomeView',
  methods: {
    dataFormat() {
      let time = a.FormatDate(1412345673)
      console.log(time)
      console.log(a.Thousand('12121212121'))
    }
  }
}
</script>
