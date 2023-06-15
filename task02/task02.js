function isPrime(n){
    var result = 0;
    if (n == 1 || n == 0) return false
    for (var i = 0; i <= n; i++) {
        if (n % i == 0)
            result = result + 1
    }
    if (result == 2) return true
    else return false
}

// const number = 17;
// const isNumberPrime = isPrime(number);
// console.log(`Is ${number} prime? ${isNumberPrime}`);
