<template>
  <div>
    <input type="checkbox" :checked="checked" @change="changeEvt"/>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      checked: {
        type: Boolean,
        default: true
      },
      value: {
        default: ''
      }
    },
    created() {
      console.log(`check value is ${this.value}`);
    },
    data() {
      return {}
    },
    methods: {
      changeEvt(event) {
        this.$emit('radioEvt', event.target.checked);
      }
    }
  }
</script>
