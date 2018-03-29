function debouncing(fn, delay) {
  var timer = null;
  // 可以访问timer的闭包,下一次调用时直接使用clear之后再开启一个定时器,执行函数,以此类推
  return function () {
    var context = this;
    var args = arguments;
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(context,args)
    },delay)
  }
}

// 节流
function throttle(delay, action) {
  var last = 0;
  return function () {
    var curr = +new Date()
    if(curr-last>delay){
      action.apply(this,arguments)
      last = curr
    }
  }
}










