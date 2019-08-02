const Index = () => {
  return import('../pages/requireAuth/requireAuth.vue');
};

const routes = [
  {
    path: '/requireAuth',
    component: Index
  }
];

export default routes;
