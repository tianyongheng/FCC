function updateInventory(arr1, arr2) {
  var object = new Object;
  for(let i = 0 ;i<arr1.length;i++){
    object[arr1[i][1]] = arr1[i][0];
  }
  for(let i= 0;i<arr2.length;i++){
    if(object.hasOwnProperty(arr2[i][1])){
      object[arr2[i][1]] = object[arr2[i][1]]+arr2[i][0];
    }else{
      object[arr2[i][1]]=arr2[i][0];
    }
  }
  var objectkeys = Object.keys(object);
  objectkeys.sort();
  var newarr = new Array;
  for(let i = 0;i<objectkeys.length;i++){
    newarr[i] = new Array;
    newarr[i][0] = object[objectkeys[i]];
    newarr[i][1] = objectkeys[i];
  }
    return newarr;
}
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) ;