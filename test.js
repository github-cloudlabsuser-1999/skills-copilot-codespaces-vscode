const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }

    calculate() {
        readline.question('Enter the first number: ', (firstNumber) => {
            readline.question('Enter the second number: ', (secondNumber) => {
                readline.question('Enter the operation (add, subtract, multiply, divide): ', (operation) => {
                    let result;
                    switch (operation) {
                        case 'add':
                            result = this.add(Number(firstNumber), Number(secondNumber));
                            break;
                        case 'subtract':
                            result = this.subtract(Number(firstNumber), Number(secondNumber));
                            break;
                        case 'multiply':
                            result = this.multiply(Number(firstNumber), Number(secondNumber));
                            break;
                        case 'divide':
                            result = this.divide(Number(firstNumber), Number(secondNumber));
                            break;
                        default:
                            console.log('Invalid operation!');
                            readline.close();
                            return;
                    }
                    console.log(`The result is: ${result}`);
                    readline.close();
                });
            });
        });
    }
}

// Usage
const calculator = new Calculator();
calculator.calculate();