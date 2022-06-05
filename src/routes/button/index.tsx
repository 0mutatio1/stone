import React from 'react';
import { NormalButton } from './normal-button';

function button() {
  return (

    <div className="button-container">
      <div className="normal-button-container">

        <div className="default">
          <p>default button</p>
          <NormalButton />
        </div>

        <div className="custom-onclick">
          <p>button with custom click</p>
          <NormalButton onClick={() => { alert('click'); }} />
        </div>

        <div className='custom-color'>
          <p>button with custom color</p>
          <NormalButton color='red' />
        </div>

        <div className='custom-size'>
          <p>button with custom size</p>
          <NormalButton size={40} />
        </div>
      </div>
    </div>
  );
}

export default button;
