import React, { useState, FC } from 'react';
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
            text="click"
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
          <NormalButton type="success" />
          <NormalButton type="warning" />
          <NormalButton type="error" />
          <NormalButton type="info" />
        </div>
      </div>

      <div className="button-container__item">
        <div className='button-container__item_title'>plain button</div>
        <div className='button-container__item_content'>
          <NormalButton plain/>
          <NormalButton type="success" plain />
          <NormalButton type="warning" plain />
          <NormalButton type="error" plain />
          <NormalButton type="info" plain />
        </div>
      </div>

      <div className="button-container__item">
        <div className='button-container__item_title'>button with custom size</div>
        <div className='button-container__item_content'>
          <NormalButton size="small" />
          <NormalButton size="medium" />
          <NormalButton size="large" />
        </div>
      </div>

      <div className="button-container__item">
        <div className='button-container__item_title'>menu button</div>
        <div className='button-container__item_content'>
          <MenuButton />
          <MenuButton plain />
        </div>
      </div>

      <div className="button-container__item">
        <div className='button-container__item_title'>preffix or surffix button</div>
        <div className='button-container__item_content'>
          <RenderConsumer />
          <RenderConsumer plain/>
        </div>
      </div>

    </div>
  );
}

const RenderConsumer: FC<{ plain?: boolean; }> = ({ plain = false }) => {
  const [select, setSelect] = useState(true);
  return (
    <div onClick={() => {
      setSelect(!select);
    }}>
      {
        !!select
        ? <ConsumerButton plain={plain} preffix={(<React.Fragment>preffix: 124</React.Fragment>)} />
        : <ConsumerButton plain={plain} surffix={(<React.Fragment>surffix: 224</React.Fragment>)} />
      }
    </div>
  )
};
export default SButton;
