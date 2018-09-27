var compose = function (funcs) {
    var len = funcs.length,
        index = len;
    while(index--){
        if(typeof funcs[index] !== "function") throw new Error("the arguments is not a function");
    }
    return function (...args){
        var index = 0;
        var result = len ? funcs[index].call(this,args) : args[0];
        while (++index < len) {
            result = funcs[index].call(this,result);
        }
        return result;
    }
}


int countNum(int n){
    int count=0;
    while(n){
        ++count;
        n = (n-1) & n;
    }
    return count;
}

