const Index = () => {
  return import('../pages/extends/index.vue');
};

const routes = [
  {
    path: '/extends',
    name: 'extends',
    component: Index
  }
];

export default routes;
