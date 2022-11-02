const setMaxValue = (someArray) => {
  let maxValue = Math.max(someArray[0], someArray[someArray.length - 1]);
  for (let i = 0; i < someArray.length; i++) {
    someArray[i] = maxValue;
  }
  return someArray;
};
console.log(setMaxValue([12, 13, 14, 15, 16, 14, 7]));
