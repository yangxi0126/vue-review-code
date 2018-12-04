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

const mutations = {
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

const actions = {
  handleShow(context) {
    context.commit('show');
  },
  handleHide(context) {
    context.commit('hide');
  },
  getNewNum(context, num) {
    context.commit('newNum', num);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
