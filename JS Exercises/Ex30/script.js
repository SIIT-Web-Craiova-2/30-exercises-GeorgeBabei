const checkString = (inputString) => {
  if (inputString.length >= 10 && inputString.substring(4, 10) == "Script") {
    return (
      inputString.substring(0, 4) +
      inputString.substring(10, inputString.length)
    );
  } else return inputString;
};
console.log(checkString("1234Script5678"));
