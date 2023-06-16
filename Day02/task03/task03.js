function countVowels(str){
    var count = str.match(/[aeiouy]/gi).length
    return count;
}

const str = "Hello, World!";
const vowelCount = countVowels(str);
console.log(vowelCount);

module.exports = {
    countVowels
}
