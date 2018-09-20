function selectiSort(arr) {
    var len = arr.length,preIndex,current;
    for(var i=1;i<len;i++){
        preIndex = i-1;
        current=arr[i];
        while (preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex+1]=arr[preIndex];
            preIndex--;
        }
        arr[preIndex+1] = current;
    }
    return arr;
}

function insertionSort(arr) {
    var len=arr.length, preIndex,current;
    for(var i=1;i<len;i++){
        preIndex=i-1;
        current=arr[i];
        // 当current小于前面一个数，将curent的前面所有数与curent比较（注意此时current左边已经排好序），找出current应该放的位置，然后放在适合的位置
        while(preIndex>=0 && arr[preIndex]>current){
            arr[preIndex+1] = arr[preIndex];
            preIndex--;
        }
        // 将current放在适合的位置
        arr[preIndex+1] = current
    }
    return arr;
}