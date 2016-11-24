function rot13(str) { 
	var string='';
	str = str.toUpperCase();
for(let i=0;i<str.length;i++){
	var num=str.charCodeAt(i);
	if(num>=65&&num<=90){
		if(num<78){
			num+=13;
		}else{
			num-=13;
		}
	}
	var char=String.fromCharCode(num);
	string+=char;
}
str=string;
  return str;
}
rot13("SERR PBQR PNZC");