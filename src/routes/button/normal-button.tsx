import React, { FC } from 'react';

interface Properties {
  text?: string,
  size?: number,
  color?: string,
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const defualtProperties = {
  text: 'click',
  size: 12,
  color: 'blue',
  onClick: undefined,
};

export const NormalButton: FC<Properties> = ({
  text, size = 10, color, onClick,
}) => {
  let style = {
    width: size + 20 +'px',
    height: size+'px',
    color: color,
    backgroundColor: '#3b6fff9e',
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
