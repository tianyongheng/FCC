function mutation(arr) {
	arr[0]=arr[0].toLowerCase();
  	arr[1]=arr[1].toLowerCase();
  	var flag=0;
  	for(var i=0;i<arr[1].length;i++){
  		for(var j=0;j<arr[0].length;j++){
  			if(arr[1][i]==arr[0][j]){
  				flag++;
                break;
  			}
  		}
  		
  	}
  if(flag==arr[1].length){
  			return true;
  		}else{
  			return false;
  		}
}

mutation(["hello", "hey"]);