export const emailValidate = (email: string) => {
  if (!(/@/).test(email)) { return false; } // returns false if an email has no @ simbol

  const arr = email.split('@');
  const localPart = arr[0];

  const domainPart = arr[1];
  const regexDomain = /[a-zA-Z0-9.-]+/g;
  const foundDomain = regexDomain.test(domainPart); // should be true if domain name is good

  if (!/\./.test(domainPart)) { return false; } // returns false if there is no '.' in domain
  const domainTLD = domainPart.split('.');
  const regexTLD = /[^a-zA-Z]/gi; // regex for anything but letters
  // should be true if it has anything but letters
  const foundTLD = regexTLD.test(domainTLD[domainTLD.length - 1]);

  if (arr.length !== 2
      || localPart[0] === '.'
      || localPart[localPart.length - 1] === '.'
      || !foundDomain
      || foundTLD) {
    return false;
  }

  for (let i = 0; i < localPart.length; i += 1) {
    if (localPart[i] === localPart[i + 1] && localPart[i] === '.') {
      return false;
    }
  }

  return true;
};
