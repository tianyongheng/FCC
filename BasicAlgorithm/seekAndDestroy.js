function destroyer(arr) {
	var newArr= new Array;
	var m=0;
 for(var i=0; i<arguments[0].length;i++){
 	var flag = 0;
  	for(var j=1;j<arguments.length;j++){
  		if(arguments[0][i]!==arguments[j]){
  			flag++;
  		}
  		if(flag==arguments.length-1){
  			newArr[m]=arguments[0][i];
          m++;
  		}
  	}
  }
  arr = newArr;
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);