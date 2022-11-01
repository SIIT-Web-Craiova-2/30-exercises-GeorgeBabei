const countVowels = (someString) => {
  let vowelsNumber = 0;
  for (let i = 0; i < someString.length; i++) {
    if (
      someString[i] == "a" ||
      someString[i] == "A" ||
      someString[i] == "e" ||
      someString[i] == "E" ||
      someString[i] == "i" ||
      someString[i] == "I" ||
      someString[i] == "o" ||
      someString[i] == "O" ||
      someString[i] == "u" ||
      someString[i] == "U" ||
      someString[i] == "y" ||
      someString[i] == "Y"
    ) {
      vowelsNumber++;
    }
  }
  return "The string contains " + vowelsNumber + " vowels";
};
console.log(countVowels("Abracadabra is a spell"));
