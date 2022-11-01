const checkPosition = (...randomArray) => {
  if (randomArray[0] == 1 || randomArray[randomArray.length - 1] == 1) {
    return true;
  } else return false;
};
console.log(checkPosition(2, 3, 4, 5, 6, 7, 1));
