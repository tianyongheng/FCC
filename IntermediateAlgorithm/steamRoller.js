function steamroller(arr) {
  	var arrNew =new Array;
 	judement(arr);
 	function judement(arr){
  		if(Array.isArray(arr)){
    		for(let i = 0;i<arr.length;i++){
       			judement(arr[i]);
    		}
    	}else{
     		arrNew.push(arr);
    	}
    }
 	return arrNew;
 }

steamroller([1, [2], [3, [[4]]]]);