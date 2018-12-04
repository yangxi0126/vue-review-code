<template>
  <div>
    <span>this is child2</span>
    <button @click="back">child2</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {}
    },
    mounted() {
      window.addEventListener('message', this.initPage);
    },
    destroyed() {
      window.removeEventListener('message', this.initPage);
    },
    methods: {
      initPage(event) {
        console.log(event.data + 'child2发送给父级');
      },
      back(event) {
        window.postMessage(JSON.stringify({callback: event.data, type: 'child2'}), '*');
      }
    }
  }
</script>

<style scoped>

</style>
