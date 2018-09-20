### 问题集锦
- KMP算法

### 算法类（阿里很重视）
- 排序，冒泡
- 堆栈，队列，链表。js的数组就具有堆栈和队列的特性
- 递归
- 波兰式和逆波兰式

> 阿里云，金融对算法要求比较高

##### 排序
 
- 快速排序：https://segmentfault.com/a/1190000009426421
- 选择排序：https://segmentfault.com/a/1190000009366805
- 希尔排序：https://segmentfault.com/a/1190000009461832

##### 堆栈，队列，链表
- https://juejin.im/entry/58759e79128fe1006b48cdfd

##### 递归
- https://segmentfault.com/a/1190000009857470

##### 波兰式和逆波兰式
- 理论：http://www.cnblogs.com/chenying99/p/3675876.html
- 源码：https://github.com/Tairraos/rpn.js/blob/master/rpn.js

##### 一个算法题，怎么找出连续子数组的最大和?

##### 面试技巧
- 若问题没懂可以问问面试官，可以请求提示
- 面试中能写多少是多少，尽量写，不懂可以再次请求面试官帮助。若确实不知道怎么写，要说出这个题目的原理和思路。

##### 平衡二叉树相关知识

##### 图论最短路径算法

##### 在n个乱序中查找第k大的数字
[参考博客方法三](http://blog.csdn.net/acceptyly/article/details/47838701)
 利用快速排序的思想，从数组S中随机找出一个元素X，把数组分为两部分Sa和Sb。Sa中的元素大于等于X，Sb中元素小于X。这时有两种情况：

1. Sa中元素的个数小于k，则Sb中的第k-|Sa|个元素即为第k大数；
2. Sa中元素的个数大于等于k，则返回Sa中的第k大数。

 利用快排的partion思想T(n)= 2T(n/2)+ O(1)时间复杂度为O(n)   
 该方法只有当我们可以修改输入的数组时可用，位于数组左边的k个数字就是最小的k个数字（但这k个数字不一定是排序的），位于第k个数右边的数字都比第k个数字大

##### 求最长公共子序列？

##### 遍历树，递归和非递归

##### 实现大数相加
[参考1](https://blog.csdn.net/u014150409/article/details/50984416)
[参考2](http://www.plqblog.com/views/article.php?id=29)

代码参考 `others.js`

##### js实现优先队列
[JavaScript队列、优先队列与循环队列](https://blog.csdn.net/q1056843325/article/details/53121917)



