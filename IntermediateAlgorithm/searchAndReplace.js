	function myReplace(str, before, after) {
			var Before=before.toLowerCase();
			if(Before!=before){
				afterarr = after.split('');
				afterarr[0]=afterarr[0].toUpperCase();
				after = afterarr.join('');
			}
			var	arr = str.split(' ');
			for(let i in arr){
				if(arr[i]==before){
					arr[i]=after;
				}
			}
			str = arr.join(' ');
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");