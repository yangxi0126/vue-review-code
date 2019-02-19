<template>
  <div>
    <div>组件相关知识点</div>
    <!--props可以传入一个函数，实际上这么做和$emit的效果一样-->
    <yx-props :propOne="propOne" :onChange="changeProps"></yx-props>
    <yx-props :propOne="propsTow" :dataObj="propObj" :onChange="changePropsTow"></yx-props>
  </div>
</template>

<script type="text/ecmascript-6">
  import YxProps from './props.vue';

  export default {
    components: {
      'yx-props': YxProps
    },
    data() {
      return {
        propOne: 'propOne',
        propsTow: 'propsTwo',
        propObj: {
          name: '222'
        }
      }
    },
    methods: {
      changeProps(val) {
        this.propOne = 'propOne' + val;
      },
      changePropsTow(val) {
        this.propsTow = 'propsTow' + val;
      }
    }
  }
</script>

