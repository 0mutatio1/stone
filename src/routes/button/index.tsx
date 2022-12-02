import React, { useState, FC } from 'react';
import { NormalButton } from './normal-button';
import { MenuButton } from './menu-button';
import { ConsumerButton } from './consumer-button';

function SButton() {
  return (
    <div className="stone-container">

      <div className="stone-container__item">
        <div className='stone-container__item_title'>default button</div>
        <div className='stone-container__item_content'>
          <NormalButton />
        </div>
      </div>

      <div className="stone-container__item">
        <div className='stone-container__item_title'>button with custom click</div>
        <div className='stone-container__item_content'>
          <NormalButton
            text="click"
            onClick={() => {
              alert('click');
            }}
          />
        </div>
      </div>

      <div className="stone-container__item">
        <div className='stone-container__item_title'>button with custom color</div>
        <div className='stone-container__item_content'>
          <NormalButton />
          <NormalButton color="success" />
          <NormalButton color="warning" />
          <NormalButton color="error" />
          <NormalButton color="info" />
        </div>
      </div>

      <div className="stone-container__item">
        <div className='stone-container__item_title'>plain button</div>
        <div className='stone-container__item_content'>
          <NormalButton plain/>
          <NormalButton color="success" plain />
          <NormalButton color="warning" plain />
          <NormalButton color="error" plain />
          <NormalButton color="info" plain />
        </div>
      </div>

      <div className="stone-container__item">
        <div className='stone-container__item_title'>text button</div>
        <div className='stone-container__item_content'>
          <NormalButton type='text' />
          <NormalButton color="success" type='text' />
          <NormalButton color="warning" type='text' />
          <NormalButton color="error" type='text' />
          <NormalButton color="info" type='text' />
        </div>
      </div>

      <div className="stone-container__item">
        <div className='stone-container__item_title'>button with custom size</div>
        <div className='stone-container__item_content'>
          <NormalButton size="small" />
          <NormalButton size="medium" />
          <NormalButton size="large" />
        </div>
      </div>

      <div className="stone-container__item">
        <div className='stone-container__item_title'>menu button</div>
        <div className='stone-container__item_content'>
          <MenuButton onClick={(val) => { alert(val); }} />
          <MenuButton plain onClick={(val) => { alert(val); }} />
        </div>
      </div>

      <div className="stone-container__item">
        <div className='stone-container__item_title'>preffix or surffix button</div>
        <div className='stone-container__item_content'>
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
    <>
      {
        !!select
        ? <ConsumerButton plain={plain} onClick={() => { setSelect(!select); }}
            preffix={(<span onClick={() => { alert('preffix'); }}>preffix: 124</span>)} />
        : <ConsumerButton plain={plain} onClick={() => { setSelect(!select); }}
            surffix={(<span onClick={() => { alert('surffix'); }}>surffix: 224</span>)} />
      }
    </>
  )
};
export default SButton;
