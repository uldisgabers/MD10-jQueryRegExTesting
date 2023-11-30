import { passwordValidate } from './passwordValidate';

describe('passwordValidate', () => {
  it('should return true for a normal password', () => {
    const result = passwordValidate('labaparole1@');

    expect(result).toEqual(true);
  });

  it('should return false if only number and no special char', () => {
    const result = passwordValidate('labaparole1');

    expect(result).toEqual(false);
  });

  it('should return false if only simbol and no number', () => {
    const result = passwordValidate('labaparole@');

    expect(result).toEqual(false);
  });

  it('should return true for a normal password with special simbols', () => {
    const result = passwordValidate('labaparole1#$');

    expect(result).toEqual(true);
  });

  it('should return false if password is too short', () => {
    const result = passwordValidate('laba2');

    expect(result).toEqual(false);
  });

  it('should return true if supports all chars (!, @, #, $, %, ^, &, *)', () => {
    const result = passwordValidate('LABaparole3!@#$%^&*');

    expect(result).toEqual(true);
  });

  it('should return true if supports all numbers', () => {
    const result = passwordValidate('0123456789@');

    expect(result).toEqual(true);
  });
});
