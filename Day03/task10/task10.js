function convertToRoman(num){
    var digits = num.toString().split(''),
    key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
           "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
           "","I","II","III","IV","V","VI","VII","VIII","IX"],
    result = "",
    i = 3;
    while (i > 0){ i--;
        result = (key[+digits.pop() + (i * 10)] || "") + result;
    }
    return Array(+digits.join('') + 1).join("M") + result;
}

console.log(convertToRoman(9));

module.exports = {
    convertToRoman
}