<template>
  <transition name="el-modal-fade" @after-leave="afterLeave">
    <div v-if="visible"
         class="modal-move"
         :style="{left: left, top: top}">
      <a v-if="showClose" class="btn" @click.stop="close">X</a>
      <div class="modal-move-header"
           style="height: 30px;line-height: 30px;background-color: blue;color: #fff;"
           @mousedown="moveEvt">{{title}}
      </div>
      <div class="content" v-html="slot" @click="clickEvt" ></div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'ModalMove',
    data() {
      return {
        visible: false,
        title: '',
        slot: '',
        showClose: true,
        onClose: null,
        onClick: null,
        left: '50%',
        top: '300px'
      }
    },
    mounted() {

    },
    methods: {
      close() {
        this.visible = false;
        if (typeof this.onClose === 'function') {
          this.onClose();
        }
      },
      clickEvt() {
        if (typeof this.onClick === 'function') {
          this.onClick(this);
        }
      },
      moveEvt(event) {
        const $event = event || window.event;
        const target = ($event.target || $event.srcElement).parentElement;
        // 鼠标按下，计算当前元素距离可视区的距离
        const disX = $event.clientX - target.offsetLeft;
        const disY = $event.clientY - target.offsetTop;

        document.onmousemove = function (e) {
          // 通过事件委托，计算移动的距离
          const l = e.clientX - disX;
          const t = e.clientY - disY;
          // 移动当前元素
          target.style.left = `${l}px`;
          target.style.top = `${t}px`;
        };

        document.onmouseup = function (e) {
          document.onmousemove = null;
          document.onmouseup = null;
        };
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
  .modal-move {
    position: fixed;
    background-color: #fff;
    width: 330px;
    padding: 20px;
    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.2);
    transition: opacity .3s;

    .modal-move-header {
      cursor: move;
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

  .el-modal-fade-enter {
    opacity: 0;
  }

  .el-modal-fade-leave-active {
    opacity: 0;
  }
</style>
