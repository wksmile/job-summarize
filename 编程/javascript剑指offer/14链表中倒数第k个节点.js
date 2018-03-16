// 题目：输入一个链表，输出该链表中倒数第k个结点。
// 思路：通过prev和tail来获取距离为k的一段，然后就tail指向链表最后，

// 查看剑指offer第15题

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

