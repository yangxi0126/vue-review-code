<template>
  <div>
    <div>this is grandsonValue: <input type="text" v-model="number"/></div>
    <div>this is grandsonObj: <input type="text" v-model="obj.name"/></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    inject: ['childVal','childObj'],
    mounted() {
//      this.number = this.parentObj.childValue;
//      this.obj = this.parentObj.childObj;
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
