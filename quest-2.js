const checkTypeNumber = (givenNumber) => {
  let result;
  if (typeof givenNumber == "number") {
    result = givenNumber % 2 === 0 ? "GENAP" : "GANJIL";
  } else {
    result = givenNumber === undefined ? "Error: Bro where is the parameter ?" : "Error: Invalid data type";
  }
  return result;
};

