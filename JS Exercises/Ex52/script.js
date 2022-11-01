const sortLetters = (someString) => {
  const arrangedletters = someString.split("").sort();
  return arrangedletters.join("");
};
console.log(sortLetters("Telekinesis"));
