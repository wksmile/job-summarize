/*
* 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。
* 由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。
* */

// 思路：可以使用map数据结构，但因为牛客系统不识别es6，所以就使用对象来存储每个元素出现次数。

function MoreThanHalfNum_Solution(numbers) {
    var obj = {};
    var len = numbers.length;
    numbers.map(function (num) {
        if(obj[num]){
            obj[num]++
        } else {
            obj[num]=1;
        }
    })
    // 检查是否有数字个数超过总数的一半
    for (var i in obj) {
        if(obj[i] > Math.floor(len/2)) return i;
    }
    return 0;
}