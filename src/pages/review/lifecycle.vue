<template>
  <div>
    <div>生命周期</div>
    <div>a触发update: {{a}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        a: 0
      }
    },
    beforeCreate() {
      console.log(this.$el, 'beforeCreate');  //前两个钩子不需要节点，必然执行。后面的需要DOM节点挂在才会执行。this.$el undefined
    },
    created() {
      console.log(this.$el, 'created');  //前两个钩子不需要节点，必然执行。后面的需要DOM节点挂在才会执行。this.$el undefined
    },
    beforeMount() {
      console.log(this.$el, 'beforeMount');  //this.$el undefined
    },
    mounted() {
      let that = this;
      console.log(this.$el, 'mounted');  //this.$el <div><div>生命周期</div><div>a触发update: {{a}}</div></div>
      setTimeout(() => {
        that.a = 1;
      }, 3000);
    },
    beforeUpdate() {
      console.log('beforeUpdate');
    },
    updated() {
      console.log('updated');
    },
    beforeDestroy() {
      console.log('beforeDestroy');
    },
    destroyed() {
      console.log('destroyed');
    },
    methods: {}
  }
</script>
