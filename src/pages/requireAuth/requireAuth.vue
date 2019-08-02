<template>
  <div>
    <div>测试vue权限登录</div>
    <div @click="login">点击登录</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {}
    },
    methods: {
      login() {
        sessionStorage.setItem('loginState', true);
        this.$router.push({name: 'index'});
      }
    }
  }
</script>

<style scoped>

</style>
