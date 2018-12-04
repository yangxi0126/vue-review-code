<template>
  <div>
    <span>this is page2:{{number}}</span>
    <button @click="handleEvt">子传父</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Page2',
    props: {
      componentData: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        number: ''
      }
    },
    mounted() {
      this.number = this.componentData;
    },
    methods: {
      handleEvt() {
        this.$emit('componentsEvt', this.number);
      }
    }
  }
</script>

<style scoped>

</style>
