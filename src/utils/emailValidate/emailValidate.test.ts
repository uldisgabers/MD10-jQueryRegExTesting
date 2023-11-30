import { emailValidate } from './emailValidate';

describe('emailValidate', () => {
  it('should return true for a normal and simple email', () => {
    const result = emailValidate('uldis@gmail.com');

    expect(result).toEqual(true);
  });

  it('should return false for no @ sign', () => {
    const result = emailValidate('uldisgmail.com');

    expect(result).toEqual(false);
  });

  it('should return false for two @ signs', () => {
    const result = emailValidate('uldis@@gmail.com');

    expect(result).toEqual(false);
  });

  it('should return false for invalid local part', () => {
    const result = emailValidate('.uldis.@gmail.com');

    expect(result).toEqual(false);
  });

  it('should return true for point between name and surname', () => {
    const result = emailValidate('uldis.ga@gmail.com');

    expect(result).toEqual(true);
  });

  it('should return false for consequtive dots', () => {
    const result = emailValidate('uldis..g@gmail.com');

    expect(result).toEqual(false);
  });

  it('should return false for no TLD at the end', () => {
    const result = emailValidate('uldisg@gmail');

    expect(result).toEqual(false);
  });

  it('should return false if TLD has numbers', () => {
    const result = emailValidate('uldisg@gmail.8e');

    expect(result).toEqual(false);
  });
});
