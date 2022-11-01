const checkNumbers = (number1, number2) => {
  if (number1 === 50 || number2 === 50 || number1 + number2 === 50) {
    return true;
  } else {
    return false;
  }
};
console.log(checkNumbers(-100, 150));
