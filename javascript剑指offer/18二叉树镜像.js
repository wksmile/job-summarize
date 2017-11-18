// 题目：操作给定的二叉树，将其变换为源二叉树的镜像
function mirror(root) {
    if(root == null) return;
    if(root.left == null && root.right == null) return;
    var tmp = root.left;
    root.left = root.right;
    root.right = tmp;
    mirror(root.left);
    mirror(root.right);
}
