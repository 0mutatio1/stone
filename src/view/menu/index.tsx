import React from 'react';
import { useLocation, NavLink } from "react-router-dom";
import './index.css';

const menuList = [
  { label: 'firstPage', path: '' },
  { label: 'Home', path: '/Home' },
  { label: 'button', path: '/button' },
];
function render() {
  console.log(window.location.pathname);
  return (
    <div className="menu">
      { menuList
        .map((item, index) => {
          if (window.location.pathname.includes(item.path) && item.path !== '') {
            return (<NavLink className="menu-item menu-item-active" key={index} to={item.path}>{item.label}</NavLink>)
          } else {
            return (<NavLink className="menu-item" key={index} to={item.path}>{item.label}</NavLink>)
          }
        })
      }
    </div>
  );
}

export default render;
