<template>
  <div>
    <button @click="handleClick">我是按钮</button>
  </div>
</template>

<script>
 export default {
  name: 'pig-button',
  methods: {
    handleClick() {
      
    }
  }
 }
</script>

<style scoped>
  button {
    width: 100px;
    height: 100px;
    line-height: 100px;
    border-radius: 10px;
    border: none;
  }
</style>