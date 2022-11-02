const createNewArray = (array1, array2) => {
  const newArray = [];
  newArray.push(array1[1], array2[1]);
  return newArray;
};
console.log(createNewArray([1, 2, 3], [4, 5, 6]));
