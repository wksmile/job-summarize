// 题目描述：输入一个链表，从尾到头打印链表每个节点的值。
// 思路： 先将链表每个结点的值存入数组中，然后通过数组的reverse方法，即可从尾到头打印


function printListFromTailToHead(head) {
    var arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    return arr.reverse();
}

/************************************测试*************************************/

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

console.log(printListFromTailToHead(head));
