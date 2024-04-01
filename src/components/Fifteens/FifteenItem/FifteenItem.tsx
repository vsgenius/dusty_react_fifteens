import React from 'react';
import { cnFifteenItem } from './FifteenItem.classname';

import type { FC, MouseEventHandler } from 'react';

import './FifteenItem.css';

const WIDTH_CELL = 80;

type FifteenItemProps = {
  x: number;
  y: number;
  text: number;
  handleMove: (x: number, y: number) => MouseEventHandler;
};

const FifteenItem: FC<FifteenItemProps> = ({ text, x, y, handleMove }) => {
  return (
    <div
      className={cnFifteenItem()}
      style={{ left: y * WIDTH_CELL, top: x * WIDTH_CELL }}
      onClick={handleMove(x, y)}
    >
      {text !== 0 && <p>{ text }</p>}
    </div>
  );
};

export { FifteenItem };
