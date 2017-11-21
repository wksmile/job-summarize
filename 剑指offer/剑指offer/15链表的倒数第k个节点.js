function findKthToTail(list,k) {
    if(list == null || k <= 0) return null;   // 考虑链表为空或者k为0
    var pre=list,bhd=list;
    while(k-1>0){   //  考虑链表的长度小于k
        if(bhd.next != null){
            bhd = bhd.next;
        } else {
            return null;
        }
        k--;
    }
    while(bhd.next != null){
        pre = pre.next;
        bhd = bhd.next;
    }
    return pre;
}
