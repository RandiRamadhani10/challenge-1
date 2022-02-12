const checkTypeNumber = (givenNumber) => {
  if (typeof givenNumber == "number") {
    const result = givenNumber % 2 === 0 ? "GENAP" : "GANJIL";
    return result;
  } else {
    const result = givenNumber === undefined ? "Error: Bro where is the parameter ?" : "Error: Invalid data type";
    return result;
  }
};
