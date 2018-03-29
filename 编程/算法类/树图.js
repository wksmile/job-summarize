
/* 将一个数组随机打乱
 * 参考  https://www.zhihu.com/question/68330851/answer/266506621
 * */
// 方法一：该方法不是完全随机打乱，所有元素大概率停留在自己初始位置。由于v8 在处理 sort 方法时，使用了插入排序和快排两种方案。当目标数组长度小于10时，使用插入排序；反之，使用快排。
function randomArray(arr) {
  return arr.sort(function(){ return 0.5 - Math.random() })
}

var arr=[];
for(var i=0;i<100;i++){
  arr[i]=i;
}

// test
// console.log(randomArray(arr));

// 方法二：洗牌算法。把这个函数定义在数组原型上
Array.prototype.shuffle = function () {
  var array = this;
  var m = array.length,
    t,  // 索引对应的元素
    i;  // i为索引
  while(m){
    i=Math.floor(Math.random()*m--);
    // 最后一个元素交换
    t=array[m];
    array[m]=array[i];
    array[i]=t;
  }
  return array;
}

/**********************************************************************************************/
// 字符串匹配KMP算法


/**********************************************************************************************/
// 二叉树遍历
// 递归 前序遍历，中序遍历和后续遍历只是改变处理的位置
//  [参考](https://github.com/LeuisKen/algorithm/blob/master/ch03/q1.md)

function preOrder(node){
  if(node){
    console.log(node.value);
    preOrder(node.leftChild);
    preOrder(node.rightChild);
  }
}

// 广度优先遍历
function levelOrderTraversal(node) {
  if(!node) {
    throw new Error('Empty Tree')
  }
  var que = []
  que.push(node)
  while(que.length !== 0) {
    node = que.shift()
    console.log(node.value)
    if(node.left) que.push(node.left)
    if(node.right) que.push(node.right)
  }
}

// 非递归先序遍历
var preOrderUnRecur = function(node) {
  if(node) {
    var stack = []
    stack.push(node)
    while(stack.length !== 0) {
      node = stack.pop()
      console.log(node.value)
      if(node.right) {
        stack.push(node.right)
      }
      if(node.left) {
        stack.push(node.left)
      }
    }
  }
}

// 非递归中序
var inOrderUnRecur = function(node) {
  if(node) {
    var stack = []
    while(stack.length !== 0 || node) {
      if(node) {
        stack.push(node)
        node = node.left
      } else {
        node = stack.pop()
        console.log(node.value)
        node = node.right
      }
    }
  }
}

// 非递归后续
var postOrderUnRecur1 = function(node) {
  if(node) {
    var s1 = []
    var s2 = []
    s1.push(node)
    while(s1.length !== 0) {
      node = s1.pop()
      s2.push(node)
      if(node.left) {
        s1.push(node.left)
      }
      if(node.right) {
        s1.push(node.right)
      }
    }
    while(s2.length !== 0) {
      console.log(s2.pop().value);
    }
  }
}

// 非递归后序(使用一个栈):
var postOrderUnRecur2 = function(node) {
  if(node) {
    var stack = []
    stack.push(node)
    var tmp = null
    while(stack.length !== 0) {
      tmp = stack[stack.length - 1]
      if(tmp.left && node !== tmp.left && node !== tmp.right) {
        stack.push(tmp.left)
      } else if(tmp.right && node !== tmp.right) {
        stack.push(tmp.right)
      } else {
        console.log(stack.pop().value)
        node = tmp
      }
    }
  }
}





