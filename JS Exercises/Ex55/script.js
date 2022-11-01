const checkPandT = (someString) => {
  let pCount = 0;
  let tCount = 0;
  for (let i = 0; i < someString.length; i++) {
    if (someString[i] == "p" || someString[i] == "P") {
      pCount++;
    } else if (someString[i] == "t" || someString[i] == "T") {
      tCount++;
    }
  }
  if ((pCount = tCount)) {
    return true;
  } else return false;
};
console.log(checkPandT("Ppptttptptpt"));
