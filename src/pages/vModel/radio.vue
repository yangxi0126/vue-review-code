<template>
  <div>
    <input v-for="item in values"
           type="radio"
           :checked="item === value"
           :value="item"
           @change="changeEvt"
           name="name"/>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      value: {
        default: ''
      },
      values: {
        default() {
          return [];
        }
      },
      name: {
        type: String,
        default: ''
      }
    },
    created() {
      console.log(`radio checked is ${this.checked}, value is ${this.value}`);
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
