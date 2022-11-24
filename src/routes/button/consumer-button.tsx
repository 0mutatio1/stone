import React, { Component, FC, useState } from 'react';
import { COLOR, PLAIN_COLOR } from '../../untils/color';
import { SIZE } from '../../untils/size';
import "./index.scss";

interface Properties {
  text?: string;
  size?: string;
  type?: string;
  plain?: boolean;
  preffix?: JSX.Element;
  surffix?: JSX.Element;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const defualtProperties = {
  text: 'click to change preffix or surffix',
  size: 'medium',
  type: 'primary',
  plain: false,
  preffix: (<></>),
  surffix: (<></>),
  onClick: (e: any) => {
    console.log(e);
  },
};

export const ConsumerButton: FC<Properties> = ({
  text,
  size = 'medium',
  type = 'primary',
  plain = false,
  preffix = (<></>),
  surffix = (<></>),
  onClick = (e: any) => {
    console.log(e);
  },
}) => {
  type = (Object.keys(COLOR).includes(type)) ? type : 'primary';
  size = (Object.keys(SIZE).includes(size)) ? size : 'medium';
  let style = {
    minWidth: SIZE[size].width,
    height: SIZE[size].height,
    color: COLOR[type].color,
    backgroundColor: COLOR[type].backgroundColor,
    border: 'none',
    borderRadius: '5px',
    padding: '0',
    fontSize: SIZE[size].fontSize,
    lineHeight: SIZE[size].height
  };

  const containerStyle = {
    color: COLOR[type].color,
    backgroundColor: COLOR[type].backgroundColor,
    border: `1px solid ${COLOR[type].backgroundColor}`,
    borderRadius: '5px'
  };

  if (plain) {
    style.color = PLAIN_COLOR[type].color;
    style.backgroundColor = PLAIN_COLOR[type].backgroundColor;
    containerStyle.color =  PLAIN_COLOR[type].color;
    containerStyle.backgroundColor =  PLAIN_COLOR[type].backgroundColor;
    containerStyle.border = `1px solid ${PLAIN_COLOR[type].color}`;
  }

  return (
    <div>
      <div className="button-container" style={containerStyle}>
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
