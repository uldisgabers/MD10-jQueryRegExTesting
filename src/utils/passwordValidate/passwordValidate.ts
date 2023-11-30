export const passwordValidate = (password: string): boolean => {
  const passwordRegexSimbols = /[!@#$%^&*]+/gi;
  const passwordRegexNumbers = /[\d]+/gi;
  const validSimbolRegex = passwordRegexSimbols.test(password);
  const validNumberSimbol = passwordRegexNumbers.test(password);
  if (password.length >= 8 && validSimbolRegex && validNumberSimbol) {
    return true;
  }
  return false;
};
