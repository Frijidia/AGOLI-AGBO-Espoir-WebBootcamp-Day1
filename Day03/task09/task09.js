function checkAnagrams(string1, string2){
    if (string1.length != string2.length) return false
    let str1 = string1.split('').sort().join('');
    let str2 = string2.split('').sort().join('');
    if (str1 == str2) return true;
    else return false;
}

const string1 = "listen";
const string2 = "silent";
console.log(checkAnagrams(string1, string2));

module.exports = {
    checkAnagrams
}