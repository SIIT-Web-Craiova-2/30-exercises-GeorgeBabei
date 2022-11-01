const createString = (someString, copies) => {
  let newString = [someString];
  for (let i = 1; i < copies; i++) {
    newString.push(someString);
  }
  return newString.join("");
};
console.log(createString("George", 3));
