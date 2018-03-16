// 题目：实现函数doublePower(base, exponent)，求base的exponent次方，不得使用库函数，同时不需要考虑大数问题；base为number类型，exponent为整型
function doublePower(base, exponent) {
    if(typeof base !== 'number' || typeof exponent !== 'number') throw new Error('输入的参数应该是数字');
    var result = 1;
    if(exponent >= 0){   //  包括了0的0次方返回1
        for(var i = 0;i < exponent;i++) {
            result = result * base;
        }
    } else {
        try {
            if (base === 0) throw new Error('0的倒数无意义');
            var rp = -exponent;
            for(var i = 0;i < rp;i++) {
                result = result * base;
            }
            result = 1/result;
        } catch (e) {
            console.log('出错了',e);
        }
    }
    return result;
}

/***********************测试***********************/
console.log('doublePower', doublePower(3,32));

//  高效的解法，如果求32次方，32是16的平方 。。。。。

function doublePower2(base, exponent) {
    if(exponent == 0) return 1;
    if(exponent == 1) return base;
    var result = doublePower2(base, exponent >> 1);
    result *= result;
    if(exponent & 0x1 == 1) result *= base;
    return result;
}

console.log('doublePower', doublePower2(3,32));