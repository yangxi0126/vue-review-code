<template>
  <div class="loading-box" v-show="show" :style="style">
    <div class="loading-mask"></div>
    <div class="loading-content">
      <div class="animate">
      </div>
      <div class="text">{{text}}</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'loading',
    props: {
      show: {
        type: Boolean,
        default: false
      },
      text: {
        type: String,
        default: '正在加载中...'
      }
    },
    computed: {
      style() {
        return {
          position: 'absolute',
          zIndex: 999,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'red'
        }
      }
    }
  }
</script>
