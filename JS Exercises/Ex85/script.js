const createNewArray = (someArray) => {
  const sumOfTwoParts = [];
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < someArray.length; i += 2) {
    sum1 += someArray[i];
  }
  for (let i = 1; i < someArray.length; i += 2) {
    sum2 += someArray[i];
  }
  sumOfTwoParts.push(sum1);
  sumOfTwoParts.push(sum2);
  return sumOfTwoParts;
};
console.log(createNewArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
