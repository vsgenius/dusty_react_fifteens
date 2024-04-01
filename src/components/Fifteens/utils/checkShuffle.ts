
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

export { checkShuffle };