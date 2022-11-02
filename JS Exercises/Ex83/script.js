const findLongestString = (someArray) => {
  const lengthArray = [];
  for (let i = 0; i < someArray.length; i++) {
    lengthArray.push(someArray[i].length);
  }
  return someArray[lengthArray.indexOf(Math.max(...lengthArray))];
};
console.log(
  findLongestString(["georg", "123", "string", "Abracadabra", "number"])
);
