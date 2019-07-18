var arr = [0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1];
var arr1 = [0,0,1,1,1,1,0,1,1,1];

function compressArr(arr){
var resultArr = [];
  var i= 0;
  while(arr.length > 0){
  	if(arr[i] === arr[i+1]){
  		i++;
  		continue;
  	}
  		else {
  			resultArr.push(arr.splice(0, i+1).length);
  		i=0;
  		}
  	}
  return resultArr; 
}
console.log(compressArr(arr));