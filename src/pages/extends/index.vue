<template>
  <div>
    this is index
    <div>{{name}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Extends from './extends.vue';

  export default {
    extends: Extends,  //通过继承来的属性和方法可以直接调用
    data() {
      return {}
    },
    mounted() {
      console.log(this.getName());
    },
    methods: {
      // getName() {  //通过extends的, 如果本身组件有同名方法, 则本身组件的方法将覆盖通过extends来的方法
      //   console.log('this is new getName');
      // }
    }
  }
</script>

