<template>
  <div>
    <div>this is grandsonValue: {{number}}</div>
    <div>this is grandsonObj: {{obj.name}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    inject: ['childValue','childObj'],
    created() {
//      this.number = this.childValue;
//      this.obj = JSON.parse(JSON.stringify(this.childObj));
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
