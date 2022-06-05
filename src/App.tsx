/* eslint-disable unicorn/filename-case */
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import logo from './statics/images/logo.svg';
import './App.scss';

const App: FC = () => (
  <div className="stone">
    <header className="header">
      <img src={logo} className="logo" alt="logo" />
      <h2 className="slogan">Welcome to Stone-UI.</h2>
      <Link to="/home" className="goo">
        get started
      </Link>
    </header>
  </div>
);

export default App;
