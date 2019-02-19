<template>
  <div>
    <div>this is parent</div>
    <SlotTest>
      <div>this is slot range</div>
      <div slot="test">parent has slot222</div>
    </SlotTest>
  </div>
</template>

<script type="text/ecmascript-6">
  import SlotTest from './slot.vue';

  export default {
    components: {
      SlotTest
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>

</style>
