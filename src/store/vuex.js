import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  showFooter: true,
  changeableNum: 0
};

const getters = {
  isShow(state) {
    return state.showFooter;
  },
  getChangedNum(state) {
    return state.changeableNum;
  }
};

const mutations = {  //方法
  show(state) {
    state.showFooter = true;
  },
  hide(state) {
    state.showFooter = false;
  },
  newNum(state, num) {
    state.changeableNum += num;
  }
};

const actions = {  //调用方法。外部实际上是通过调用actions里面的事件来调用mutations里面的方法。
  hideFooter(context) {
    context.commit('hide');
  },
  showFooter(context) {
    context.commit('show');
  },
  getNewNum(context, num) {
    context.commit('newNum', num);
  }
};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});

export default store;
