<template>
  <div>
    <input type="text" :value="value" @input="handleEvt"/>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      value: {
        default: ''
      }
    },
    data() {
      return {}
    },
    methods: {
      handleEvt($event) {
        this.$emit('input', $event.target.value);
      }
    }
  }
</script>
