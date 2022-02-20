const getAngkaTerbesarKedua = (dataNumbers) => {
  if (typeof dataNumbers == "number") {
    return "ERROR : karena type data bukan array";
  }
  if (typeof dataNumbers == "undefined") {
    return "ERROR : karena parameter tidak diisi dan menjadi undefined";
  }
  const data = dataNumbers.filter((num, index) => {
    console.log(dataNumbers.indexOf(num) + " " + index);
    return dataNumbers.indexOf(num) === index;
  });
  const result = data.sort((a, b) => {
    return b - a;
  });
  return result;
};
const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

console.log(getAngkaTerbesarKedua());
