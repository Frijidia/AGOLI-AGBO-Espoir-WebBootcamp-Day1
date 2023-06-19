function isValidPassword(password){
    if (password.length < 8) return false;
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    if(password.match(lowerCaseLetters) &&
    (password.match(upperCaseLetters)) &&
    password.match(numbers)) return true;
    else return false;
}

const password = "MyPassword123@";
const isValid = isValidPassword(password);
console.log(isValid);//true

module.exports = {
    isValidPassword
}
