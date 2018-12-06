<template>
  <div>
    <button @click="notify">Notify</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {}
    },
    methods: {
      notify() {
        this.$notify.show({
          btnText: '<div class="close">close</div>',
          content: '<div><i class="icon">X</i>测试测试测试测试测试测试</div>',
          autoClose: 3000
        });
      }
    }
  }
</script>
<style lang="less">
  .close {
    color: #fff;
  }

  .icon {
    font-weight: bold;
    padding-right: 10px;
  }
</style>
