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
  {path: '/provideAndInject', component: Index},
  {path: '/responsePaI', component: DefineIndex},
  {path: '/responsePaI2', component: DefineIndex2}
];

export default routes;
