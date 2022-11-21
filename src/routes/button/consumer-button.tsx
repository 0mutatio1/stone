import React, { Component, FC, useState } from 'react';
import "./index.scss";

interface Properties {
  text?: string;
  size?: number;
  color?: string;
  preffix?: JSX.Element;
  surffix?: JSX.Element;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const defualtProperties = {
  text: 'click me to change preffix or surffix button',
  size: 30,
  color: 'blue',
  preffix: (<></>),
  surffix: (<></>),
  onClick: (e: any) => {
    console.log(e);
  },
};

export const ConsumerButton: FC<Properties> = ({
  text,
  size = 30,
  color,
  preffix = (<></>),
  surffix = (<></>),
  onClick = (e: any) => {
    console.log(e);
  },
}) => {
  let style = {
    minWidth: size + 20 + 'px',
    height: size + 'px',
    color: color,
    backgroundColor: '#3b6fff9e',
    border: 'none',
    padding: '5px',
  };

  return (
    <div>
      <div className="button-container">
        {preffix}
        <button
          type="button"
          style={style}
          onClick={($e) => {
            onClick($e);
          }}>
          {text}
        </button>
        {surffix}
      </div>
    </div>
  );
};

ConsumerButton.defaultProps = defualtProperties;

export default ConsumerButton;
