function capitalizeWords(arr){
    var re = /[\W_]/g;
    const str = arr.split(re);
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    for (var j = 0; j < str.length; j++){
        if (str[j] == ',')
            str[j] = '-';
    }
    //const final = str.join('-')
    return str;
}

const sentence = "the quick--brown-----fox";
const capitalizedSentence = capitalizeWords(sentence);
console.log(`Capitalized sentence: ${capitalizedSentence}`);
