const string = require('./stringFunctions');

describe("stringLength", () => {
    test('Value to be a string', () => { 
        expect(string.stringLength('7')).toBe(1);
     });
    
    test('length of string is between 1 and 10', () => { 
        expect(string.stringLength("n")).toBe(1);
    });
})

describe("reverseString", () => {
    test('Reverse a string', () => { 
        expect(string.reverseString('hello')).toBe('olleh');
    });
})

describe("CapitalizeString", () => {
    test('Value to be a string', () => { 
        expect(string.stringLength('7')).toBe(1);
     });
    
    test('string value is capitalized', () => { 
        expect(string.capitlizeString("n")).toBe('N');
    });

    test('string value is capitalized', () => { 
        expect(string.capitlizeString("bobby")).toBe('Bobby');
    });

    test('string value is capitalized', () => { 
        expect(string.capitlizeString("apple")).toBe('Apple');
    });
})
