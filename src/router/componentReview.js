const Index = () => {
  return import('../pages/componentReview/index.vue');
};

const routes = [
  {
    path: '/componentReview',
    component: Index,
    meta: {
      requireAuth: true
    }
  }
];

export default routes;
