import Vue from 'vue';
import Vuex from 'vuex';

import collections from './modules/collection.js';
import footerStatus from './modules/footerStatus.js';

Vue.use(Vuex);

const stores = new Vuex.Store({
  state: {
    globalText: 'vuex root'  //root state
  },
  mutations: {
    globalFun() {  //root 方法
      console.log('root方法');
    }
  },
  modules: {
    collections,
    footerStatus
  }
});

export default stores;
