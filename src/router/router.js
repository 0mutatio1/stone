import React from 'react';
import loadable from 'react-loadable';
// import { Spin } from 'antd';
const on_demand = component => {
  return loadable({
    loader: component,
    loading: () => {
      return <span />;
    },
    delay: 500, //0.2秒没有渲染出来则会有loading
  });
};
const routes = [
  {
    path: '/',
    exact: true, //只有当路由完全匹配的时候才进行匹配
    component: on_demand(() => import('../App')),
  },
  {
    path: '/Home',
    exact: true, //只有当路由完全匹配的时候才进行匹配
    component: on_demand(() => import('../view/home/Home.tsx')),
  },
  // 路由嵌套示例
  /*{
    path: '/child/:id',
    component: Child,
    routes: [
      {
        path: '/child/:id/grand-child',
        component: GrandChild,
      },
    ],
  },*/
];

export default routes;
