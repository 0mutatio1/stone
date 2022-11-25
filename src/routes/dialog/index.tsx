import React, { useState, FC } from 'react';
import './index.scss';

function SDialog() {
  return (
    <div className="stone-container">

      <div className="stone-container__item">
        <div className='stone-container__item_title'>default dialog</div>
        <div className='stone-container__item_content'>
        </div>
      </div>

      <div className="stone-container__item">
        <div className='stone-container__item_title'>dialog</div>
        <div className='stone-container__item_content'>
        </div>
      </div>

    </div>
  );
}

export default SDialog;
