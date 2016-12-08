function add() {
  if(arguments.length===1&&typeof(arguments[0])==="number"){
    var x = arguments[0];
    return function(y) {
      if(typeof(y)==="number"){
        return x + y;
      }else{
        return undefined;
      }
    };
  }else if(arguments.length===1&&typeof(arguments[0])!=="number"){
    return undefined;
  }else{
    var flag = 0;
    for(let i = 0;i<arguments.length;i++){
      if(typeof(arguments[i])!=="number"){
        break;
      }else{
        flag++;
      }
    }
    if(flag===arguments.length){
      return arguments[0]+arguments[1];
    }else{
      return undefined;
    }
  }
}
add(2,3);