/*
* 输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针指向任意一个节点），返回结果为复制后复杂链表的head。
* （注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）
* */

// 思路：将复杂链表分为头结点和剩余结点两部分，剩余部分采用递归方法。

function RandomListNode(x) {
    this.label = x;
    this.next = null;
    this.random = null;
}

function Clone(pHead) {
    if(!pHead) {
        return null;
    }
    var node = new RandomListNode(pHead.label);
    node.random = pHead.random;

    node.next = Clone(pHead.next);
    return node;
}