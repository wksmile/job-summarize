// 根据前序遍历和后续遍历重建二叉树

function reconstructTree(pre, mid) {
    if(pre.length == 0 || mid.length == 0) return null;
    var root = pre[0];
    var rootIndexMid = mid.indexOf(root);
    var left = mid.slice(0,rootIndexMid);
    var right = mid.slice(rootIndexMid+1);
    return {
        val: root,
        left: reconstructTree(pre.slice(1,rootIndexMid+1),left),
        right: reconstructTree(pre.slice(rootIndexMid+1),right)
    }
}

var pre = [10,6,4,8,14,12,16];
var mid = [4,6,8,10,12,14,16];
