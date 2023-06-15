function capitalizeWords(arr){
    const str = arr.split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    const final = str.join(' ')
    return final;
}

// const sentence = "the quick brown fox";
// const capitalizedSentence = capitalizeWords(sentence);
// console.log(`Capitalized sentence: ${capitalizedSentence}`);
