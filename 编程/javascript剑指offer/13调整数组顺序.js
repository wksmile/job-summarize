// 题目：输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。
// 思路：通过map函数，判断每个数组元素是否为偶数
// 其他方法参见剑指offer14
function reOrderArray(array) {
    var arr1=[],arr2=[];
    array.map(function (a) {
        return a%2===0?arr1.push(a):arr2.push(a);
    })
    return arr2.concat(arr1);
}

var a= [1,2,3,4,5,6,7,7,8,567,8,-7,-45]
console.log(reOrderArray(a));
