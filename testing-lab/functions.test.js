const {
  returnTwo,
  greeting,
  add,
  multiple,
  subtract,
  divide,
} = require('./functions');

it('2 should equal 2', () => {
  expect(returnTwo()).toEqual(2);
});

it('Name should equal name', () => {
  expect(greeting('James')).toMatch('James');
});

it('Name should equal name', () => {
  expect(greeting('Jill')).toMatch('Jill');
});

it('num1 + numb2 should equal sum', () => {
  expect(add(1, 2)).toEqual(3);
});

it('num1 + numb2 should equal sum', () => {
  expect(add(5, 9)).toBe(14);
});

describe('Calculation function tests', () => {
  it('should return the sum of two numbers', () => {
    expect(add(4, 4)).toBe(8);
  });
  it('num2 should be subtracted from num1', () => {
    expect(subtract(10, 8)).toEqual(2);
  });
  it('should return num1 multiplied with num2', () => {
    expect(multiple(30, 3)).toEqual(90);
  });
  it('Should return num1 divided by num2', () => {
    expect(divide(100, 20)).toEqual(5);
  });
});
