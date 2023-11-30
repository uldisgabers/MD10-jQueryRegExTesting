import { add, multiply } from './mathFunctions';

describe('add', () => {
  it('should add two numbers', () => {
    const result = add(2, 3);

    expect(result).toEqual(5);
  });

  it('should add with negative numbers', () => {
    const result = add(-2, 5);

    expect(result).toEqual(3);
  });

  it('should add with negative numbers', () => {
    const result = add(-2, -5);

    expect(result).toEqual(-7);
  });

  it('should add with zeros', () => {
    const result = add(0, 0);

    expect(result).toEqual(0);
  });
});

describe('multiply', () => {
  it('should multiply two numbers', () => {
    const result = multiply(2, 3);

    expect(result).toEqual(6);
  });

  it('should multiply big numbers', () => {
    const result = multiply(228, 398);

    expect(result).toEqual(90744);
  });

  it('should multiply zeros', () => {
    const result = multiply(0, 0);

    expect(result).toEqual(0);
  });

  it('should multiply negative numbers', () => {
    const result = multiply(-6, 3);

    expect(result).toEqual(-18);
  });
});
