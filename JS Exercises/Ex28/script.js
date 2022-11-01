const checkNumbers = (number1, number2) => {
  if ((number1 <= 99 && number1 >= 50) || (number2 <= 99 && number2 >= 50)) {
    return true;
  } else {
    return false;
  }
};
console.log(checkNumbers(22, 99));
