import React from 'react';
import { cnFifteenItem } from './FifteenItem.classname';

import type { FC, MouseEventHandler } from 'react';

import './FifteenItem.css';

type FifteenItemProps = {
  x: number;
  y: number;
  text: number;
  handleClick: (x: number, y: number) => MouseEventHandler;
};

const FifteenItem: FC<FifteenItemProps> = ({ text, x, y, handleClick }) => {
  return (
    <div
      className={cnFifteenItem()}
      style={{ left: y * 80, top: x * 80 }}
      onClick={handleClick(x, y)}
    >
      <p>{text ? text : ''}</p>
    </div>
  );
};

export { FifteenItem };
