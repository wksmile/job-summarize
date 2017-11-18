function printToMaxOfNDigits1(n) {
    // 判断n是整数
    if(typeof n === 'number' && n%1 === 0 && n>0) {
        var maxNumber = parseInt('9'.toString().repeat(n));
        if(maxNumber < Number.MAX_VALUE) {
            for(var i=1; i<=maxNumber;i++){
                console.log(i);
            }
        }
    }
}

printToMaxOfNDigits1(7);