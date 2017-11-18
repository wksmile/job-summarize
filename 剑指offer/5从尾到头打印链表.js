// 题目：从尾到头打印链表
// 遍历的顺序是从头到尾，输出的顺序是从尾到头，每经过一个节点的时候把该节点放到一个栈中，当遍历完整个链表后再从栈顶开始逐个输出节点的值

//  参考javascript剑指offer中的3
function printListreversingly(list) {
    var nodes = [];
    var pnode = list;
    while(pnode != null) {
        nodes.push(pnode);
        pnode = pnode.next;
    }
    while(nodes.length > 0) {
        pnode = nodes.pop();
        console.log('node value:', pnode.val);
    }
}

/******************************测试**************************/
var head2 = {
    val: 'ui',
    next: null
}

var head1 = {
    val: 'gh',
    next: head2
}

var head = {
    val: 'df',
    next: head1
}

console.log(printListreversingly(head));

///////////////////////////////////////////////////////////////////////////////////////
//   递归实现，递归本质上就是一个栈结构
function printListreversingly_recursively(list) {
    if(list != null) {
        if(list.next != null) {
            printListreversingly_recursively(list.next);
        }
        console.log('node value:', list.val);
    }
}

console.log(printListreversingly_recursively(head));
