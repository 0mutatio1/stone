import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './index.scss';

function Home() {
  return (
    <div className="home">
      <div className="header">
        Header
      </div>
      <div className="body">
        <div className="left-bar">
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
        <Outlet />
      </div>
      <div className="footer">
        Footer
      </div>
    </div>
  );
}

export default Home;
