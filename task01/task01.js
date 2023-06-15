function factorial(n){
    if (n < 0) return -1
    else if (n > 0 && n < 2) return 1
    else return (n * factorial(n - 1))
}

// const array = [1, 2, 3, 2, 4, 1, 5, 3];
// const uniqueArray = removeDuplicates(array);
// console.log("Array with duplicates:", array);
// console.log("Array without duplicates:", uniqueArray);