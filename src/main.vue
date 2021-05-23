<template>
  <h1 id="text">{{ msg }}你好 <span>Vue</span></h1>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      msg: '😄😄😄'
    }
  }
}
</script>

<style lang="less">
#text {
  color: #f00;
  span {
    color: cyan;
  }
}
</style>
