import React, { useEffect, useState } from 'react';
import { FifteenItem } from './FifteenItem/FifteenItem';
import { cnFifteens } from './Fifteens.classname';
import { WinAlert } from './WinAlert/WinAlert';

import './Fifteens.css';

const WIN_SEQUENCE = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 0],
];

const Fifteens = () => {
  const [items, setItems] = useState<number[][]>([]);
  const [win, setWin] = useState(false);

  const checkShuffle = (arrayNumber: number[][]) => {
    let countMismatch = 0;
    arrayNumber.forEach((column) => {
      for (let i = 1; i < column.length; i++) {
        if (column[i] < column[i - 1]) {
          countMismatch += 1;
        }
      }
    });
    return countMismatch;
  };

  const shuffleSqrt = () => {
    const result = [];
    let subRes = [];
    const tempSet = new Set();
    while (result.length !== 4) {
      const number = Math.floor(Math.random() * 16);
      if (!tempSet.has(number)) {
        tempSet.add(number);
        subRes.push(number);
        if (subRes.length === 4) {
          result.push(subRes);
          subRes = [];
        }
      }
    }
    return result;
  };

  const setShuffleNumbers = () => {
    while (true) {
      const newArrayNumber = shuffleSqrt();
      if (checkShuffle(newArrayNumber) % 2 === 0) {
        setItems([...newArrayNumber]);
        return;
      }
    }
  };
  const checkWin = () => {
    for (let i = 0; i < items.length; i++) {
      for (let j = 0; j < items[i].length; j++) {
        if (items[i][j] !== WIN_SEQUENCE[i][j]) {
          setWin(false);
          return;
        }
      }
      setWin(true);
      setTimeout(() => {
        setWin(false);
      }, 2000);
    }

    setShuffleNumbers();
  };

  const handleClick = (i: number, j: number) => {
    return () => {
      if (i - 1 >= 0 && !items[i - 1][j]) {
        items[i - 1][j] = items[i][j];
        items[i][j] = 0;
        setItems([...items]);
      } else if (j + 1 < 4 && !items[i][j + 1]) {
        items[i][j + 1] = items[i][j];
        items[i][j] = 0;
        setItems([...items]);
      } else if (i + 1 < 4 && !items[i + 1][j]) {
        items[i + 1][j] = items[i][j];
        items[i][j] = 0;
        setItems([...items]);
      } else if (j - 1 >= 0 && !items[i][j - 1]) {
        items[i][j - 1] = items[i][j];
        items[i][j] = 0;
        setItems([...items]);
      }
      checkWin();
    };
  };
  useEffect(() => {
    setShuffleNumbers();
  }, [win]);
  return (
    <div className={cnFifteens()}>
      {win ? (
        <WinAlert />
      ) : (
        items.map((item, i) =>
          item.map((elem, j) => (
            <FifteenItem
              key={i + j}
              i={i}
              j={j}
              text={elem}
              handleClick={handleClick}
            />
          ))
        )
      )}
    </div>
  );
};

export { Fifteens };
