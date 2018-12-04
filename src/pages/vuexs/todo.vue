<template>
  <div>
    <div>todo</div>
    <section class="joinState">
      <div class="joinStateHead">
        <span class="h3">全国改性料通讯录</span>
        <span class="joinStatus" @click="add">加入收藏列</span>
      </div>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapActions} from 'vuex';

  export default {
    data() {
      return {
        item: {
          price: '1.6元/斤'
        }
      }
    },
    mounted() {
      this.handleHide();
//      this.$store.dispatch('footerStatus/handleHide');
    },
    methods: {
      ...mapActions({
        addCollect: 'collections/commitPushCollects',
        handleHide: 'footerStatus/handleHide'
      }),
      add() {
        this.item.price = (Math.random() * 100 + 1).toFixed(2);
        this.addCollect(JSON.parse(JSON.stringify(this.item)));
//        this.$store.dispatch('collections/commitPushCollects', JSON.parse(JSON.stringify(this.item)));  //感觉还是this.$store.dispatch这种形式的用的顺手一些
      }
    }
  }
</script>

<style lang="less" scoped>
  .joinStatus {
    cursor: pointer;
  }
</style>
