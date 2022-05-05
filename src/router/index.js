import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// 路由配置
import { BrowserRouter as Router } from 'react-router-dom';
// 路由配置抽离
import { renderRoutes } from 'react-router-config';
import routes from './router/router';

ReactDOM.render(
  <Router>{renderRoutes(routes)}</Router>,
  document.getElementById('root'),
);
serviceWorker.unregister();
