<template>
  <div>
    <span>this is bus2</span>
    <button @click="say">bus2</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {}
    },
    mounted() {
      if (this.$root.eventBus) {
        this.$root.eventBus.$on('eventBus', (res) => {
          console.log(res);
        });
      }
    },
    destroyed() {
      this.$root.eventBus.$off('eventBus');
    },
    methods: {
      say() {
        if (this.$root.eventBus) {
          this.$root.eventBus.$emit('eventBus', {type: 'bus2'});
          this.$router.push('/bus1');
        }
      }
    }
  }
</script>

<style scoped>

</style>
