// 最好的解法-------------------------------------------------
// 题目：输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。
// 思路：把一个整数减去1，再和原来的整数做与运算，会把该整数最右边的一个1变为0。那么一个整数的二进制表示中有多少个1，就可以进行多少次这样的操作。
function numberOf1(n){
    var count = 0;
    while(n){
        n = n&(n-1);
        count++
    }
    return count;
}

// 当为负数的时候存在死循环情况---------------------------------
// 每次将数右移一位，判断最右边一位与1的与运算是否为真，真说明最后一位为1，假说明为0
// 该解法中右移运算是否可以换算成除以2，因为除法的效率比位运算要低得多，所以尽量用位运算
function numberOf3(n){
    var count = 0;
    while(n) {
        if(n&1) count++;
        n = n >> 1;
    }
    return count;
}

// 常规解法，可以避免死循环----------------------------------
// 首先把n和1做与运算，判断n的最低位是不是为1，接着把1左移一位得到2，再和n做与运算判断n的次低位是不是。。。。
function numberOf4(n) {
    var count = 0;
    var flag = 1;
    while(flag) {
        if(n & flag) count++;
        flag = flag << 1;
    }
    return count;
}

/***********************测试***********************/
console.log('numberOf1',numberOf1(13));
console.log('numberOf3',numberOf3(13));
console.log('numberOf4',numberOf4(13));

// 如果是负数，对其进行为操作
function numberOf2(n) {
    if(n<0){
        n = n>>>0;
    }
    var res = n.toString(2);
    var count = 0;
    // var flag = 1;
    for(var i=0;i<res.length;i++){
        if(res[i]===1) {
            count++;
        }
    }
    return count;
}

/**********************测试**************/
console.log(numberOf2(2));

// 题目： 用一条语句判断一个整数是不是2的整数次方。   此方法负数不适用
function isTwo(n) {
    return n!==1 && (n&(n-1))==0;
}

console.log('isTwo:', isTwo(1));
