import React, { FC, useState } from 'react';
import "./index.scss";

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
    minWidth: size + 20 + 'px',
    height: size + 'px',
    color: color,
    backgroundColor: '#3b6fff9e',
    border: 'none',
    padding: '5px',
  };

  const [isContracted, setIsContracted] = useState(true);
  const [value, setValue] = useState(text);

  return (
    <div>
      <div className="button-container" 
          onClick={() => {
            setIsContracted(!isContracted);
          }}>
        <button
          type="button"
          style={style}
        >
          {value}
        </button>
        { !isContracted ? ">" : "<" }
      </div>
      {!isContracted ? (
        <div className='menu-field'>
          {list.map((item: any, index: number) => (
            <div
              className={`menu-field__item ${item === value ? ' menu-field__item__isActived' : null}`}
              key={index}
              onClick={() => {
                onClick(item);
                setValue(item);
                setIsContracted(true);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

MenuButton.defaultProps = defualtProperties;

export default MenuButton;
