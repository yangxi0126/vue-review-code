<template>
  <div>
    this is mixin2
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        mixinData: '我是mixinTwo的data'
      }
    },
    mounted() {
      console.log('这是mixinTwo的created');
      this.getSum();
    },
    methods: {
      getSum: function () {
        console.log('这是mixinTwo的getSum里面的方法');
      }
    }
  }
</script>
