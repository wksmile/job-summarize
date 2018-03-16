// 题目：输入一个链表，反转链表后，输出链表的所有元素。
// 思路：通过prev固定反转后链表头，通过head来反转，通过next指向剩下的链表头部
// 两个指针来交换指向位置
function reverseList(head) {
    if(head == null || head.next == null) return head;
    var pre = null;
    var next = null;
    while(head != null){
        next = head.next;
        head.next = pre;
        pre = head;
        head = next
    }
    return pre;
}
