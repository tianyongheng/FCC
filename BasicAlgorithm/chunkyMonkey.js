function chunk(arr, size) {
  	var num = parseInt(arr.length/size);
  	var newArr = new Array;
  	for(var i=0;i<num;i++){
  	 newArr[i]=new Array;
  		for(var j = 0;j<size;j++){
  			newArr[i][j] =arr[i*size+j]; 
  		}
  	}
  	if(arr.length%size!==0){
  	 newArr[num]= new Array;
  		for(var j=0;j<arr.length%size;j++){
  			newArr[num][j]=arr[num*size+j];
  		}
  		}
  	
  	arr = newArr;
  return arr;
}

chunk(["a", "b", "c", "d"], 2);