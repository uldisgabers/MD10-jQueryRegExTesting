import { processData } from './dataProcessor';

describe('processData', () => {
  it('shoud reduce an array of positive numbers', () => {
    const result = processData([1, 2, 3, 4]);

    expect(result).toEqual(10);
  });

  it('shoud reduce an array of negative numbers', () => {
    const result = processData([-1, -2, -3, -4]);

    expect(result).toEqual(-10);
  });

  it('shoud reduce an array of negative and positive numbers', () => {
    const result = processData([-1, 2, -3, 4]);

    expect(result).toEqual(2);
  });

  it('shoud reduce an array of zeros', () => {
    const result = processData([0, 0, 0, 0]);

    expect(result).toEqual(0);
  });
});
