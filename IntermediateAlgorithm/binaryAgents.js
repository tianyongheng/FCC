function binaryAgent(str) {
  var arr = str.split(' ');
  var newArr = arr.map(function(num){
    var sum = 0;
    for(let i=0;i<num.length;i++){
      sum =sum+num[i]*Math.pow(2,num.length-1-i);
    }
    return sum;
  });
 var newArr2 = newArr.map(function(num){
  return String.fromCharCode(num);
 });
  str = newArr2.join('');
  return str;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");