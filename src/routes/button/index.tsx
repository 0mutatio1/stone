import React, { useState } from 'react';
import { NormalButton } from './normal-button';
import { MenuButton } from './menu-button';
import { ConsumerButton } from './consumer-button';

function SButton() {
  return (
    <div className="button-container">

      <div className="button-container__item">
        <div className='button-container__item_title'>default button</div>
        <div className='button-container__item_content'>
          <NormalButton />
        </div>
      </div>

      <div className="button-container__item">
        <div className='button-container__item_title'>button with custom click</div>
        <div className='button-container__item_content'>
          <NormalButton
            onClick={() => {
              alert('click');
            }}
          />
        </div>
      </div>

      <div className="button-container__item">
        <div className='button-container__item_title'>button with custom color</div>
        <div className='button-container__item_content'>
          <NormalButton />
          <NormalButton type="waring" />
          <NormalButton type="error" />
          <NormalButton type="success" />
        </div>
      </div>

      <div className="button-container__item">
        <div className='button-container__item_title'>button with custom size</div>
        <div className='button-container__item_content'>
          <NormalButton />
          <NormalButton size={30} />
          <NormalButton size={40} />
          <NormalButton size={50} />
        </div>
      </div>

      <div className="button-container__item">
        <div className='button-container__item_title'>default menu button</div>
        <div className='button-container__item_content'>
          <MenuButton />
        </div>
      </div>

      <div className="button-container__item">
        <div className='button-container__item_title'>preffix or surffix button</div>
        <div className='button-container__item_content'>
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
export default SButton;
