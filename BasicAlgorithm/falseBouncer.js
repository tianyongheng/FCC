function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var newArr = new Array;
  var m=0;
  for(var i=0;i<arr.length;i++){
  	
  	if(arr[i]){
  		newArr[m]=arr[i];
  		m++;
  	}
  	
  }
  arr = newArr;
  return arr;
}

bouncer([7, "ate", "", false, 9]);