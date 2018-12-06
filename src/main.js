// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/main.js'

// import store from './store/vuex.js'
import stores from './store/vuexs.js'

Vue.config.productionTip = false;

import Notice from './components/notice/notice.js';

Vue.use(Notice);

// window.eventBus = new Vue();  //eventBus既可以挂载到window上也可以挂载到vue的实例上

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    eventBus: new Vue()
  },
  router,
  // store,
  store: stores,
  components: {App},
  template: '<App/>'
});
