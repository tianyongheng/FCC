function telephoneCheck(str) {
  // Good luck!
  var reg = /^[1]*[\s\-]*(\d{3}|\(\d{3}\))[\s\-]*\d{3}[\s\-]*\d{4}$/;
  console.log(reg.test(str));
  return reg.test(str);
}

telephoneCheck("555-555-5555");