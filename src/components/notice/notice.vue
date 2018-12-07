<template>
  <transition name="el-notification-fade" @after-leave="afterLeave">
    <div class="notification"
         :class="[horizontalClass]"
         v-if="visible"
         :style="positionStyle"
         @mouseover="clearTimer"
         @mouseout="createTimer"
         @click="click">
      <div class="content" v-html="message"></div>
      <a class="btn" @click.stop="close" v-if="showClose">X</a>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        visible: false,
        message: '',
        timer: null,
        showClose: true,
        duration: 3000,
        onClose: null,
        onClick: null,
        position: 'bottom-right'
      }
    },
    computed: {
      horizontalClass() {
        return this.position.indexOf('-right') > -1 ? 'right' : 'left';
      },
      verticalProperty() {
        return this.position.indexOf('top-') > -1 ? 'top' : 'bottom';
      },
      positionStyle() {
        let position = this.verticalProperty;
        return {
          [position]: `${this.verticalOffset}px`
        }
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
        if (this.duration > 0) {
          this.timer = setTimeout(() => {
            this.close();
          }, this.duration);
        }
      },
      clearTimer() {
        if (this.timer) {
          clearTimeout(this.timer);
        }
      },
      click() {
        if (typeof this.onClick === 'function') {
          this.onClick(this);
        }
      },
      close() {
        this.visible = false;
        if (typeof this.onClose === 'function') {
          this.onClose();
        }
      },
      destroyNode() {
        this.$destroy();
        this.$el.parentNode.removeChild(this.$el);
      },
      afterLeave() {
        this.destroyNode();
      }
    }
  }
</script>

<style lang="less" scoped>
  .notification {
    position: fixed;
    display: flex;
    background-color: #303030;
    color: rgba(255, 255, 255, 1);
    align-items: center;
    width: 330px;
    padding: 20px;
    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.2);
    flex-wrap: wrap;
    transition: opacity .3s, transform .3s, left .3s, right .3s, top 0.4s, bottom .3s;
    &.right {
      right: 16px;
    }

    &.left {
      left: 16px;
    }
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

  .el-notification-fade-enter {
    &.right {
      right: 0;
      transform: translateX(100%);
    }

    &.left {
      left: 0;
      transform: translateX(-100%);
    }
  }

  .el-notification-fade-leave-active {
    &.right {
      opacity: 0;
      transform: translateX(100%);
    }
    &.left {
      opacity: 0;
      transform: translateX(-100%);
    }
  }
</style>
