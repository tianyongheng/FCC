function every(collection, pre) {
  // Is everyone being true?
  //console.log(Object.keys(collection[0]));
  var flag =0;
  for(let i = 0;i<collection.length;i++){
    for(let j=0;j<Object.keys(collection[i]).length;j++){
      if(pre === Object.keys(collection[i])[j]&&collection[i][pre]){
        flag++;
        break;
      }
    }
  }
  console.log(flag);
  if(flag===collection.length){
    return true;
  }else{
   return false;
  }
}

every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");