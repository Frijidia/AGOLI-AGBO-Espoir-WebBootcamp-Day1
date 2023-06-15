function factorial(n){
    if (n < 0) return -1
    else if (n > 0 && n < 2) return 1
    else return (n * factorial(n - 1))
}

const number = 5;
const result = factorial(number);
console.log(`The factorial of ${number} is ${result}`);