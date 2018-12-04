<template>
  <div>
    <div>this is childValue: {{number}}</div>
    <div>this is childObj: {{obj.name}}</div>
    <Grandson></Grandson>
  </div>
</template>

<script type="text/ecmascript-6">
  import Grandson from './grandson.vue';

  export default {
    components: {
      Grandson
    },
    inject: ['childValue', 'childObj'],
    created() {
      this.number = this.childValue;
      this.obj = JSON.parse(JSON.stringify(this.childObj));
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
