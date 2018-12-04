<template>
  <div>
    <span>this is parent{{number}}(provide和inject的响应式用法)</span>
    <input type="text" v-model="number"/>
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
    provide() {
      return {
        childVal: this.number,
        childObj: {}
      }
    },
    watch: {
      number(val) {
        this.childVal = val;
      }
    },
    data() {
      return {
        number: 0.002,
        parentObj: {
          name: 'provideName'
        }
      }
    },
    methods: {
      change() {
        this.number = Math.random().toFixed(3);
        this.parentObj.name = 'provideName' + Math.random().toFixed(3);
      }
    }
  }
</script>

<style scoped>

</style>
