/*
* 输入一颗二叉树和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。
* */

// 思路：判断当前结点是否是叶子结点，以及curtSum是否等于expectNumber。如果是，把当前路径保存在res结果中；

function findPath(root, expectNumber) {
    var result=[];
    if(root==null) return result;

    function dfs(root, current, path) {
        current += root.val;
        path.push(root.val)
        // 判断是一条路径，将路径加到path中去
        if(current==expectNumber && root.left==null && root.right == null) {
            result.push(path.slice(0))
        }
        if(root.left != null) {
            dfs(root.left,current,path)
        }
        if(root.right != null) {
            dfs(root.right, current, path)
        }
        // 不是一条路径则将返回重新开始计算
        path.pop()
    }

    dfs(root,0,[]);
    return result;
}