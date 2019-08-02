const Index = () => {
  return import('../pages/computedAndWatch/index.vue');
};

const routes = [
  {
    path: '/computedAndWatch',
    component: Index,
    meta: {
      requireAuth: true
    }
  }
];

export default routes;
