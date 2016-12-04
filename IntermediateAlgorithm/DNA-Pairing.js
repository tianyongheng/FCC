	function pair(str) {
		var arr = new Array;
		var Arr = [["A","T"],["C","G"],["G","C"],["T","A"]];
		for(let i =0;i<str.length;i++){
			
			if(str[i]=="A"){
				arr.push(Arr[0]);
			}else if(str[i]=="C"){
				arr.push(Arr[1]);
			}else if(str[i]=="G"){
				arr.push(Arr[2]);
			}else{
				arr.push(Arr[3]);
			}
		}
  return arr;
}

pair("GCG");