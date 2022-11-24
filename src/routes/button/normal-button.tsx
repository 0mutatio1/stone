import React, { FC } from 'react';
import { COLOR, PLAIN_COLOR } from '../../untils/color';
import { SIZE } from '../../untils/size';

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

export const NormalButton: FC<Properties> = ({
  text, size = 'medium', color = 'primary', plain = false, type= 'button', onClick,
}) => {
  color = (Object.keys(COLOR).includes(color)) ? color : 'primary';
  size = (Object.keys(SIZE).includes(size)) ? size : 'medium';
  const style = {
    minWidth: SIZE[size].width,
    height: SIZE[size].height,
    color: COLOR[color].color,
    backgroundColor: COLOR[color].backgroundColor,
    border: `1px solid ${COLOR[color].backgroundColor}`,
    borderRadius: '5px',
    padding: '0',
    fontSize: SIZE[size].fontSize,
    lineHeight: SIZE[size].height
  };

  const textButtonStyle = {
    color: PLAIN_COLOR[color].color,
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: SIZE[size].fontSize
  };

  if (plain) {
    style.color = PLAIN_COLOR[color].color;
    style.backgroundColor = PLAIN_COLOR[color].backgroundColor;
    style.border = `1px solid ${PLAIN_COLOR[color].color}`;
  }

  return (
    <>
      {
        type === 'text'
        ? <span style={textButtonStyle}>{text}</span>
        : <button color="button" onClick={onClick} style={style}> {text} </button>
      }
    </>
  )
};

NormalButton.defaultProps = defualtProperties;

export default NormalButton;
