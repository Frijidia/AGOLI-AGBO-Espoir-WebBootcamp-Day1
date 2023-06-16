function removeDuplicates(arr) {
    var newArr = arr.filter((x, i) => arr.indexOf(x) === i)
    return newArr;
}

// const array = [1, 2, 3, 2, 4, 1, 5, 3];
// const uniqueArray = removeDuplicates(array);
// console.log("Array with duplicates:", array);
// console.log("Array without duplicates:", uniqueArray);
