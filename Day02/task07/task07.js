function reverseWords(str){
    let rev = str.split(' ').reverse('').join(' ');
    return rev;
}

const sentence = "Hello, World!";
const reversedSentence = reverseWords(sentence);
console.log(reversedSentence);

module.exports = {
    reverseWords
}
