// 写一个函数，输入n，求斐波那契数列的第n项

function fibonacci(n){
    if(n<=0) return 0;
    if(n===1) return 1;
    var n1=0,n2=1;
    var result = 0;
    for(var i=2;i<=n;i++){
        result = n1+n2;
        n1=n2;
        n2=result;
    }
    return result;
}

console.log(fibonacci(6));
