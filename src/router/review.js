const Index = () => {
  return import('../pages/review/index.vue');
};

const Instance = () => {
  return import('../pages/review/instance.vue');
};

const LifeCycle = () => {
  return import('../pages/review/lifecycle.vue');
};

const routes = [
  {
    path: '/review',
    component: Index,
    meta: {
      requireAuth: true
    },
    children: [
      {
        path: '',
        redirect: 'instance'
      },
      {
        path: 'instance',
        component: Instance
      },
      {
        path: 'lifecycle',
        component: LifeCycle
      }
    ]
  }
];

export default routes;
