function fbonacci(n) {
    if(typeof n != 'number' || n<1 || n%1!=0) return;
    if(n===1) return 1;
    if(n===2) return 2;
    var n1=1,n2=2,result=0;
    for(var i=3;i<=n;i++){
        result = n1+n2;
        n1=n2;
        n2=result;
    }
    return result;
}

console.log(fbonacci(5));
