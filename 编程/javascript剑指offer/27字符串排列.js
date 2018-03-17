/*
* 输入一个字符串,按字典序打印出该字符串中字符的所有排列。例如输入字符串abc,
* 则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。
* */
// 思路：使用递归方法，n个元素的全排列 = （n-1） 个元素全排列 + 一个元素作为前缀。
//************************************不懂*******************

function Permutation(str) {
    var result = [];
    if(str.length <= 0) {
        return [];
    }
    var sortTemp = '';
    var arr = str.split('');
    result=sortString(arr,sortTemp,[]);
    return result;
}

function sortString(arr, sortTemp, result) {
    if(arr.length == 0) {
        result.push(sortTemp)
    } else {
        var isRepeat = {};
        for(var i = 0;i<arr.length;i++) {
            if(!isRepeat[arr[i]]) {
                var temp = arr.splice(i,1)[0];  // 取出第一个字符
                sortTemp += temp;
                sortString(arr,sortTemp,result);
                arr.splice(i,0,temp); // 补全
                sortTemp = sortTemp.slice(0,sortTemp.length-1)  // 清空
                isRepeat[temp] = true;
            }
        }
    }

}