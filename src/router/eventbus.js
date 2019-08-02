const Bus1 = () => {
  return import('../pages/eventbus/bus1');
};

const Bus2 = () => {
  return import('../pages/eventbus/bus2');
};

const routes = [
  {
    path: '/bus1',
    component: Bus1,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/bus2',
    component: Bus2,
    meta: {
      requireAuth: true
    }
  }
];

export default routes;
