function calculateSum(array){
    let sum = 0;
    sum = array.reduce((a, b) => a + b, 0);
    return sum;
}

const numbers = [1, 2, 3, 4, -5];
const sum = calculateSum(numbers);
console.log(sum);

module.exports = {
    calculateSum
}
