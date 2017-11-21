// 题目：定义栈的数据结构，请在该类型中实现一个能够得到栈最小元素的min函数。
// 思路：通过数组来实现栈的功能
var result = [];
function push(node) {
    return result.push(node)
}

function pop() {
    return result.pop()
}

function top() {
    return result.length>0 ? result[result.length-1] : null
}

function min() {
    if(result.length == 0 || result == null) return;
    var min = result[0];
    result.map(function (a) {
        if(a<min){
            min = a;
        }
    })
    return min;
}
