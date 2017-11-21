function reorderOddEvent(array) {
    var currentNum;
    var loopMax = array.length;
    for(var i=0;i<loopMax;){
        currentNum = array[i];
        if(currentNum%2 === 0) {
            array.splice(i,1);
            array.push(currentNum);
            loopMax--;
            continue;
        };
        i++
    }
    return array;
}

var a = [4,6,8,9,4,3,4,5,6,7,-5];
console.log(reorderOddEvent(a));

// 第二种方法,两个指针法.此题可以将while后面的一个判断提取出来用一个函数参数传进去，让这类问题扩展
function reorderOddEvent1(array) {
    var pre,last,aLength = array.length;
    var current;
    pre = 0;
    last = aLength-1;
    while(pre < last) {
        // pre指针指向偶数
        while(pre<last && array[pre]%2 === 1){
            pre++
        }
        // last指针指向奇数
        while(pre<last && array[last]%2 === 0){
            last--
        }
        if(pre<last){
            current = array[last];
            array[last] = array[pre];
            array[pre] = current;
        }
    }
    return array;
}

var b = [4,6,8,9,4,3,4,5,6,7,-5,9,7,0];
console.log(reorderOddEvent1(b));
