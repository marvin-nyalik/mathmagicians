import calculate from './calculate';
import operate from './operate';

describe('calculate', () => {
  it('should return an object with null values if buttonName is "AC"', () => {
    const obj = {
      total: 10,
      next: '5',
      operation: '+',
    };
    const buttonName = 'AC';
    const expected = {
      total: null,
      next: null,
      operation: null,
    };
    const result = calculate(obj, buttonName);
    expect(result).toEqual(expected);
  });

  it('should update the "next" value when buttonName is a number', () => {
    const obj = {
      total: 10,
      next: '5',
      operation: '+',
    };
    const buttonName = '5';
    const expected = {
      total: 10,
      next: '55',
      operation: '+',
    };
    const result = calculate(obj, buttonName);
    expect(result).toEqual(expected);
  });

  it('should add a decimal point to the "next" value when buttonName is "."', () => {
    const obj = {
      total: 10,
      next: '5',
      operation: '+',
    };
    const buttonName = '.';
    const expected = {
      total: 10,
      next: '5.',
      operation: '+',
    };
    const result = calculate(obj, buttonName);
    expect(result).toEqual(expected);
  });

  it('should produce a valid result if the buttonName is "="', () => {
    const obj = {
      total: 10,
      next: '5',
      operation: '+',
    };
    const buttonName = '=';
    const expected = {
      total: operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: null,
    };
    const result = calculate(obj, buttonName);
    expect(result).toEqual(expected);
  });

  it('should return the negative or the positive of number if the buttonName is "+/-"', () => {
    const obj = {
      total: null,
      next: '5',
      operation: null,
    };
    const buttonName = '+/-';
    const expected = {
      total: null,
      next: '-5',
      operation: null,
    };
    const result = calculate(obj, buttonName);
    expect(result).toEqual(expected);
  });

  it('should add new operation after previously getting an answer after pressing "="', () => {
    const obj = {
      total: 10,
      next: null,
      operation: null,
    };
    const buttonName = '+';
    const expected = {
      total: 10,
      next: null,
      operation: '+',
    };
    const result = calculate(obj, buttonName);
    expect(result).toEqual(expected);
  });

  it('should replace an existing operation when new operation is pressed', () => {
    const obj = {
      total: 10,
      next: null,
      operation: '-',
    };
    const buttonName = '+';
    const expected = {
      total: 10,
      next: null,
      operation: '+',
    };
    const result = calculate(obj, buttonName);
    expect(result).toEqual(expected);
  });

  it('should save only the operation if user hasnt typed a number yet', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    const buttonName = '+';
    const expected = {
      operation: '+',
    };
    const result = calculate(obj, buttonName);
    expect(result).toEqual(expected);
  });
});
