const checkEmail = (email) => {
  if (typeof email === "undefined") {
    return "Type data harus string, tidak boleh undifined";
  }
  if (/^[a-z0-9]+@[a-z.-]+\.[a-z]{2,3}$/gi.test(email)) {
    return "VALID";
  } else if (/^[a-z0-9]+@[a-z]/gi.test(email)) {
    return "INVALID";
  } else {
    return "Format email tidak valid, contoh : test@mail.com";
  }
};
console.log(checkEmail());
