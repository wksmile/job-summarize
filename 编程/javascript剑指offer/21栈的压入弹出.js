/**
 * 输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。假设压入栈的所有数字均不相等。例如序列1,2,3,4,5是某栈的压入顺* 序，序列4,5,3,2,1是该压栈序列对应的一个弹出序列，但4,3,5,1,2就不可能是该压栈序列的弹出序列。（注意：这两个序列的长度是相等的）
 */
// 思路: 设置辅助栈，压入元素，判断栈顶元素是否等于出栈第一个，相同则出栈，不同则继续入栈
function isPopOrder(pushV, popV) {
    if(pushV.length !== popV.length) return false;
    var tmp = [];
    for(var i=0,j=0;i<pushV.length;i++){
        tmp.push(pushV[i]);
        while(tmp.length!=0 && tmp[tmp.length-1]===popV[j]){
            tmp.pop();
            j++;
        }
    }
    return tmp.length === 0;
}
