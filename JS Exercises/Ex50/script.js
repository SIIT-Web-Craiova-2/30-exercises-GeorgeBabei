const capitalizeFirstLetters = (randomSentence) => {
  let words = randomSentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] =
      words[i].substring(0, 1).toUpperCase() +
      words[i].substring(1, words[i].length);
  }
  return words.join(" ");
};
console.log(capitalizeFirstLetters("this is a random sentence."));
