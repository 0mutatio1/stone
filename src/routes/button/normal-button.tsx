import React, { FC } from 'react';
import { COLOR, PLAIN_COLOR } from '../../untils/color';
import { SIZE } from '../../untils/size';
import "./index.scss";

interface Properties {
  text?: string,
  size?: string,
  color?: string,
  type?: string,
  plain?: boolean,
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const defualtProperties = {
  text: 'button',
  size: 'medium',
  color: 'primary',
  type: 'button',
  plain: false,
  onClick: undefined,
};

export const NormalButton: FC<Properties> = ({ text, size = 'medium', color = 'primary', plain = false, type= 'button', onClick }) => {
  color = (Object.keys(COLOR).includes(color)) ? color : 'primary';
  size = (Object.keys(SIZE).includes(size)) ? size : 'medium';
  const style = { border: `1px solid ${COLOR[color].backgroundColor}` };
  if (plain) {
    style.border = `1px solid ${PLAIN_COLOR[color].color}`;
  }

  return (
    <>
      {
        type === 'text'
        ? <span className={`${color}-text button button-${size} text-button`}>{text}</span>
        : <button className={`${color} ${plain ? color + '-plain' : ''} button button-${size}`} type="button" onClick={onClick} style={style}> {text} </button>
      }
    </>
  )
};

NormalButton.defaultProps = defualtProperties;

export default NormalButton;
