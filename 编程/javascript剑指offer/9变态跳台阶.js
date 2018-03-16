// 题目：一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
/*
* 思路：f(1)=1,f(2)=2，f(3)=1+f(2)+f(1)…
* f(3)可以这样考虑：分跳3(本身值直接+1)，跳1，跳2三种情况，跳1之后还剩f(3-1)种跳法，跳2之后
* 还有f(3-2)种跳法，所以f(3)可以等于这三种分法相加。类推f(n)=1+f(1)+f(2)+…+f(n-1)。
* */

function jumpFloorII(number) {
    if(number==0) return 0;
    if(number==1) return 1;
    if(number==2) return 2;
    var tmp = 0;
    while(number > 1) {
        tmp += jumpFloorII(number-1);
        number--;
    }
    return tmp+1;
}
