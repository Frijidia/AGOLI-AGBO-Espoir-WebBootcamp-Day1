function isPalindrome(str){
    var re = /[\W_]/g;
    var lowStr = str.toLowerCase().replace(re, '');
    var len = lowStr.length;
    for (var i = 0; i < len/2; i++) {
        if (lowStr[i] !== lowStr[len - 1 - i])
            return false;
    }
    return true;
}

const str = "A man, a plan, a canal. Panama";
const isPalindromeString = isPalindrome(str);
console.log(`Is "${str}" a palindrome? ${isPalindromeString}`);
