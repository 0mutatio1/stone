import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// 路由配置
import { BrowserRouter as Router } from 'react-router-dom';
// 路由配置抽离
import { renderRoutes } from 'react-router-config';
import routes from './router/router';
import STLayout from './view/layout/index';

ReactDOM.render(
  <Router>
    {
      ['', '/'].includes(window.location.pathname) ?
      renderRoutes(routes) :
      (<STLayout>
        {renderRoutes(routes)}
      </STLayout>)
    }
  </Router>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
