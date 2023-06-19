function containsOnlyNumbers(str){
    return /^[0-9]+$/.test(str);
}

const str1 = "12345";
console.log(containsOnlyNumbers(str1)); // true
const str2 = "12A45";
console.log(containsOnlyNumbers(str2)); // false

module.exports = {
	containsOnlyNumbers
}
