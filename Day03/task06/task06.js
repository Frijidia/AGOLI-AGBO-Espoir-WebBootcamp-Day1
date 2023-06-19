function factorial(n){
    if (n < 0) return -1
    else if (n > 0 && n < 2) return 1
    else return (n * factorial(n - 1))
}

function calculateFactorialSum(n){
    var sum = 0;
    if (n < 0) return -1;
    for (let i = 1; i <= n; i++){
        sum += factorial(i);
    }
    return sum;
}

console.log(calculateFactorialSum(5));

module.exports = {
    calculateFactorialSum
}