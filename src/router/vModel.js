const Index = () => {
  return import('../pages/vModel/index.vue');
};

const routes = [
  {
    path: '/vmodel',
    component: Index,
    meta: {
      requireAuth: true
    }
  }
];

export default routes;
