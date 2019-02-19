<template>
  <div>
    <div>this is vuex(单独的)</div>
    <button @click="change">click me</button>
    <Footer v-if="isShow"></Footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState, mapGetters, mapActions} from 'vuex';
  import Footer from './footer.vue';

  export default {
    components: {
      Footer
    },
    computed: {
//      ...mapState({
//        isShow: (state) => state.showFooter
//      })
//      ...mapGetters({
//        isShow: 'isShow'
//      })
      isShow() {
        return this.test();
        // return this.$store.getters.isShow;
      }
    },
    data() {
      return {}
    },
    methods: {
      ...mapGetters({  //map其实就相当于一个函数映射, 键值对的键表示当前页的函数别名, 值代表vuex里面的函数名, 这样就可以在当前页通过this.别名调用到vuex里面的函数了
        test: 'isShow'
      }),
      ...mapActions({
        hide: 'hideFooter',
        show: 'showFooter',
        getNum: 'getNewNum'
      }),
      change() {
        let isShow = this.test();
        // console.log(isShow);
//        let isShow = this.$store.getters.isShow;
//         this.getNum(2);
       this.$store.dispatch('getNewNum', 2);  //actions用dispatch，mutations用commit。
        if (isShow) {
          this.hide();
//          this.$store.dispatch('hideFooter');
        } else {
          this.show();
//          this.$store.dispatch('showFooter');
        }
      }
    }
  }
</script>
