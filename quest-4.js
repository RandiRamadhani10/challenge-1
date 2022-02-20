const isValidPassword = (givenPassword) => {
  console.log(givenPassword.length);
  return givenPassword.length < 8 ? under(givenPassword) : upper(givenPassword);
};
const under = (givenPassword) => {
  if (/^(?=.*\d)(?=.*[a-z]).{0,8}$/gm.test(givenPassword)) {
    return `FALSE : ${givenPassword} tidak ada huruf besar dan hanya ${givenPassword.length}`;
  } else if (/^(?=.*[a-z]).{0,8}$/gm.test(givenPassword)) {
    return `FALSE : ${givenPassword} tidak ada angka dan hanya ${givenPassword.length}`;
  }
};
const upper = (givenPassword) => {
  if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/gm.test(givenPassword)) {
    return `TRUE : ${givenPassword} terdiri dari 8 character , huruf besar , huruf kecil dan angka.`;
  } else if (/^(?=.*\d)(?=.*[a-z]).{8,}$/gm.test(givenPassword)) {
    return `FALSE : ${givenPassword} tidak ada huruf besar`;
  } else if (/^(?=.*[a-z]).{8,}$/gm.test(givenPassword)) {
    return `FALSE : ${givenPassword} tidak ada angka`;
  }
};

