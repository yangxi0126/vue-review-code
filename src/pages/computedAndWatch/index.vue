<template>
  <div>
    <div>computed and watch</div>
    <div>
      <div>{{name}}</div>
      <div>{{getName()}}</div>
      <input type="text" v-model="number"/>
    </div>
    <div>
      <div>
        <div>{{watchAllData}}</div>
        <input type="text" v-model="watchData"/>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        firstName: 'firstName',
        lastName: 'lastName',
        number: 0,
        watchData: '',
        watchAllData: '',
        obj: {
          a: ''
        }
      }
    },
    computed: {
      name() {
        console.log('computed');  //当改变number时候，不会触发这里。只有firstName或者lastName改变时才会触发。computed里面最好不要去修改旧值(可能会导致无限循环)，而是应该生成一个新值。
        return `${this.firstName} ${this.lastName}`
      }
      // 下面的写法不建议
//      name:{
//        get() {
//
//        },
//        set() {
//
//        }
//      }
    },
    watch: {
//      watchData() {  //这样写在初始化的时候并不会执行。
//        console.log('watch');
//        this.watchAllData = this.watchData + '=';
//      }
      watchData: {
        handler() {
          console.log('watch');
          this.watchAllData = this.watchData + '=';
        },
        immediate: true  //这样写在初始化的时候会执行一次。
      },
//      'obj.a':{
//
//      },
//      obj: {
//        deep: true
//      }
    },
    methods: {
      getName() {
        console.log('methods');  //当改变number时候，会触发这里。
        return `${this.firstName} ${this.lastName}`
      }
    }
  }
</script>

<style scoped>

</style>
