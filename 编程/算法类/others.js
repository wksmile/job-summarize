// a,b为数字字符串'30000000000000000000000000','91111111111111111111111111'
// 实现大数相加
function sumStrings(a,b){
  // res结果，c为进位
  var res='', c=0;
  // 转化为数组
  a = a.split('');
  b = b.split('');
  while (a.length || b.length || c){
    // ~~转化数字字符串为数字.这里如果a是空的数组，~~a.pop()为数字0，~表示取反操作
    c += ~~a.pop() + ~~b.pop();
    res = c % 10 + res;
    // 这里c为true或者false为进位，当为true时相加会转化为1，为false相加时转化为0
    c = c>9;
  }
  // 如果前面有多余的0去掉
  return res.replace(/^0+/,'');
}

// JavaScript实现大整数阶乘的解决方案
// [JavaScript实现大整数阶乘的解决方案](https://blog.csdn.net/juhaotian/article/details/48782337)
function f(n) {
  var a = [1];
  for (var i = 1; i <= n; i++) {
    for (var j = 0, c = 0; j < a.length || c != 0; j++) {
      var m = (j < a.length) ? (i * a[j] + c) : c;
      a[j] = m % 10;
      c = (m - a[j]) / 10;
    }
  }
  return a.reverse().join("");
}
console.log(f(1000));




