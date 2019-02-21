<template>

</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        name: 'this is extends'
      }
    },
    mounted() {
      console.log('this is extends mounted');  //这里也会执行, 不会被覆盖掉
    },
    methods: {
      getName() {
        return this.name;
      }
    }
  }
</script>
