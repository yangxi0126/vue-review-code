<template>
  <div>
    <div>
      <slot v-if="hasDefault">this is default slot</slot>
      <slot v-else>this is else default</slot>
    </div>
    <div>
      <slot name="test">this is body test slot</slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    mounted() {

    },
    data() {
      return {}
    },
    computed: {
      hasDefault() {
        return !!this.$slots.default;
      }
    },
    methods: {}
  }
</script>

<style scoped>

</style>
