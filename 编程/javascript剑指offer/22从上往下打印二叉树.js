// 题目：从上往下打印二叉树的每个节点，同层的节点从左至右打印
// 思路1：递归方法，按顺序从上往下，从左往右打印
function printFromTopToBottom(root) {
    if(root==null) return [];
    var result = [];
    result.push(root.val);
    function travel(root) {
        if(root.left==null && root.right==null) return;
        if(root.left!=null) result.push(root.left.val);
        if(root.right!=null) result.push(root.right.val);
        if(root.left != null) travel(root.left);
        if(root.right != null) travel(root.right);
    }
    travel(root);
    return result;
}

// 思路2：采用队列方法，先将根节点放入队列中，然后打印，接着将左右节点加入队列中
function printFromTopToBottom(root) {
    var queue = [];
    queue.push(root);
    var result = [];

    if(root == null) {
        return result;
    }

    while(queue.length) {
        var temp = queue.shift();
        result.push(temp.val);
        if(temp.left) {
            queue.push(temp.left);
        }
        if(temp.right) {
            queue.push(temp.right);
        }
    }
    return result;
}
