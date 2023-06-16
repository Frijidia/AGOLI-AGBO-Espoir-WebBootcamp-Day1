function calculateAverage(array){
    let sum = 0;
    sum = array.reduce((a, b) => a + b, 0);
    let av = sum / array.length;
    return av;
}

const numbers = [1, 2, 3, 4, 5];
const average = calculateAverage(numbers);
console.log(average);

module.exports = {
    calculateAverage
}
