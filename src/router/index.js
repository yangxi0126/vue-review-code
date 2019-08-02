const Index = () => {
  return import('../pages/index.vue');  //import可以异步加载组件  babel-plugin-syntax-dynamic-import这个插件安装了才能import写法
};

const routes = [
  {
    name: 'index',
    path: '/index',
    component: Index,
    meta: {
      requireAuth: true
    }
  }
];

export default routes;
