<template>
  <div>
    <input type="radio" :checked="checked" @change="changeEvt"/>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      checked: {
        type: Boolean,
        default: false
      },
      value: {
        default: ''
      }
    },
    created() {
      console.log(`radio checked is ${this.checked}`);
    },
    data() {
      return {}
    },
    methods: {
      changeEvt(event) {
        this.$emit('radioEvt', event.target.value);
      }
    }
  }
</script>
