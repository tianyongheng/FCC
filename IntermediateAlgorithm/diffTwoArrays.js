function diff(arr1, arr2) {
  var newArr = [];
  newArr = mydiff(arr1,arr2);
  var newArr = newArr.concat(mydiff(arr2,arr1));
 function mydiff(arr1,arr2){
 	var newArr = new Array;
 	var m=0;
 	for(var x of arr1){
 		var flag=0;
 		for(var y of arr2){
 			if(x!==y){
 				flag++;
 			}
 		}
 		if(flag==arr2.length){
 			newArr[m]=x;
 			m++;
 		}
 	}
 	return newArr;
 }
  return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);