/*
* 有序数列的二分查找算法
* */

/*
* target 查找的元素
* arr    有序数组
* */

function binarySearch(target, arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = parseInt(start + (end - start) / 2);
        if (target == arr[mid]) {
            return mid;
        } else if (target > arr[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}
function birtSearch(target, arr) {
    var start = 0,
        end = arr.length-1;
    while(end>=start){
        mid = parseInt(start+(end-start)/2);
        if(arr[mid]===target) return mid;
        else if(target<arr[mid]) end = mid-1;
        else start = mid+1;
    }
    return -1;
}

