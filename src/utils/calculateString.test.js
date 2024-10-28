import calculateString from './calculateString';

test('should return 0 for an empty string', () => {
    expect(calculateString("")).toBe(0);
});

test('should return the number itself for a single number', () => {
    expect(calculateString("1")).toBe(1);
});

test('should return the sum of two numbers', () => {
    expect(calculateString("1,2")).toBe(3);
});

test('should return the sum of multiple numbers', () => {
    expect(calculateString("1,2,3")).toBe(6);
});

test('should handle new lines between numbers', () => {
    expect(calculateString("1\n2,3")).toBe(6);
});

test('should trim new lines/spaces after the numbers', () => {
    expect(calculateString("1,2,3\n")).toBe(6);
});

test('should handle different delimiters', () => {
    expect(calculateString("//;\n1;2")).toBe(3);
});

test('should throw an exception for negative numbers', () => {
    expect(() => calculateString("1,-2")).toThrow('negative numbers not allowed: -2');
});

test('should handle multiple negative numbers', () => {
    expect(() => calculateString("1,-2,-3")).toThrow('negative numbers not allowed: -2,-3');
});
