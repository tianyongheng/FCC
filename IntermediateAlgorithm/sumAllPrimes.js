function sumPrimes(num) {
  var arr = new Array;
  tmp=0;
  for(let i=1;i<=num;i++){
    var flag = 0;
    for(let j=1;j<=num;j++){
      if(i%j==0){
        flag++;
        if(flag>2){
          break;
        }
      }
    }
    if(flag==2){
      arr[tmp]=i;
      tmp++;
    }
    
  }
  var result = arr.reduce(function(a,b){
    return a+b;
  });
  return result;
}