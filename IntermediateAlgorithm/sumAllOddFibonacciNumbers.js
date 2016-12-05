function sumFibs(num) {
  var arr = new Array;
  arr[0]=1;
  arr[1]=1;
  for(i=2;i<num;i++){
   arr[i]=arr[i-1]+arr[i-2];
  if(arr[i]>num){
    arr.pop();
    break;
  }
  }
  var newArr =arr.filter(function(num){
return num%2!==0;
  });
  console.log(newArr);
  var result = newArr.reduce(function(a,b){
return a+b;
  });
  return result;
}

sumFibs(4);