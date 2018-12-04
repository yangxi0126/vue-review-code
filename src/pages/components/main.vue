<template>
  <div>
    <div>vue自带component组件</div>
    <span>this is main</span>
    <button @click="change">切换{{childVal}}</button>
    <component :is="tab" :componentData="componentData" @componentsEvt="componentsEvt"></component>
  </div>
</template>

<script type="text/ecmascript-6">
  import Page1 from './page1.vue';
  import Page2 from './page2.vue';

  export default {
    components: {
      Page1,
      Page2
    },
    data() {
      return {
        tab: 'Page1',
        componentData: 0,
        childVal: 0
      }
    },
    methods: {
      change() {
        this.componentData = Math.random();
        (this.tab === 'Page1') ? (this.tab = 'Page2') : (this.tab = 'Page1');
      },
      componentsEvt(event) {
        this.childVal = event;
      }
    }
  }
</script>

<style scoped>

</style>
