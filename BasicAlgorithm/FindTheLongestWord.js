function findLongestWord(str){
var strArray = str.split(' ');
for(let i=0;i<strArray.length-1;i++){
	if(strArray[i].length>strArray[i+1].length){
		strArray[i+1] = strArray[i];
	}
}
str = strArray[strArray.length-1];
return str.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");