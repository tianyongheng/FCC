function sym(args) {
  var tmp = new Array;
  for(let i=0;i<arguments.length;i++){
    tmp[i] =new Array;
    for(let j=0;j<arguments[i].length;j++){
      tmp[i][j]=arguments[i][j];
    }
  }
  tmp = tmp.map(function(a){
    var arr1 = new Array;
    var obj =new Object;
    for(let i=0;i<a.length;i++){
      if(!obj.hasOwnProperty(a[i])){
      obj[a[i]]='';
      arr1.push(a[i]);
      }
    }
    return arr1;
  });
  var newvar = tmp.reduce(function(a,b){
    var arr = new Array;
    var container = a.concat(b);
    for(let i=0;i<container.length;i++){
      let flag = 0;
      for(let j=0;j<container.length;j++){
        if(container[i]==container[j]){
          flag++;
        }
      }
      if(flag==1){
        arr.push(container[i]);
      }
    }
    return arr;
  });
  return newvar;
}
sym([1, 2, 3], [5, 2, 1, 4]);