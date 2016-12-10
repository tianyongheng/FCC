function checkCashRegister(price, cash, cid) {
  price = price*100;
  cash = cash*100;
  var change = Math.round(cash-price);
  var owncid = new Array;
  var object = new Object;
  var arr = new Array;
  var total =0 ;
  var output = new Array;
  object["PENNY"]=1;
  object["NICKEL"]=5;
  object["DIME"]=10;
  object["QUARTER"]=25;
  object["ONE"]=100;
  object["FIVE"]=500;
  object["TEN"]=1000;
  object["TWENTY"]=2000;
  object["ONE HUNDRED"]=10000;
  for(let i= 0 ;i<cid.length;i++){
    owncid[i]= new Array;
    owncid[i][0] = cid[i][0];
    owncid[i][1] = Math.round(cid[i][1]*100);
  }
   for(let i =owncid.length-1;i>=0;i--){
      var count = change/object[owncid[i][0]];
      if(count<1){
        count = 0;
      }else{
        count = Math.floor(count);
      }
      var fee = count * object[owncid[i][0]];
      if(fee>owncid[i][1]){
        fee =owncid[i][1];
      }
      change =change - fee;
      arr.push(fee);
    }
    var result = arr.reduce(function(a,b){
      return a+b;
    });
   for(let i =0 ;i<owncid.length;i++){
  total = total + owncid[i][1];
 }
    if(result!=(cash-price)){
      return "Insufficient Funds";
    }else{
      if(result == total){
        return "Closed";
      }else{
        var arr = arr.map(function(a){
          return a/100;
          });
        for(let i = 0;i<arr.length;i++){
          output[i] = new Array;
          output[i][0] = Object.keys(object)[arr.length-1-i];
          output[i][1] = arr[i];
        }
        output = output.filter(function(a){
          return a[1]>0;
        });
        return output;
      }
    }
}
checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
