const checkValues = (arrayNumbers) => {
  if (arrayNumbers[0] == arrayNumbers[arrayNumbers.length - 1]) {
    return true;
  } else return false;
};
console.log(checkValues([1, 2, 1]));
