function isPerfectSquare(x){
    var n = 1;
    while (x > 0){
        x = x - n;
        n = n + 2;
    }
    if (x == 0) return true;
    else return false;
}

const num1 = 16;
console.log(isPerfectSquare(num1));  // true

const num2 = 25;
console.log(isPerfectSquare(num2));  // true

const num3 = 10;
console.log(isPerfectSquare(num3));  // false

module.exports = {
    isPerfectSquare
}