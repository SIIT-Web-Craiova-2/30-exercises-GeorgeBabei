const createString = (someString) => {
  if (someString.length >= 3) {
    const lastThreeLetters = someString.substring(
      someString.length - 3,
      someString.length
    );
    let newString = [lastThreeLetters];
    for (let i = 1; i < 4; i++) {
      newString.push(lastThreeLetters);
    }
    return newString.join("");
  }
};
console.log(createString("GeoRge"));
