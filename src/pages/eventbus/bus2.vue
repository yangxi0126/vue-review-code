<template>
  <div>
    <span>this is bus2 {{number}}</span>
    <button @click="say">bus2</button>
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
      if (this.$root.eventBus) {
        this.$root.eventBus.$on('eventBus1', (res) => {
          console.log(res);
        });
      }
    },
    destroyed() {
      this.$root.eventBus.$off('eventBus1');
    },
    methods: {
      say() {
        if (this.$root.eventBus) {
          this.$root.eventBus.$emit('eventBus2', {
            type: 'bus2',
            number: this.number
          });
          this.$router.push('/bus1');
        }
      }
    }
  }
</script>

<style scoped>

</style>
