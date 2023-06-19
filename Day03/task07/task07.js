function findMissingNumber(array){
    var n = array.length
    var total = (n + 1) * (n + 2)/2
    var sum = array.reduce((a, b) => a + b, 0);
    return total - sum    
}

const array = [1, 2, 4, 5, 6];
console.log(findMissingNumber(array));

module.exports = {
    findMissingNumber
}