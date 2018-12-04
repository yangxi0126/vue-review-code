<template>
  <div>
    <button @click="notify">notify</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {}
    },
    mounted() {

    },
    methods: {
      notify() {
        this.$notify.show({
          text: 'close',
          autoClose: true,
          closeTime: 2000
        });
      }
    }
  }
</script>

<style scoped>

</style>
