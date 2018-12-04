const Index = () => {
  return import('../pages/computedAndWatch/index.vue');
};

const routes = [
  {path: '/computedAndWatch', component: Index}
];

export default routes;
