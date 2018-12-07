<template>
  <div>
    <button @click="notice('top-left')">左上</button>
    <button @click="notice('bottom-left')">左下</button>
    <button @click="notice('top-right')">右上</button>
    <button @click="notice('bottom-right')">右下</button>
    <button @click="close">close(只能关闭最后一条)</button>
    <button @click="closeAll">closeAll</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        noticeObj: null,
        positionArr: ['bottom-left', 'top-right', 'bottom-right', 'top-left']
      }
    },
    methods: {
      notice(type) {
        let that = this;
        that.noticeObj = that.$notice({
          message: `<div class="test">test</div>`,
          position: type,
          duration: 0,
          onClose(notice) {
            console.log(notice);
          },
          onClick(notice) {
            console.log(notice);
          }
        });
      },
      close() {
        this.noticeObj.close();
      },
      closeAll() {
        this.$notice.closeAll();
      }
    }
  }
</script>
<style lang="less">
  .test {
    color: red;;
    font-size: 20px;
    font-weight: bold;
  }
</style>
