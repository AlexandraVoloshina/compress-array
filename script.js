var arr = [0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1];
var arr1 = [0,0,1,1,1,1,0,1,1,1];

function compressArr(arr){
var resultArr = [arr.length];
  while(arr.length > 1){
    if(arr[arr.length - 1] !== arr[arr.length - 2]){
      resultArr[0] = resultArr[0] - (arr.length-1);
      arr.length--;
      resultArr.unshift(arr.length);
    } else {
      arr.length--;
      continue;
    }
  }
  return resultArr;
}
console.log(compressArr(arr));