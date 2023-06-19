function findIntersection(array1, array2){
    return array1.filter(x => array2.includes(x));
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const result = findIntersection(array1, array2);
console.log(result);

module.exports = {
    findIntersection
}
