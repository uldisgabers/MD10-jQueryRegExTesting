import { nameValidate } from './nameValidate';

describe('nameValidate', () => {
  it('should handle 1 char letter', () => {
    const result = nameValidate('a');

    expect(result).toEqual(false);
  });

  it('should handle 10 char letters', () => {
    const result = nameValidate('abrjgkodhy');

    expect(result).toEqual(true);
  });

  it('should handle 51 char letters', () => {
    const result = nameValidate('sgydtbghfyrtidhgnbmkdufitguditriufgionjggittuufuhgg');

    expect(result).toEqual(false);
  });

  it('should handle 50 as max chars', () => {
    const result = nameValidate('qwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiop');

    expect(result).toEqual(true);
  });

  it('should return false if numbers are inserted', () => {
    const result = nameValidate('mycoolname80');

    expect(result).toEqual(false);
  });

  it('should return false if non letters are inserted', () => {
    const result = nameValidate('mycoolname80!@#$%^&*()/[]+=-');

    expect(result).toEqual(false);
  });

  it('should return true for uppercase letters', () => {
    const result = nameValidate('ABC');

    expect(result).toEqual(true);
  });

  it('should not contain white space', () => {
    const result = nameValidate('My cool name');

    expect(result).toEqual(false);
  });
});
