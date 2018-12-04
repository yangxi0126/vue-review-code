<template>
  <div>
    <div>props</div>
    <div>
      <!--要用input时间，否则会显示旧值-->
      <input type="text" v-model="text" @input="handleChange"/>
      <span>{{propOne}}</span>
      <span>{{obj.name}}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {  //props里面是父级传入的用于约束子级的东西，一定不要将props的东西直接与子级进行绑定
      propOne: {
        type: String,
        validator(value) {
          return typeof value === 'string';
        }
      },
      dataObj: {
        type: Object,
        default() {  //如果是一个对象，default要这样写
          return {
            name: '55'
          };
        }
      },
      onChange: {
        type: Function
      }
    },
    data() {
      return {
        text: 0,
        obj: null
      }
    },
    created() {
      this.obj = this.dataObj;
    },
    methods: {
      handleChange() {
        let that = this;
        this.onChange(that.text);  //这里与$emit效果一样
      }
    }
  }
</script>
