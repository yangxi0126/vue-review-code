const Index = () => {
  return import('../pages/provideAndInject/ordinary/provideAndInject');
};

const DefineIndex = () => {
  return import('../pages/provideAndInject/response/provideAndInject');
};

const DefineIndex2 = () => {
  return import('../pages/provideAndInject/response2/provideAndInject');
};

const routes = [
  {
    path: '/provideAndInject',
    component: Index,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/responsePaI',
    component: DefineIndex,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/responsePaI2',
    component: DefineIndex2,
    meta: {
      requireAuth: true
    }
  }
];

export default routes;
