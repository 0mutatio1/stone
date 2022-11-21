import React, { useState } from 'react';
import { NormalButton } from './normal-button';
import { MenuButton } from './menu-button';
import { ConsumerButton } from './consumer-button';

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
          <NormalButton
            onClick={() => {
              alert('click');
            }}
          />
        </div>

        <div className="custom-color">
          <p>button with custom color</p>
          <NormalButton color="red" />
        </div>

        <div className="custom-size">
          <p>button with custom size</p>
          <NormalButton size={40} />
        </div>

        <div className="default-menu-button">
          <p>default menu button</p>
          <MenuButton />
        </div>

        <div className="pre-or-sur-button">
          <p>preffix or surffix button</p>
          <RenderConsumer />
        </div>

      </div>
    </div>
  );
}

function RenderConsumer () {
  const [select, setSelect] = useState(true);
  return (
    <div onClick={() => {
      setSelect(!select);
    }}>
      {
        !!select
        ? <ConsumerButton preffix={(<React.Fragment>preffix: 124</React.Fragment>)} />
        : <ConsumerButton surffix={(<React.Fragment>surffix: 224</React.Fragment>)} />
      }
    </div>
  )
};
export default button;
