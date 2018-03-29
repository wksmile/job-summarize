/* 题目描述： 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。  */

/* 思路：二叉树前序遍历第一个点为根节点，中序遍历顺序为先左子树然后根节点最后右子树。
所以先通过前序遍历找出根节点，然后将中序遍历分为左右子树两组，最后对于每个子树依次递归调用。*/

function reConstructBinaryTree(pre, vin) {
    if(pre.length==0 || vin.length==0) return null;
    var index = vin.indexOf(pre[0]);
    var left = vin.slice(0, index);  // 说明左子树元素数量为index
    var right = vin.slice(index+1);
    return {
        val: pre[0],
        //  这里使pre和vin的length一致
        left: reConstructBinaryTree(pre.slice(1,index+1), left),
        right: reConstructBinaryTree(pre.slice(index+1), right)
    }
}
// 2 4 7      4 7 2

/**********************测试*********************************/
var pre = [1,2,4,7,3,5,6,8];
var vin = [4,7,2,1,5,3,8,6];

console.log(reConstructBinaryTree(pre,vin));



