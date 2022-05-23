import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 路由配置
import { BrowserRouter } from 'react-router-dom';
// 路由配置抽离
import reportWebVitals from './report-web-vitals';

import Home from './view/home';

import STLayout from './view/layout/index';

ReactDOM.render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>,
  document.querySelector('#root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
