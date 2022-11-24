import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const Menu: FC = () => {
  const menuList = [
    {
      label: 'Button',
      path: '/home/button'
    },
    {
      label: 'Table',
      path: '/home/table'
    },
    {
      label: 'Dialog',
      path: '/home/dialog'
    },
    {
      label: 'Form',
      path: '/home/form'
    }
  ];

  const [pathname, setPathname] = useState(window.location.pathname);

  return(
    <ul className="menu-list">
      {
        menuList.map((item, index) =>
          (<li className={`${pathname.includes(item.path) ? 'is-active' : 'is-inactive'} menu-list__item`} key={index}>
            <Link onClick={() => setPathname(item.path) } to={item.path}>{item.label}</Link>
          </li>)
        )
      }
    </ul>
)};

export default Menu;
