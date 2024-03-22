import React from 'react';
import { cnFifteenItem } from './FifteenItem.classname';

import type { FC,MouseEventHandler } from 'react';

import './FifteenItem.css';

type FifteenItemProps = {
  i: number;
  j: number;
  text: number;
  handleClick:(i:number,j:number)=>MouseEventHandler
};

const FifteenItem: FC<FifteenItemProps> = ({ text, i, j, handleClick }) => {

  return (
      <div className={cnFifteenItem()} style={{ left: j * 80, top: i * 80}} onClick={handleClick(i,j)}>
       <p>{text ? text : ''}</p>
    </div>
  );
};

export { FifteenItem };
