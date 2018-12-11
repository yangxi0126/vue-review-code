import Vue from 'vue'
import Router from 'vue-router'
import Index from './index.js'
import Components from './components.js'
import EventBus from './eventbus.js'
import PostMessage from './postMessage.js'
import Slot from './slot.js'
import ProvideAndInject from './provideAndInject.js'
import Review from './review.js'
import ComputedAndWatch from './computedAndWatch.js'
import ComponentReview from './componentReview.js'
import VModel from './vModel.js'
import VRouter from './vRouter'
import VuexRouter from './vuex'
import VuexsRouter from './vuexs'
import CommentTest from './commentTest'

Vue.use(Router);

// import Loading from '../components/loading/loading.js';
//
// Vue.use(Loading);

const router = new Router({
  routes: [
    {path: '/', redirect: '/index'},
    ...Index,
    ...Components,
    ...EventBus,
    ...PostMessage,
    ...Slot,
    ...ProvideAndInject,
    ...Review,
    ...ComputedAndWatch,
    ...ComponentReview,
    ...VModel,
    ...VRouter,
    ...VuexRouter,
    ...VuexsRouter,
    ...CommentTest
  ]
});

// router.beforeEach((to, from, next) => {  //可以在这里做权限登录的控制
//   if (!to.meta.requireLogin) {  //meta.requireLogin需要在每个需要验证登录的页面路由里面去写上
//     next();
//   } else {
//     if (to.path === '/index') {
//       next();
//     } else {
//       next('/index');
//     }
//   }
// });

export default router;
