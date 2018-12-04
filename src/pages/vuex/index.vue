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
        return this.$store.getters.isShow;
      }
    },
    data() {
      return {}
    },
    methods: {
      ...mapGetters({
        test: 'isShow'
      }),
      ...mapActions({
        hide: 'hideFooter',
        show: 'showFooter',
        getNum: 'getNewNum'
      }),
      change() {
        let isShow = this.test();
//        let isShow = this.$store.getters.isShow;
        this.getNum(2);
//        this.$store.dispatch('getNewNum', 2);  //actions用dispatch，mutations用commit。
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
