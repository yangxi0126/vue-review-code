const Index = () => {
  return import('../pages/slot/index');
};

const routes = [
  {
    path: '/slot',
    component: Index,
    meta: {
      requireAuth: true
    }
  }
];

export default routes;
