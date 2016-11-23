function reverseString(str) {
	var a ="";
	for(let i = str.length-1;i>=0;i--){
		a+=str[i];
	}
	str = a;
	return str;
}
reverseString("hello");