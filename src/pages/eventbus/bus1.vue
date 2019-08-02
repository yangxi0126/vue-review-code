<template>
  <div>
    <span>this is bus1 {{number}}</span>
    <button @click="say">bus1</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        number: Math.random()
      }
    },
    mounted() {
      if (this.$root.eventBus) {  //这里的eventBus是挂载到vue实例上的。如果main.js是挂载到window上的，则只需if(eventBus)
        this.$root.eventBus.$on('eventBus2', (res) => {
          console.log(res);
        });
      }
    },
    destroyed() {
      this.$root.eventBus.$off('eventBus2');
    },
    methods: {
      say() {
        if (this.$root.eventBus) {
          this.$root.eventBus.$emit('eventBus1', {
            type: 'bus1',
            number: this.number
          });
          this.$router.push('/bus2');
        }
      }
    }
  }
</script>

<style scoped>

</style>
