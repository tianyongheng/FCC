function fearNotLetter(str) {
	var arr = new Array;
	for(let i = 0;i<str.length;i++){
		arr[i]=str.charCodeAt(i);
	}
	arr.sort(function(a,b){
		return a-b;
	});
	if((arr[arr.length-1]-arr[0]+1)==arr.length){
		return undefined;
	}else{
		var tmp = 0;
		for(let i =arr[0];i<arr[arr.length-1];i++){
			if(i!==arr[tmp]){
				var char = String.fromCharCode(i);
				return char;
			}
			tmp++;
		}
	}
}
fearNotLetter("adce");