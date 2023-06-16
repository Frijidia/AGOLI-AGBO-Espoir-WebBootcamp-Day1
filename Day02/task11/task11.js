function calculateProduct(array){
    let pro = 1;
    pro = array.reduce((a, b) => a * b, 1);
    return pro;

}

const numbers = [2, 3, 4, 5];
const product = calculateProduct(numbers);
console.log(product);

module.exports = {
    calculateProduct
}
