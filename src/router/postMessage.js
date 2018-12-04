const Parent = () => {
  return import('../pages/postMessage/parent');
};

const Child1 = () => {
  return import('../pages/postMessage/child1');
};

const Child2 = () => {
  return import('../pages/postMessage/child2');
};

const routes = [
  {
    path: '/postMessage', component: Parent, children: [
    {path: "", redirect: "child1"},
    {path: 'child1', component: Child1},
    {path: 'child2', component: Child2}
  ]
  }
];

export default routes;
