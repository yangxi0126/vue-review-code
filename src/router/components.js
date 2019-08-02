const Main = () => {
  return import('../pages/components/main');
};

const routes = [
  {
    path: '/components',
    component: Main,
    meta: {
      requireAuth: true
    }
  }
];

export default routes;
