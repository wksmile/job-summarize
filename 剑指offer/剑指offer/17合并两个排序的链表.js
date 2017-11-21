function merge(list1, list2) {
    var pMergeHead;   //  寻找list1和list2中较小的值为下面的头结点
    if(list1 == null) return list2;
    if(list2 == null) return list1;
    if(list1.val < list2.val) {
        pMergeHead = list1;
        pMergeHead.next = merge(list1.next,list2);
    } else {
        pMergeHead = list2;
        pMergeHead.next = merge(list1,list2.next);
    }
    return pMergeHead;
}
