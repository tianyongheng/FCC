function spinalCase(str) {
  str = str.replace(/[\s\_\-]*([A-Z])/g,function($1,$2){
    $1 = '-';
    $2 = $1+$2.toLowerCase();
    return $2;
  });
  arr=str.split('');
  if(arr[0]=='-'){
  arr.shift();    
  }
  str=arr.join('');
  str = str.replace(/[\s]/g,'-');
  return str;
}
spinalCase('This Is Spinal Tap');