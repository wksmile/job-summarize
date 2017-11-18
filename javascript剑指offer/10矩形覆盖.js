// 题目：我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？

function coverRange(n) {
    if(n === 1) return 1;
    if(n === 2) return 2;
    // return coverRange(n-1) + coverRange(n-2);   此方法可能造成很多的重复计算
    var n1 = 1;
    var n2 = 2;
    var result = 0;
    for(var i=3;i<=n;i++) {
        result = n1 + n2;
        n1 = n2;
        n2 = result;
    }
    return result;
}

/***************************测试*************************/

console.log(coverRange(5));
