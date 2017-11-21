// 题目：输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。
// 思路：两个指针分别指向链表元素，然后比较两个元素大小，小的则连到合成后链表，直到达到一个链表的末尾。然后如果哪一个链表还有元素，直接连到合成后链表后面即可。

function ListNode(x) {
    this.val = x;
    this.next = null;
}

function merge(head1, head2) {
    var head = new ListNode(0);
    var pHead = head;
    while(pHead1 != null && pHead2!=null){
        if(pHead1.val>=pHead2.val){
            head.next = pHead2;
            pHead2=pHead2.next;
        } else {
            head.next = pHead1;
            pHead1 = pHead1.next;
        }
        head = head.next;
    }
    if(pHead != null){
        head.next = pHead;
    }
    if(pHead2 != null){
        head.next = pHead2
    }
    return pHead.next;
}
