// 题目：输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）
// 思路： 比较B是不是A的子树，B是不是A的右子树的子树，B是不是A的左子树的子树。如果根元素相同，则开始判断左子树和右子树

function sonTree(parent, son) {
  if(son == null ) return false
  if(parent == null) return true
  if(parent.val === son.val) {
    return sonTree(parent.left,son.left) && sonTree(parent.right,son.right)
  } else {
    return false
  }
}

function hasSubtree(pRoot1, pRoot2) {
  if(pRoot1==null || pRoot2==null) return false
  return hasSubtree(pRoot1,pRoot2) || hasSubtree(pRoot1.left,pRoot2) || hasSubtree(pRoot1.right,pRoot2)
}
