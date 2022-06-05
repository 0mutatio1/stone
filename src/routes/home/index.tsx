import React, { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './index.scss';

const Home: FC = () => (
  <div className="home">
    <div className="left">
      <div className="title">
        Stone UI
      </div>
      <ul className="components">
        <li className="button">
          <Link to="/home/button">Button</Link>
        </li>
        <li className="table">
          <Link to="/home/table">Table</Link>
        </li>
        <li className="dialog">
          <Link to="/home/dialog">Dialog</Link>
        </li>
        <li className="form">
          <Link to="/home/form">Form</Link>
        </li>
      </ul>
    </div>
    <div className="right">
      <Outlet />
    </div>
  </div>
);

export default Home;
