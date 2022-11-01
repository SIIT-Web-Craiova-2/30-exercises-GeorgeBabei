const checkLastDigit = (nr1, nr2, nr3) => {
  if (nr1 % 10 == nr2 % 10 && nr1 % 10 == nr3 % 10 && nr2 % 10 == nr3 % 10) {
    return true;
  } else return false;
};
console.log(checkLastDigit(588, 668, 778778));
