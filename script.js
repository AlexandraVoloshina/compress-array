var arr = [0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1];
var arr1 = [0,0,1,1,1,1,0,1,1,1];

var resultArr = [];
var k_1 = 0;
var k_2 = 0;
for (var i = 0; i < arr.length ; i++) {
	if (arr[i] === 1) {
		if (k_2) {
			resultArr.push(k_2);
		}
		k_1 ++;
		k_2 = 0;
	}
	if(arr[i] === 0) {
		if (k_1) {
			resultArr.push(k_1);
		}
		k_2++;
		k_1 = 0;
	}		
}
if (k_1) {
	resultArr.push(k_1);
}
if (k_2) {
	resultArr.push(k_2);
}
console.log(resultArr);
