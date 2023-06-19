function findLongestWord(array){
    if (array == null) return null;
    return array.reduce((a, b) => a.length < b.length ? b : a, "");
}

const wordArray = ["cat", "elephant", "dog", "giraffe", "zebra"];
console.log(findLongestWord(wordArray));

module.exports = {
    findLongestWord
}