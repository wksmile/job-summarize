// 题目:给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。
// 当base为不能转化为数字的字符串时返回NaN
function power(base, exponent) {
    if(exponent === 0) return 0;
    // exponent可以输入为字符串类型的数字,但是为字符串时返回，防止返回默认的结果1
    if(isNaN(+exponent)) return;
    var result = 1;
    if(exponent>0) {
        for(var i=0;i<exponent;i++){
            result *= base;
        }
    } else {
        var absoluteExp = -exponent;
        for(var j=0;j<absoluteExp;j++){
            result *= base;
        }
        result = 1/result;
    }
    return result;
}

console.log(power('-3.8g','1'));
