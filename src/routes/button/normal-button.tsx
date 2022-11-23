import React, { FC } from 'react';

interface Properties {
  text?: string,
  size?: number,
  type?: any,
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const defualtProperties = {
  text: 'click',
  size: 20,
  type: 'primary',
  onClick: undefined,
};

const COLOR: any = {
  primary: {
    color: 'white',
    backgroundColor: '#3b6f9e'
  },
  warning: {
    color: 'white',
    backgroundColor: '#3b6fff9e'
  },
  error: {
    color: 'white',
    backgroundColor: '#3b6fff9e'
  },
  success: {
    color: 'white',
    backgroundColor: '#3b6fff9e'
  },
}
export const NormalButton: FC<Properties> = ({
  text, size = 20, type = 'primary', onClick,
}) => {
  let style = {
    width: size + 20 +'px',
    height: size +'px',
    color: COLOR[type].color,
    backgroundColor: COLOR[type].backgroundColor,
    border: 'none',
    padding: '0px'
  };

  return (
    <button type="button" onClick={onClick} style={style}>
      {text}
    </button>
  )
};

NormalButton.defaultProps = defualtProperties;

export default NormalButton;
