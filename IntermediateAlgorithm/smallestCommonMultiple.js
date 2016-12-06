function smallestCommons(arr) {
  arr.sort(function(a,b){
      return a-b;
  });
  var newArr = new Array;
  for(let i = arr[0];i<=arr[arr.length-1];i++){
    newArr.push(i);
  }
  var result = newArr.reduce(function(a,b){
    var commom = commom(a,b);
    return a*b/commom;
    function commom(a,b){
      if(a%b==0){
        return b;
      }else{
        var tmp =a%b;
        a=b;
        b=tmp;
        return commom(a,b);
      }
    }

  });
  return result;
}