const Index = () => {
  return import('../pages/mixin/index.vue');
};

const routes = [
  {
    path: '/mixin',
    name: 'mixin',
    component: Index
  }
];

export default routes;
