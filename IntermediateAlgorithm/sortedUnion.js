function unite(arr1, arr2, arr3) {
	var container = new Array;
	var arr = new Array;
	for(let i=0;i<arguments.length;i++){
		arr[i]=new Array;
		for(let j=0;j<arguments[i].length;j++){
			arr[i][j]=arguments[i][j];
		}
	}
	var arr = arr.reduce(function(a,b){
  	return a.concat(b);
  });
  for(let i=arr.length-1;i>=0;i--){
  	let flag=0;
  for(let j=0;j<i;j++){
  	if(arr[i]===arr[j]){
  		flag++;
  	}
  }
  if(flag==0){
  	container.unshift(arr[i]);
  }
  }
  return container;
}
unite([1, 3, 2], [1, [5]], [2, [4]])