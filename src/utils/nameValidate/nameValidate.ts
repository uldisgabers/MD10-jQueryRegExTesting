export const nameValidate = (name: string): boolean => {
  const regex = /[A-Z]/gi;
  const found = name.match(regex);

  if (name.length >= 2 && name.length <= 50 && name === found.join('')) {
    return true;
  }

  return false;
};
