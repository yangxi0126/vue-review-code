<template>
  <div>
    <div>this is router main</div>
    <div @click="go(1)">切换1</div>
    <div @click="go(2)">切换2</div>
    <div @click="go(3)">主页</div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {}
    },
    methods: {
      go(type) {
        if (type === 1) {
          this.$router.push({name: 'page1', query: {value: Math.random()}});
        } else if (type === 2) {
          this.$router.push({name: 'page2', query: {value: 'page2'}});
        } else if (type === 3) {
          this.$router.push({name: 'index'});
        }
      }
    }
  }
</script>
