import React, { FC } from 'react';
import { COLOR, PLAIN_COLOR } from '../../untils/color';
import { SIZE } from '../../untils/size';

interface Properties {
  text?: string,
  size?: string,
  type?: string,
  plain?: boolean,
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const defualtProperties = {
  text: 'button',
  size: 'medium',
  type: 'primary',
  plain: false,
  onClick: undefined,
};

export const NormalButton: FC<Properties> = ({
  text, size = 'medium', type = 'primary', plain = false, onClick,
}) => {
  type = (Object.keys(COLOR).includes(type)) ? type : 'primary';
  size = (Object.keys(SIZE).includes(size)) ? size : 'medium';
  let style = {
    minWidth: SIZE[size].width,
    height: SIZE[size].height,
    color: COLOR[type].color,
    backgroundColor: COLOR[type].backgroundColor,
    border: `1px solid ${COLOR[type].backgroundColor}`,
    borderRadius: '5px',
    padding: '0',
    fontSize: SIZE[size].fontSize,
    lineHeight: SIZE[size].height
  };

  if (plain) {
    style.color = PLAIN_COLOR[type].color;
    style.backgroundColor = PLAIN_COLOR[type].backgroundColor;
    style.border = `1px solid ${PLAIN_COLOR[type].color}`;
  }

  return (
    <button type="button" onClick={onClick} style={style}>
      {text}
    </button>
  )
};

NormalButton.defaultProps = defualtProperties;

export default NormalButton;
