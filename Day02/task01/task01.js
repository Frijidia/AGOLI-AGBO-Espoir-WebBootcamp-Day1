function sumOfOddNumbers(array){
    var sum = 0;
    arr =  array.filter(v => v % 2 != 0)
    sum = arr.reduce((a, b) => a + b, 0);
    return sum;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddSum = sumOfOddNumbers(numbers);
console.log(oddSum);

module.exports = {
	sumOfOddNumbers
}