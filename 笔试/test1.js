var jj = ['sd','rf','fdfv','rf','er','sd','fdfv','sd','sd','er'];


function getArrayNumber(arr) {
    var len = arr.length,
        result = {},
        value = ''
    for(var i=0;i<len;i++){
      value = arr[i];
      if(!result[value]) result[value]=[i];
      else result[value].push(i);
    }
    return result;
}

console.log(getArrayNumber(jj));

