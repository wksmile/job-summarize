// javascript全排列
// [参考](https://helloworlderly.github.io/HelloWorld_Blog/2016/07/19/%E5%85%A8%E6%8E%92%E5%88%97%E7%AE%97%E6%B3%95JavaScript%E5%AE%9E%E7%8E%B0/)
function permutations(string) {
  var result=[];
  if(string.length===1){
    return [string]
  }else{
    var preResult=permutations(string.slice(1));
    for (var j = 0; j < preResult.length; j++) {
      for (var k = 0; k < preResult[j].length+1; k++) {
        var temp = preResult[j].slice(0,k)+string[0]+preResult[j].slice(k);
        result.push(temp);
      }
    }
    return unique(result);
  }
}

// 去重 如果给的字符串内有相同的字符
function unique(arr) {
  var ret = []
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i]
    if (ret.indexOf(item) === -1) {
      ret.push(item)
    }
  }
  return ret
}

/*
* 给定一个数字字符串，输出组成这个字符串的每个数字的所有组合中，比当前数字大的下一个数字。
 举例：对于输入“113”，它的所有不重复的排列组合为“113”，“131”，“311”，那么其中比当前数字大的下一个数字为“131”，所以输出为“131”。
* */
function nextBiggerNumber(num) {
  var numArr = String(num).split(''),
    cache = [],i=2,current,maxNum;
  var strLen = numArr.length;
  if(num%1!==0) throw new Error('your number is not a interger number');
  if(strLen<2) return num;
  for(;i<strLen;i++){
    cache = numArr.slice(strLen-i).sort();
    current = numArr[strLen-i];
    if(cache[i-1] != current){

    }
  }
}






