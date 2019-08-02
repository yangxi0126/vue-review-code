const Index = () => {
  return import('../pages/commentTestPage/index.vue');
};

const routes = [
  {
    path: '/commentTest',
    component: Index,
    meta: {
      requireAuth: true
    }
  }
];

export default routes;
