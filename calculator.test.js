const calculator = require('./calculator');


describe('Addition', () => {
    test('Add 1 + 1 to give 2', () => {
        expect(calculator.Add(1, 1)).toBe(2);
    })

    test('Add 2 + 2 to give 4', () => {
        expect(calculator.Add(2, 2)).toBe(4);
    })

    test('Add 3 + 3 to give 6', () => {
        expect(calculator.Add(3, 3)).toBe(6);
    })
})

describe('Subtraction', () => {
    test('Subtract 1 - 1 to give 0', () => {
        expect(calculator.Minus(1, 1)).toBe(0);
    })

    test('Subtract 8 - 4 to give 4', () => {
        expect(calculator.Minus(8, 4)).toBe(4);
    })

    test('Subtract 3 - 1 to give 2', () => {
        expect(calculator.Minus(3, 1)).toBe(2);
    })
})

describe('Multiplication', () => {
    test('Multiply 1 * 1 to give 1', () => {
        expect(calculator.Multiply(1, 1)).toBe(1);
    })

    test('Add 2 * 8 to give 16', () => {
        expect(calculator.Multiply(2, 8)).toBe(16);
    })

    test('Add 10 * 1 to give 10', () => {
        expect(calculator.Multiply(10, 1)).toBe(10);
    })
})

describe('Division', () => {
    test('Divide 1 / 1 to give 1', () => {
        expect(calculator.Divide(1, 1)).toBe(1);
    })

    test('Divide 0 / 1 to give 2', () => {
        expect(calculator.Divide(0, 1)).toBe(0);
    })

    test('Divide 1 / 10 to be less than 0.2', () => {
        expect(calculator.Divide(1, 10)).toBeLessThan(0.2);
    })
})