 /*
 *[参考链接](https://www.cnblogs.com/dushao/p/6004883.html)
  */

/**冒泡排序**/
// 两两比较相邻记录的关键字，如果反序则交换，直到没有反序为止。
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


 /**希尔排序**/
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

