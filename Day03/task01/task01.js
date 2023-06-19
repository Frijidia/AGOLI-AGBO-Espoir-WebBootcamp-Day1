function generateRandomPassword(n){
    var pass = '';
    var str = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 1; i <= n; i++) {
        var char = Math.floor(Math.random()
                    * str.length + 1);
        pass += str.charAt(char)
    }
    return pass;
}

const passwordLength = 10;
const randomPassword = generateRandomPassword(passwordLength);
console.log(randomPassword);

module.exports = {
	generateRandomPassword
}
