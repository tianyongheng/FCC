function truncate(str, num) {
  // Clear out that junk in your trunk
  var strArray = new Array;
  if(num>=str.length){
    return str;
  }else{
    if(num>=3){
  for(let i=0;i<num-3;i++){
    strArray[i]=str[i];
  }
  for(let j=num-3;j<num;j++){
    strArray[j]='.';
  }
  str = strArray.join('');
  return str;
    }else{
      for(let i=0;i<num;i++){
        strArray[i]=str[i];
      }
      str = strArray.join('');
      str = str+"...";
      return str;
    }
}
}

truncate("A-tisket a-tasket A green and yellow basket", 11);