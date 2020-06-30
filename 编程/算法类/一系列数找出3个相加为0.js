// 题目： 一系列数中找出三个相加为0的数，这些3个数
// 输入 : arr[] = {0, -1, 2, -3, 1},   输出： [ [0, -1, 1], [2, -3, 1]

/**
 * 思路:
 * 将数组排序，取三个指针，一个指针指向当前循环的索引i，一个指针为j=i+1, 一个指针为数组最后一个为k */
function findTriesZero(arr) {
    // 对数组进行排序
    arr = arr.sort( (a, b) => a-b)
    let len = arr.length
    // currentResult当前三个指针相加的值
    let j,k,currentResult
    let result = []
    for(let i=0; i<len; i++) {
      for(j=i+1, k=len-1; j<k;) {
        currentResult = arr[i] + arr[j] + arr[k]
        if(currentResult === 0) {
          result.push([arr[i], arr[j], arr[k]])
          k--
          j++
        } else if(currentResult > 0) {
          k--
        } else {
          j++
        }
      }
    }
    return result
  }
  
  let arr = [0, -1, 2, -3, 1]
  
  console.log(findTriesZero(arr))