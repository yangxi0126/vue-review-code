<template>
  <div>
    <div>this is childValue: <input type="text" v-model="number"/></div>
    <div>this is childObj: <input type="text" v-model="obj.name"/></div>
    <Grandson></Grandson>
  </div>
</template>

<script type="text/ecmascript-6">
  import Grandson from './grandson.vue';

  export default {
    components: {
      Grandson
    },
    inject: ['childVal','childObj'],
    mounted() {
      this.number = this.childVal;
//      this.obj = this.parentObj.childObj;
    },
    watch: {
      childVal(val) {
        this.number = val;
      }
    },
    data() {
      return {
        number: 0,
        obj: {}
      }
    },
    methods: {}
  }
</script>

<style scoped>

</style>
