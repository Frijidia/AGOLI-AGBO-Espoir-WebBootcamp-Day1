function calculatePower(base, exponent){
    if (base == 0 && exponent == 0) return -1;
    var value = Math.pow(base, exponent);
    return value;
}

const base = 2;
const exponent = 3;
const result = calculatePower(base, exponent);
console.log(result);

module.exports = {
    calculatePower
}
