 /*
 *[参考链接](https://www.cnblogs.com/dushao/p/6004883.html)
  */

/*冒泡排序*/
// 两两比较相邻记录的关键字，如果反序则交换，直到没有反序为止
// 时间复杂度 O(n2)/2
 function bubbleSort(arr) {
   var len = arr.length,
     flag = true;
   for(var i=0;i<len && flag;i++){
     for(var j=0;j<len-i-1;j++){
       flag = false
       if(arr[j]>arr[j+1]){
         var temp = arr[j];
         arr[j]=arr[j+1]
         arr[j+1]=temp;
         flag=true
       }
     }
   }
   return arr;
 }
// console.log(bubbleSort([9,1,5,8,3,7,4,6,2]));


 /**选择排序**/
 // 在时间复杂度上表现最稳定的排序算法之一，因为无论什么数据进去都是O(n²)的时间复杂度。。。所以用到它的时候，数据规模越小越好。唯一的好处可能就是不占用额外的内存空间了吧。
// 时间复杂度 O(n2)/2
// 每次选出最小的值放在前面
 function selectionSort(arr) {
   var len = arr.length,
     minIndex=0,temp;
   for(var i=0;i<len-1;i++){
     minIndex=i;
     for(var j=i+1;j<len;j++){
       if(arr[j]<arr[minIndex]){
         minIndex=j
       }
     }
     temp=arr[i]
     arr[i]=arr[minIndex]
     arr[minIndex]=temp
   }
   return arr
 }
 // console.log(selectionSort([9,1,5,8,3,7,4,6,2]));


/**插入排序**/
// O(n2)/4
function insertionSort(arr) {
  var len=arr.length,
    preIndex,current;
  for(var i=1;i<len;i++){
    preIndex=i-1;
    current=arr[i];
    // 当current小于前面一个数，将curent的前面所有数与curent比较（注意此时current左边已经排好序），找出current应该放的位置，然后放在适合的位置
    while(preIndex>=0 && arr[preIndex]>current){
      arr[preIndex+1] = arr[preIndex]
      preIndex--
    }
    // 将current放在适合的位置
    arr[preIndex+1] = current
  }
  return arr;
}
//  console.log(insertionSort([9,1,5,8,3,7,4,6,2]));


 // 希尔排序
 /*希尔排序是插入排序的一种更高效率的实现。希尔排序的核心在于间隔序列的设定。*/
 function shellSort(arr) {
   var len = arr.length,
     temp,
     gap = 1;
   while(gap < len/3) {          //动态定义间隔序列
     gap =gap*3+1;
   }
   for (gap; gap> 0; gap = Math.floor(gap/3)) {
     for (var i = gap; i < len; i++) {
       temp = arr[i];
       for (var j = i-gap; j > 0 && arr[j]> temp; j-=gap) {
         arr[j+gap] = arr[j];
       }
       arr[j+gap] = temp;
     }
   }
   return arr;
 }

/*归并排序*/
function mergeSort(arr) {
   var len=arr.length;
   if(len<2) return;
   var midIndex = Math.floor(len/2),
   left=arr.slice(0,midIndex),
   right=arr.slice(midIndex);
   return merge(mergeSort(left),mergeSort(right));
 }

 function merge(left, right) {
   var arr = [];
   while (left.length>0 && right.length>0) {
     if (left[0] <= right[0]) {
       arr.push(left.shift())
     } else {
       arr.push(right.shift())
     }
   }

   if (left.length==0) {
     arr.concat(right.slice(0))
   } else if (left.length==0){
     arr.concat(left.slice(0))
   }
   return arr;
 }
 // console.log(mergeSort([9,1,5,8,3,7,4,6,2]));


 /**快速排序**/
 // 在处理大数据量时最快的排序算法之一
 // [参考阮一峰](http://www.ruanyifeng.com/blog/2011/04/quicksort_in_javascript.html)
// arr [Array]
var quickSort = function (arr) {
  // 检查数组的元素个数，如果小于等于1，就返回。
   if(arr.length <= 1) return arr;
   // 选择"基准"（pivot），并将其与原数组分离，再定义两个空数组，用来存放一左一右的两个子集。
   var pivotIndex = Math.floor(arr.length/2);
   // pivot基准元素
   var pivot = arr.splice(pivotIndex,1)[0];
   var left = [];
   var right = [];
   // 开始遍历数组，小于"基准"的元素放入左边的子集，大于基准的元素放入右边的子集。
   for(var i=0;i<arr.length;i++){
     if(arr[i]<pivot){
       left.push(arr[i]);
     } else {
       right.push(arr[i]);
     }
   }
   // 使用递归不断重复这个过程，就可以得到排序后的数组。
   return quickSort(left).concat([pivot],quickSort(right))
}


// 堆排序
// 堆排序可以说是一种利用堆的概念来排序的选择排序。分为两种方法：
 // 大顶堆：每个节点的值都大于或等于其子节点的值，在堆排序算法中用于升序排列
// 小顶堆：每个节点的值都小于或等于其子节点的值，在堆排序算法中用于降序排列
// O(nlogn)  不稳定

 var len;    //因为声明的多个函数都需要数据长度，所以把len设置成为全局变量

 function buildMaxHeap(arr) {   //建立大顶堆
   len = arr.length;
   for (var i = Math.floor(len/2); i &gt;= 0; i--) {
     heapify(arr, i);
   }
 }

 function heapify(arr, i) {     //堆调整
   var left = 2 * i + 1,
     right = 2 * i + 2,
     largest = i;

   if (left < len && arr[left] > arr[largest]) {
     largest = left;
   }

   if (right < len && arr[right] > arr[largest]) {
     largest = right;
   }

   if (largest != i) {
     swap(arr, i, largest);
     heapify(arr, largest);
   }
 }

 function swap(arr, i, j) {
   var temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
 }

 function heapSort(arr) {
   buildMaxHeap(arr);

   for (var i = arr.length-1; i > 0; i--) {
     swap(arr, 0, i);
     len--;
     heapify(arr, 0);
   }
   return arr;
 }



