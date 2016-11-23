function repeat(str, num) {
	var container="";
	for(let i=0;i<num;i++){
		container+=str;
	}
  return container;
}

repeat("abc", 3);