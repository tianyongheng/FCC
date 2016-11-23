function palindrome(str){
var flag = 0;
var str = str.toLowerCase();
var string = str.match(/[0-9a-z]/g)};
for(let i=0; i<=Math.ceil((string.length-1)/2);i++){
if(string[i]==string[string.length-1-i]){
flag++;
}
if(flag == (Math.floor(string.length/2)+1)){
return true;
}else{
return false;
}
}
