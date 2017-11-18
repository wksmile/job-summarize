// 题目： 一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法

/*
*  思路： 跳1个台阶有一种方法，跳2个台阶可以有两种跳法，而跳3个台阶则就是跳一个台阶和跳2个台阶方法总和，
* */
function jumpFloor(number) {
    if(number == 1) return 1;
    if(number == 2) return 2;
    var n1 = 1;
    var n2 = 2;
    var result = 0;
    //  for循环会先进行一次条件比较
    for (var i = 3;i<=number; i++) {
        result = n1+n2;
        n1=n2;
        n2=result;
    }
    return result;
}

/**********************测试************************/
console.log(jumpFloor(5));
