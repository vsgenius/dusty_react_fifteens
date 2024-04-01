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

export { shuffleSqrt };