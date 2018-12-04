<template>
  <transition name="fade">
    <div class="notification" :style="style">
      <span class="content">{{content}}</span>
      <a class="btn" @click="handleClose">{{text}}</a>
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
      text: {
        type: String,
        default: '关闭'
      }
    },
    data() {
      return {
        isShow: false,
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
        }
      }
    },
    methods: {
      handleClose(event) {
        event.preventDefault();
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
