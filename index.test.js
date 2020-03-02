const { describe, it, expect, matchers } = require('./test.framework');
const { sum, divide, multiply, subtract } = require('./index');

describe('sum', () => {
	it('adds two numbers', () => {
		const result = sum(1, 2);
		expect(result).toBe(3);
	});
});

describe('subtract', () => {
	it('subtract two numbers', () => {
		const result = subtract(5, 2);
		expect(result).toBe(3);
	});
});

describe('multiply', () => {
	it('multiply two numbers', () => {
		const result = multiply(5, 2);
		expect(result).toBe(10);
	});
});

describe('divide', () => {
	it('divide two numbers', () => {
		const result = divide(10, 2);
		expect(result).toBe(5);
	});
});
