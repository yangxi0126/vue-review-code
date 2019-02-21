<template>
  <div>
    this is index
  </div>
</template>

<script type="text/ecmascript-6">
  import Mixin1 from './mixin1.vue';
  import Mixin2 from './mixin2.vue';

  export default {
    mixins: [Mixin1, Mixin2],
    data() {
      return {
        mixinData: '我是vue实例的data'
      }
    },
    mounted() {
      //个人理解: mixin和extneds差不多, 但是mixin可以混合多个组件, 而extend只能在一个组件上扩展。
      console.log('这是vue实例的created');
      this.getSum();  //方法同样会被覆盖, 值为对象的选项，例如 methods, components 和 directives，将被混合为同一个对象。两个对象键名冲突时，取组件对象(index)的键值对
    },
    methods: {
      getSum: function () {
        console.log('这是vue实例里面getSum的方法');
      }
    }
  }
</script>
