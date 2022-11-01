const closerTo100 = (number1, number2) => {
  let diffNr1 = number1 - 100;
  let diffNr2 = number2 - 100;
  if (diffNr1 > diffNr2) {
    return number1 + " is closer to 100 than " + number2 + ".";
  } else if (diffNr1 == diffNr2) {
    return "Numbers are equally close to 100.";
  } else {
    return number2 + " is closer to 100 than " + number1 + ".";
  }
};
console.log(closerTo100(-1, 9));
