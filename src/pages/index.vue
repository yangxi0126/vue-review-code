<template>
  <div>
    <button @click="notice('top-left')">左上</button>
    <button @click="notice('bottom-left')">左下</button>
    <button @click="notice('top-right')">右上</button>
    <button @click="notice('bottom-right')">右下</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        positionArr: ['bottom-left', 'top-right', 'bottom-right', 'top-left']
      }
    },
    methods: {
      notice(type) {
        let that = this;
        that.$notice({
          position: type,
          duration: 3000
        });
      }
    }
  }
</script>
