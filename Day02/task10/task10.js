function removeFalsyValues(array){
    var str = array.filter(Boolean);
    return str;
}

const array = [0, 1, false, true, "", "hello", null, undefined, NaN];
const filteredArray = removeFalsyValues(array);
console.log(filteredArray);

module.exports = {
    removeFalsyValues
}
