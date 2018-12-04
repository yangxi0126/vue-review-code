<template>
  <div>
    <div>this is vuexs</div>
    <div>{{getNumbers}}</div>
    <button @click="change">click me</button>
    <div class="container">
      <router-view></router-view>
      <Footer v-if="defShow"></Footer>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState, mapGetters, mapActions} from 'vuex';
  import Footer from './footer.vue';

  export default {
    components: {
      Footer
    },
    data() {
      return {}
    },
    computed: {
      ...mapState({
        defShow(state) {  //defShow名字随便取。
//          console.log(this.$store.state.footerStatus.showFooter);  //感觉我更喜欢这么写。。。
          return state.footerStatus.showFooter;  //showFooter对应的是其中的属性。
        }
      }),
      ...mapGetters({  //getNumbers名字随便取。需要指定是在footerStatus，getChangedNum对应的是其中的方法。
        getNumbers: 'footerStatus/getChangedNum'
      })
    },
//    watch: {
//      '$route'(to, from) {
////        console.log(to, from);
//      }
//    },
    methods: {
      change() {
        let path = this.$route;
        if (path.name === 'todo') {
//          this.$store.state.footerStatus.showFooter = false;
          this.$router.push({name: 'list'});
        } else {
//          this.$store.state.footerStatus.showFooter = true;
          this.$router.push({name: 'todo'});
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  .container {
    border: 1px solid red;
  }
</style>
