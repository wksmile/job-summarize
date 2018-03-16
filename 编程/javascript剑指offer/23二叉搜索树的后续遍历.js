/*
*  题目：输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。
* */

/*
* 思路：后序遍历最后一个元素为根节点，所以先遍历，将数组分为小于根节点部分和大于根节点部分，然后比较这两个部分是否符合与根节点的大小关系。
* */

function verifySquenceOFBST(sequence) {
    if(sequence.length <= 0) return;
    return test(sequence,0,sequence.length-1)
}

// 数组，开始索引，结束索引
function test(sequence, start, end) {
    if(start >= end) return true;
    // 除去数组中最后一个根元素后最后一个索引
    var i = end - 1;
    // 将i定位到左右子树的分界处
    while(i >= start && sequence[i] > sequence[end]) {
        i--;
    }
    // 检查i的前面是否符合要求都小于最后的根元素
    for(var j=i;j>=start;j--) {
        if(sequence[j]>sequence[end]){
            return false;
        }
    }
    // 递归检查左右子树
    return test(sequence,start,i) && test(sequence,i+1,end-1);
}

console.log(verifySquenceOFBST([7,4,6,5]))