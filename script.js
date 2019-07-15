var arr = [0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1];
var arr1 = [0,0,1,1,1,1,0,1,1,1];

function compressArr(arr){
var sum_element = 1, z = 0, resultArr = [];
	for (var i=0; i<arr.length; i++){
		if(arr[i] === arr[i+1]){
			sum_element++;
		} else {
			resultArr[z] = sum_element;
			z++;
			sum_element=1;
		}
	}
	return resultArr;	
}

console.log(compressArr(arr));

