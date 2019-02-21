<template>
  <div>
    this is mixin1
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {mixinData: '我是mixin的data'}
    },
    mounted() {
      console.log('这是mixin的created');
      this.getSum();
    },
    methods: {
      getSum: function () {
        console.log('这是mixin的getSum里面的方法');
      }
    }
  }
</script>
