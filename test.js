class Calculator {
    constructor() {
        this.result = 0;
    }

    add(a, b) {
        this.result = a + b;
        return this.result;
    }

    subtract(a, b) {
        this.result = a - b;
        return this.result;
    }

    multiply(a, b) {
        this.result = a * b;
        return this.result;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        this.result = a / b;
        return this.result;
    }

    getResult() {
        return this.result;
    }

    clear() {
        this.result = 0;
    }
}

// Example usage:
const calculator = new Calculator();

console.log("Addition: 5 + 3 =", calculator.add(5, 3));
console.log("Subtraction: 10 - 4 =", calculator.subtract(10, 4));
console.log("Multiplication: 6 * 7 =", calculator.multiply(6, 7));
console.log("Division: 20 / 5 =", calculator.divide(20, 5));

try {
    console.log("Division by zero: 10 / 0 =", calculator.divide(10, 0));
} catch (error) {
    console.error(error.message);
}

calculator.clear();
console.log("Result after clearing:", calculator.getResult());