function calculateDigitSum(number){
    return number.toString().split('').reduce((a, b) => (a + parseInt(b)), 0);
}

const number = 12345;
const digitSum = calculateDigitSum(number);
console.log(digitSum);

module.exports = {
    calculateDigitSum
}