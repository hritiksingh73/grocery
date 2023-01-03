export const emailValidator = registeremail => {
  var regx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regx.test(registeremail);
};
export const phoneNumberValidator = cellNumber => {
  var regx = /^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\d{10}\s*,?$/;
  return regx.test(cellNumber);
};
export const passwordValidator = password => {
  var regx =
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
  return regx.test(password);
};
