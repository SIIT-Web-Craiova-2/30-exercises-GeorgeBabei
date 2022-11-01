const createnewString = (initialString) => {
  const newString =
    initialString[initialString.length - 1] +
    initialString.slice(1, -1) +
    initialString[0];
  if (initialString.length > 1) {
    console.log(newString);
  } else if ((initialString.length = 1)) {
    console.log(initialString);
  } else console.log('String length is less than "1"');
};
createnewString("fffffa");
