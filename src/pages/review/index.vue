<template>
  <div>
    <div>
      <button @click="go('instance')">实例</button>
      <button @click="go('hook')">生命周期</button>
    </div>
    <br/>
    <br/>
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
        let that = this;
        switch (type) {
          case 'instance':
            that.$router.push('/review/instance');
            break;
          case 'hook':
            that.$router.push('/review/lifecycle');
            break;
        }
      }
    }
  }
</script>
