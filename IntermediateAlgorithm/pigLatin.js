	function translate(str) {
	var strarr = str.split('');
	if(strarr[0]=='a'||strarr[0]=='e'||strarr[0]=='i'||strarr[0]=='o'||strarr[0]=='u'){
		var str = str+"way";
		return str;
	}else{
			var str = moveTo(strarr);
			return str;
	}
function moveTo(strarr){
		if(strarr[0]=='a'||strarr[0]=='e'||strarr[0]=='i'||strarr[0]=='o'||strarr[0]=='u'){
			var str = strarr.join('');
			str = str+"ay";
			return str;
		}else{
			var tmp = strarr.shift();
			strarr.push(tmp);
			return moveTo(strarr);
		}
	}
	
}
translate("consonant");