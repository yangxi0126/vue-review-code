const Index = () => {
  return import('../pages/vuexs/index.vue');
};

const Todo = () => {
  return import('../pages/vuexs/todo.vue');
};

const List = () => {
  return import('../pages/vuexs/list.vue');
};

const routes = [
  {
    path: '/vuexs',
    redirect: '/vuexs/todo',
    component: Index,
    meta: {
      requireAuth: true
    },
    children: [
      {
        name: 'todo',
        path: 'todo',
        component: Todo
      },
      {
        name: 'list',
        path: 'list',
        component: List
      }
    ]
  }
];

export default routes;
