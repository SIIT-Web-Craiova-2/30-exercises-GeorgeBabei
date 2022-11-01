const createPyString = (randomString) => {
  if (randomString[0] == "P" && randomString[1] == "y") {
    console.log(randomString);
  } else console.log("Py" + randomString);
};
createPyString("Pyppypyppyy");
