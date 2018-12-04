<template>
  <div>
    <div>this is page1</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {  //这三个before是拿不到this的，所以不能通过this赋值
    beforeRouteEnter(to, form, next) {
      console.log('beforeRouteEnter');
      next(vm => {
        console.log(`this.name is ${vm.name}`);  //只能通过回调来赋值
      });
    },
    beforeRouteUpdate(to, from, next) {  //可以不用写watch监视路由，减少性能开销
      console.log(to.query, 'beforeRouteUpdate');
      next();
    },
    beforeRouteLeave(to, form, next) {  //但是好像并不能阻止浏览器前进后退按钮，虽然可以阻止跳转，但是路由已经发生了改变
      console.log('beforeRouteLeave');
      if (confirm('确认离开?')) {
        next();
      }
    },
    mounted() {
      console.log(this.$route.query, 'mounted');  //这里并不会改变，所以如果需要处理路由来做一些事情，最好是在beforeRouteUpdate里面来处理
    },
    data() {
      return {
        name: 'page1 test'
      }
    },
    methods: {}
  }
</script>
