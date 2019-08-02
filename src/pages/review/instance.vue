<template>
  <div>
    <div>vue实例</div>
    <div>
      <input type="text" v-model="number"/>
      <button @click="beginWatch">点了才watch</button>
    </div>
    <div>
      <span>这里是点击后监视watch的值: {{text}}</span>
    </div>
    <div>
      <span>强制刷新:{{obj.a}}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        number: 0,
        text: '',
        watchTest: null,
        forceUpdate: null,
        obj: {
//          a: 0
        }
      }
    },
    destroyed() {
      let that = this;
      if (that.watchTest !== null) {
        that.watchTest = null;  //注销watch
      }
    },
    mounted() {
      let that = this, i = 0;
      setInterval(() => {
        i++;
        // that.obj.a = i;
        // that.$forceUpdate();  //vue里面，如果obj没有定义属性，那么给属性赋值将不会导致双向绑定。所以要么在定义的时候把属性a写出来，要么强制刷新。一般来说不建议使用，会降低性能。
       that.$set(that.obj, 'a', i);  //或者可以通过这样来设置值最好
      }, 1000);
    },
    methods: {
      beginWatch() {
        let that = this;
        that.watchTest = that.$watch('number', (val) => {  //点击了之后再监听。$watch跳转页面不会自动注销，需要手动注销
          that.text = val;
        });
      }
    }
  }
</script>
