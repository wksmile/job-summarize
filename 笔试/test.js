var arr = [ 3, 51, 5, 80, 1, 45, 405, 167, 731, 8.9, 93, 3 ]


function quickMySort(arr){
    var len = arr.length;
    if(len<=1) return arr;
    var pivotIndex = Math.floor(len/2),
        left = [],
        right = [],
        pivot = arr.splice(pivotIndex,1)[0]
    for(var i=0;i<arr.length;i++){
        if(arr[i]>pivot){
            right.push(arr[i])
        } else {
            left.push(arr[i])
        }
    }
    return quickMySort(left).concat([pivot],quickMySort(right));
}


console.log(quickMySort(arr));
