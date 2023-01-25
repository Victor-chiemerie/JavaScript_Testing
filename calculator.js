class calculator{
    static Add = (x, y) => {
        return x + y;
    }

    static Minus = (x, y) => {
        return x - y;
    }

    static Multiply = (x, y) => {
        return x * y;
    }

    static Divide = (x, y) => {
        if (y === 0) {
            throw new Error('Incompetent value of denominator')
        } else {
            return x / y;
        }
    }
}

module.exports = calculator;