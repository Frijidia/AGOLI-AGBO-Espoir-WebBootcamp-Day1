function findLargestElement(arr){
    if (arr. length == 0) return null
    return Math.max.apply(null, arr);
}

// const array = [5, 2, 9, 1, 7];
// const largestElement = findLargestElement(array);
// console.log(`The largest element in the array is: ${largestElement}`);
