const uppercaseCharacters = (newString) => {
  if (newString.length > 3) {
    let firstThreeChar = newString.substring(0, 3).toUpperCase();
    return firstThreeChar + newString.substring(3, newString.length);
  } else return newString.toUpperCase();
};
console.log(uppercaseCharacters("abcds"));
