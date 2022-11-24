import React, { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Menu from '../menu/index';
import './index.scss';

const Home: FC = () => (
  <div className="home">
    <div className="left">
      <div className="title">
        Stone UI
      </div>
      <Menu />
    </div>
    <div className="right">
      <Outlet />
    </div>
  </div>
);

export default Home;
