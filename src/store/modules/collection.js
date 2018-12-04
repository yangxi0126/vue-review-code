/*这个文件还可以再次细分为state.js,getters.js,mutations.js,actions.js,通过import引入进来*/
const state = {
  total: 0,
  collects: []  //初始化一个collects数组
};

const getters = {
  renderCollects(state, getters, rootState) {  //承载变化的collects
    console.log(getters);
    console.log(rootState);  //这里可以取到该模块下的所有getters，以及全局的state
    return state.collects;
  }
};

const mutations = {
  pushCollects(state, item) {  //如何变化collects,插入items
    state.total += 1;
    item.id = state.total;
    item.productName = `苹果${state.total}`;
    state.collects.push(item);
  },
  reduceCollect(state, item) {
    state.collects.map((it, index) => {
      if (it.id === item.id) {
        state.total -= 1;
        state.collects.splice(index, 1);
      }
    });
  }
};

const actions = {
  commitPushCollects(context, item) {  //触发mutations里面的pushCollects ,传入数据形参item 对应到items
    context.commit('pushCollects', item);
    context.commit('globalFun', item, {root: true});  //调用root的方法 root: true
    context.commit('footerStatus/newNum', 1, {root: true});  //调用footerStatus模块的方法 root: true
  },
  commitReduceCollects(context, item) {
    context.commit('reduceCollect', item);
  }
};

export default {
  namespaced: true,  //用于在全局引用此文件里的方法时标识这一个的文件名。如果没有namespaced这个配置，vuex默认会把mutations和actions放在全局下面，可以直接通过mutations和actions里面的方法名来调用。但是这样可能会不同模块之前，由于方法名相同引起冲突。加上之后，没有冲突，需要通过当前模块来调用方法。
  state,
  getters,
  mutations,
  actions
}
