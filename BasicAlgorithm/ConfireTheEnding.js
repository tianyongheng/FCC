function confirmEnding(str, target) {
  for(var i = 0; i<target.length;i++){
  	if(str[str.length-target.length+i]!==target[i]){
  		break;
  	}
  }
  if(i==target.length){
  return true;
}else{
  return false;
}
}

confirmEnding("Bastian", "n");