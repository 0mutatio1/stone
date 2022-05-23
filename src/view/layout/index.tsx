import React from 'react';
import './index.css';
import STMenu from '../menu/index';

function render(properties: any) {
  return (
    <div className="page">
      <header className="page-header">
        <p>
          header
        </p>
      </header>
      <div className="page-content">
        <div className="page-content-menu">
          <STMenu />
        </div>
        <div className="page-content-view">
          {properties.children}
        </div>
      </div>
    </div>
  );
}

export default render;
