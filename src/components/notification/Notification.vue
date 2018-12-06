<template>
  <!--notify设计要点：notify不同于loading，它应该是多个的-->
  <!--@after-leave触发的afterLeave来控制动画完成后才删除节点，而不是突然消失-->
  <transition name="fade" @after-leave="afterLeave">
    <div class="notification"
         :style="style"
         v-show="isShow"
         @mouseover="clearTimer"
         @mouseout="createTimer">
      <div class="content" v-html="content"></div>
      <a class="btn" @click="handleClose" v-html="btnText"></a>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Notification',
    props: {
      content: {
        type: String,
        require: true
      },
      btnText: {
        type: String,
        default: '关闭'
      },
      timer: {
        default: null
      }
    },
    data() {
      return {
        isShow: true,
        verticalOffset: 0
      }
    },
    computed: {
      style() {
        return {
          position: 'fixed',
          zIndex: 999,
          right: '20px',
          bottom: `${this.verticalOffset}px`
        };
      }
    },
    mounted() {
      this.createTimer();
    },
    beforeDestroy() {
      this.clearTimer();
    },
    methods: {
      createTimer() {
        let that = this;
        if (that.autoClose) {
          that.timer = setTimeout(() => {
            that.$emit('close');
          }, that.autoClose);
        }
      },
      clearTimer() {
        let that = this;
        if (that.timer) {
          clearTimeout(that.timer);
        }
      },
      handleClose(event) {
        event.preventDefault();
        this.$emit('close');  //emit这一层实际上是emit到Notification.js里面
      },
      afterLeave() {
        this.$emit('close');
      }
    }
  }
</script>

<style lang="less" scoped>
  .notification {
    display: flex;
    background-color: #303030;
    color: rgba(255, 255, 255, 1);
    align-items: center;
    padding: 20px;
    min-width: 280px;
    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.2);
    flex-wrap: wrap;
    transition: all 0.3s;
  }

  .content {
    padding: 0;
  }

  .btn {
    color: #ff4081;
    padding-left: 24px;
    margin-left: auto;
    cursor: pointer;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
