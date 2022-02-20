const getSplitName = (personName) => {
  if (typeof personName !== "string") {
    return "invalid data type";
  }
  const pattern = /(\w)+/g;
  const result = personName.match(pattern);
  if (result.length > 3) {
    return "ERROR : This function is only 3 character name";
  }

  const data = {
    firstName: typeof result[0] === "undefined" ? null : result[0],
    middleName: typeof result[1] === "undefined" ? null : result[1],
    lastName: typeof result[2] === "undefined" ? null : result[2],
  };
  return data;
};
console.log(getSplitName(0));
