function where(arr, num) {
  arr.push(num);
  arr.sort(function(a,b){
    return a-b;
  })
  for(var i=0;i<arr.length;i++){
    if(arr[i]==num){
      break;
    }
  }
  // Find my place in this sorted array.
  return i;
}

where([40, 60], 50);