function getRandomNumber(min, max){
    if (min > max)
        throw 'The first argument must be larger than the second';
    else {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        return result;
    }
}

const min = 1;
const max = 10;
const randomNumber = getRandomNumber(min, max);
console.log(`Random number between ${min} and ${max}: ${randomNumber}`);
