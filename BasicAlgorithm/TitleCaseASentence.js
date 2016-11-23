function titleCase(str) {
	str = str.toLowerCase();
	var array = new Array;
	for(let i=0;i<str.length;i++){
		array[i]=str[i];
	}
	for(let j=0;j<array.length;j++){
		if(array[j]==" "){
			array[j+1]=array[j+1].toUpperCase();
		}
	}
	array[0]=array[0].toUpperCase();
  str = array.join('');
  return str;
}

titleCase("I'm a little tea pot");