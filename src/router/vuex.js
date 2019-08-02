const Index = () => {
  return import('../pages/vuex/index.vue');
};

const routes = [
  {
    path: '/vuex',
    component: Index,
    meta: {
      requireAuth: true
    }
  }
];

export default routes;
