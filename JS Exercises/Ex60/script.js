const createNewString = (someString) => {
  const newString = someString.substring(1, someString.length - 1);
  return newString;
};
console.log(createNewString("George"));
