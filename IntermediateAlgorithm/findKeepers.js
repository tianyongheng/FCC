function find(arr, func) {
  var newarr = arr.filter(func);
  if(newarr.length==0){
    return undefined;
  }else{
  return newarr[0];
  }
}
find([1, 2, 3, 4], function(num){ return num % 2 === 0; });