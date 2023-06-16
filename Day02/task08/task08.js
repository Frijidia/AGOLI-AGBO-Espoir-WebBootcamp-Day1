function countOccurrences(tab){
    var result = {};
	tab.forEach(function(elem){
		if(elem in result){
			result[elem] = result[elem]++;
		}
		else{
			result[elem] = 1;
		}
	});
	return result;
}

const array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const occurrences = countOccurrences(array);
console.log(occurrences);

module.exports = {
    countOccurrences
}
