// 没考虑删除的节点不在链表中的情况    有问题，待考虑重写
function deleteNode(head, pToBeDeleted) {
    if(!head || !pToBeDeleted) return;
    // 要删除的不是尾节点
    if(pToBeDeleted.next != null) {
        var pNext = pToBeDeleted.next;
        pToBeDeleted.val = pNext.val;
        pToBeDeleted.next = pNext.next;
        delete pNext;
        pNext = null;
    } else if(head === pToBeDeleted) {   //  链表只有一个节点

    }
}
