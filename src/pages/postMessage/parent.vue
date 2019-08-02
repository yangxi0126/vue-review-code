<template>
  <div>
    <span>this is parent</span>
    <button @click="tab">切换</button>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {}
    },
    mounted() {
      window.addEventListener('message', this.initPage);
    },
    destroyed() {
      window.removeEventListener('message', this.initPage);
    },
    methods: {
      tab() {
        let path = this.$route;
        if (path.path.indexOf('child1') > -1) {
          window.postMessage({postMessage: 'from child1'}, '*');
          this.$router.push('/postMessage/child2');
        } else if (path.path.indexOf('child2') > -1) {
          window.postMessage({postMessage: 'from child2'}, '*');
          this.$router.push('/postMessage/child1');
        }
      },
      initPage(event) {
        console.log(event.origin, event.data, 'parent');
      }
    }
  }
</script>

<style scoped>

</style>
