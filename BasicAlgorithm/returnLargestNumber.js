function largestOfFour(arr) {
	var newArray = new Array;
	for(let i=0;i<arr.length;i++){
		arr[i].sort(function(a,b){
			return b-a;
		});
	newArray.push(arr[i][0]);
	}
	arr = newArray;
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);