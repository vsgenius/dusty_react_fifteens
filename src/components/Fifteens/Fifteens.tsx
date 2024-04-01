import React, { useEffect, useState } from 'react';
import { FifteenItem } from './FifteenItem/FifteenItem';
import { cnFifteens } from './Fifteens.classname';
import { WinAlert } from './WinAlert/WinAlert';

import './Fifteens.css';
import { shuffleSqrt } from './utils/shuffleSqrt';
import { checkShuffle } from './utils/checkShuffle';

const WIN_SEQUENCE = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 0],
];


const Fifteens = () => {
  const [items, setItems] = useState<number[][]>([]);
  const [win, setWin] = useState(false);



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

  const handleMove = (i: number, j: number) => {
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
        items.map((row, i) =>
          row.map((cell, j) => (
            <FifteenItem
              key={cell}
              x={i}
              y={j}
              text={cell}
              handleMove={handleMove}
            />
          ))
        )
      )}
    </div>
  );
};

export { Fifteens };
