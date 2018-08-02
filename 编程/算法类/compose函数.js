/**
 请手动实现一个compose函数，满足以下功能：
  
 var arr = [func1, func2, func3];
 function func1 (ctx, next) {
  ctx.index++
  next();
}
 function func2 (ctx, next) {
  setTimeout(function() {
    ctx.index++
    next();
  });
}
 function func3 (ctx, next) {
  console.log(ctx.index);
}
  
 compose(arr)({index: 0}); 
  
 // out: 2
  
 **/

var compose = function(...args) {
    var len = args.length
    var count = len - 1
    var result
    return function f1(...args1) {
        result = args[count].apply(this, args1)
        if (count <= 0) {
            count = len - 1
            return result
        } else {
            count--
            return f1.call(null, result)
        }
    }
}

function func1 (ctx) {
    return ++ctx.index;

}
function func2 (ctx) {
    return ++ctx;

}
function func3 (ctx) {
    console.log(ctx);
}

compose(func3,func2,func1)({index : 1});

/******************************************************************************************************************/
// 有问题，待改进



