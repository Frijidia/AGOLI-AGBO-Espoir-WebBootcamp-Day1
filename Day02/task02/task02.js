function isValidEmail(email){
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
}

const email1 = "example@example.com";
console.log(isValidEmail(email1));  // true

const email2 = "invalid_email.com";
console.log(isValidEmail(email2));  // false

module.exports = {
    isValidEmail
}
