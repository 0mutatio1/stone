import React, { FC, useState } from 'react';
import { COLOR, PLAIN_COLOR } from '../../untils/color';
import { SIZE } from '../../untils/size';
import "./index.scss";

interface Properties {
  text?: string;
  size?: string;
  color?: string;
  plain?: boolean;
  list?: any[];
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const defualtProperties = {
  text: 'click menu',
  size: 'medium',
  color: 'primary',
  plain: false,
  list: ['react', 'vue', 'angular'],
  onClick: (val: any) => {
    console.log(val);
  },
};

export const MenuButton: FC<Properties> = ({
  text,
  size = 'medium',
  color = 'primary',
  plain = false,
  onClick = (val: any) => {
    console.log(val);
  },
  list = [],
}) => {
  color = (Object.keys(COLOR).includes(color)) ? color : 'primary';
  size = (Object.keys(SIZE).includes(size)) ? size : 'medium';
  const style = {
    minWidth: SIZE[size].width,
    height: SIZE[size].height,
    color: COLOR[color].color,
    backgroundColor: COLOR[color].backgroundColor,
    border: 'none',
    padding: '0',
    borderRadius: '5px',
    fontSize: SIZE[size].fontSize,
    lineHeight: SIZE[size].height
  };

  const containerStyle = {
    color: COLOR[color].color,
    backgroundColor: COLOR[color].backgroundColor,
    border: `1px solid ${COLOR[color].backgroundColor}`,
    borderRadius: '5px'
  };

  if (plain) {
    style.color = PLAIN_COLOR[color].color;
    style.backgroundColor = PLAIN_COLOR[color].backgroundColor;
    containerStyle.color =  PLAIN_COLOR[color].color;
    containerStyle.backgroundColor =  PLAIN_COLOR[color].backgroundColor;
    containerStyle.border = `1px solid ${PLAIN_COLOR[color].color}`;
  }

  const [isContracted, setIsContracted] = useState(true);
  const [value, setValue] = useState(text);

  return (
    <div>
      <div
        className="button-container"
        style={containerStyle}
        onClick={() => {
          setIsContracted(!isContracted);
        }}
      >
        <button
          color="button"
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
