const Index = () => {
  return import('../pages/vRouter/index.vue');
};

const Page1 = () => {
  return import('../pages/vRouter/page1.vue');
};

const Page2 = () => {
  return import('../pages/vRouter/page2.vue');
};

const routes = [
  {
    path: '/vrouter',
    component: Index,
    meta: {
      requireAuth: true
    },
    children: [
      {name: 'page1', path: 'page1', component: Page1, meta: {requireLogin: true}},
      {name: 'page2', path: 'page2', component: Page2, meta: {requireLogin: true}}
    ]
  }
];

export default routes;

