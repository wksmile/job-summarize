/*
*  输入n个整数，找出其中最小的K个数。例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4,。
* */

// 思路：先排序，然后slice()即可

function GetLeastNumebr_Solution(input, k) {
    if(k>input.length) return [];
    input.sort(function (a, b) {
        return a-b;
    })

    return input.slice(0,k);
}

/***************************test**************************/

console.log(GetLeastNumebr_Solution([4,5,1,6,2,7,3,8],4));
