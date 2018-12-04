<template>
  <div>
    <div>this is grandsonValue: <input type="text" v-model="number"/></div>
    <div>this is grandsonObj: <input type="text" v-model="obj.name"/></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    inject: ['parentObj'],
    mounted() {
      this.number = this.parentObj.childValue;
      this.obj = this.parentObj.childObj;
    },
    watch: {
      parentObj: {
        handler(val) {
          this.number = val.childValue;
          this.obj = val.childObj;
        },
        deep: true
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
