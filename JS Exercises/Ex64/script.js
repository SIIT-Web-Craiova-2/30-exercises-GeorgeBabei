const newString = (string1, string2) => {
  const minLengthString = Math.min(string1.length, string2.length);
  if (string1.length == string2.length) {
    return string1 + string2;
  } else {
    return (
      string1.substring(0, minLengthString) +
      string2.substring(0, minLengthString)
    );
  }
};

console.log(newString("George", "1234"));
