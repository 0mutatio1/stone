import React, { FC } from 'react';

interface Properties {
  text?: string;
  size?: number;
  color?: string;
  list?: any[];
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const defualtProperties = {
  text: 'click menu',
  size: 30,
  color: 'blue',
  list: ['react', 'vue', 'angular'],
  onClick: (val: any) => {
    console.log(val);
  },
};

export const MenuButton: FC<Properties> = ({
  text,
  size = 30,
  color,
  onClick = (val: any) => {
    console.log(val);
  },
  list = [],
}) => {
  let style = {
    width: size + 20 + 'px',
    height: size + 'px',
    color: color,
    backgroundColor: '#3b6fff9e',
    border: 'none',
    padding: '0px',
  };

  let isContracted = true;

  return (
    <div>
      <button
        type="button"
        style={style}
        onClick={() => {
          isContracted = false;
        }}
      >
        {text}
      </button>
      {!isContracted ? (
        <ul>
          {list.map((item: any, index: number) => (
            <li
              key={index}
              onClick={() => {
                onClick(item);
                isContracted = true;
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

MenuButton.defaultProps = defualtProperties;

export default MenuButton;
