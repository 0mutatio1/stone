import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.scss';

// 路由配置抽离
import reportWebVitals from './report-web-vitals';

import App from './App';
import Home from './routes/home';
import Button from './routes/button';
import Table from './routes/table';
import Dialog from './routes/dialog';
import Form from './routes/form';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />}>
        <Route path="button" element={<Button />} />
        <Route path="table" element={<Table />} />
        <Route path="dialog" element={<Dialog />} />
        <Route path="form" element={<Form />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.querySelector('#root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
