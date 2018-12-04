<template>
  <div>
    <div>list</div>
    <ul>
      <li v-for="(item,index) in arrList" :key="index" @click="reduce(item)">
        <h5>{{item.productName}}</h5>
        <p>{{item.price}}</p>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState, mapGetters, mapActions} from 'vuex';

  export default {
    data() {
      return {}
    },
    computed: {
//      ...mapState({
//        arrList: (state) => {
//          return state.collections.collects;
//        }
//      }),
//      ...mapGetters('collections', {
//        arrList: 'renderCollects'
//      })
      ...mapGetters({
        arrList: 'collections/renderCollects'
      })
    },
    mounted() {
      this.handleShow();
//      this.$store.dispatch('footerStatus/handleShow');
    },
    methods: {
      ...mapActions({
        reduceCollect: 'collections/commitReduceCollects',
        handleShow: 'footerStatus/handleShow'
      }),
      reduce(item) {
        this.reduceCollect(item);
//        this.$store.dispatch('collections/commitReduceCollects', item);
      }
    }
  }
</script>

<style scoped>

</style>
