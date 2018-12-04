<template>
  <div>
    <SlotTest>
      <div>this is parent</div>
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
