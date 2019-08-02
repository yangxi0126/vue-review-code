<template>
  <div>
    <div class="container">
      <button @click="notice('top-left')">左上</button>
      <button @click="notice('bottom-left')">左下</button>
      <button @click="notice('top-right')">右上</button>
      <button @click="notice('bottom-right')">右下</button>
      <button @click="close">close(只能关闭最后一条)</button>
      <button @click="closeAll">closeAll</button>
      <button @click="showModal">show modal</button>
    </div>
    <div class="container">
      <button>show loading</button>
      <button>show area loading</button>
      <div class="area"></div>
      <Loading></Loading>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Loading from '../components/loading/loading.vue';

  export default {
    components: {
      Loading
    },
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
          duration: 3000,
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
      },
      showModal() {
        let that = this;
        that.noticeObj = that.$moveModal({
          title: '书屋大数据',
          slot: `<div class="test">test</div>`,
          onClose(index) {
            console.log(index);
          },
          onClick() {
            that.showTest();
          }
        });
      },
      showTest() {
        alert(123);
      }
    }
  }
</script>
<style lang="less">
  .container {
    margin-top: 20px;
  }

  .test {
    color: red;
    font-size: 20px;
    font-weight: bold;
  }

  .area {

  }
</style>
