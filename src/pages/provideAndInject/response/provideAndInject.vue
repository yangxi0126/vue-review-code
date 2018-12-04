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
      const that = this;
      const parentObj = {};
      Object.defineProperty(parentObj, 'childValue', {
        get: () => {
          return that.number;
        },
        enumerable: true
      });
      Object.defineProperty(parentObj, 'childObj', {
        get: () => {
          return that.parentObj;
        },
        enumerable: true
      });
      return {
        parentObj
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
      },
      childChange(val) {
        this.number = val;
      }
    }
  }
</script>

<style scoped>

</style>
