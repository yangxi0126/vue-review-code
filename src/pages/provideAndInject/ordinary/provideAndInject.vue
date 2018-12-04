<template>
  <div>
    <span>this is parent{{number}}(在一般的情况下，provide和inject对非对象的绑定是不可响应的)</span>
    <button @click="change">change</button>
    <Child></Child>
  </div>
</template>

<script type="text/ecmascript-6">
  import Child from './child.vue';

  export default {
    components: {
      Child
    },
    provide: {
      childValue: '123123',
      childObj: {
        name: '123ggg'
      }
    },
    data() {
      return {
        number: 0.001,
        parentObj: {
          name: 'provideName'
        }
      }
    },
    methods: {
      change() {
        this.number = Math.random().toFixed(3);  //provide和inject对非对象是的绑定是不可响应的
        this.parentObj.name = Math.random().toFixed(3);
      }
    }
  }
</script>

<style scoped>

</style>
