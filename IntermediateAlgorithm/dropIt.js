function drop(arr, func) {
  // Drop them elements.
  var result =arr.find(func);
  for(var i=0;i<arr.length;i++){
    if(arr[i]===result){
      break;
    }
  }
  for(let j =0 ;j<i;j++){
    arr.shift();
  }
  return arr;
}

drop([1, 2, 3], function(n) {return n < 3; });