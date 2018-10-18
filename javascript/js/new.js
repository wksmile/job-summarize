// new关键字的底层实现原理
function _new(/* constructor, param, ... */) {
  // 将_new的参数列表转成数组类型。
  var args = [].slice.call(arguments);
  // 从参数列表中弹出第一个参数赋给constructor，同时args保留剩余的参数作为构造函数的参数。
  var constructor = args.shift();
  // 构造出context对象，这个对象的原型是constructor.prototype，这样一来context就被挂到了正确的原型链上面。因为通常原型链上会定义“类”的方法，所以这一步用来实现方法的挂载。
  var context = Object.create(constructor.prototype);
  // 这一步骤，实现了对构造函数内部代码的执行，通常是一些对象属性的初始化。例如this.name = name;之类的。所以这一步用来实现属性的定义和初始化。
  var result = constructor.apply(context, args);
  return (typeof result === 'object' && result != null) ? result : context;
}

var actor = _new(Person, "张三", 28);

/***************************************************************************************/
// js控制一次加载一张照片，加载完后再加载下一张
var obj=new Image();
obj.src="http://www.phpernote.com/uploadfiles/editor/201107240502201179.jpg";
obj.onload=function(){
    alert('图片的宽度为：'+obj.width+'；图片的高度为：'+obj.height);
    document.getElementById("mypic").innnerHTML="<img src='"+this.src+"' />";
}

// 或者
var obj=new Image();
obj.src="http://www.phpernote.com/uploadfiles/editor/201107240502201179.jpg";
obj.onreadystatechange = function(){
    if(this.readyState=="complete"){
        alert('图片的宽度为：'+obj.width+'；图片的高度为：'+obj.height);
        document.getElementById("mypic").innnerHTML="<img src='"+this.src+"' />";
    }
}

/**********************************************函数防抖和节流**************************************************************/
// 函数防抖及用例-----------------------模拟一段ajax请求
function ajax(content){
    console.log('ajax request' + content)
}

// 防抖函数
function debounce(fun, delay) {
    return function (args) {
        let that = this;
        let _args = args;
        clearTimeout(fun.id);
        fun.id = setTimeout(function () {
            fun.call(that,_args)
        },delay)
    }
}

let inputb = document.getElementById('debouce');

let debounceAjax = debounce(ajax,500);

inputb.addEventListener('keyup',function (e) {
    debounceAjax(e.target.value);
})

// 函数节流---------------不管事件触发多么频繁，总是按照我们设定的时间执行一次
function throttle(fun, delay) {
    let last,deferTimer;
    return function (args) {
        let that = this;
        let _args = arguments;
        let now = +new Date();
        if(last && now < last + delay) {
            clearTimeout(deferTimer)
            deferTimer = setTimeout(function () {
                last = now;
                fun.apply(that,_args)
            },delay)
        } else {
            last = now;
            fun.apply(that,_args)
        }
    }
}

let throttleAjax = throttle(ajax,1000);

let inputc = document.getElementById('throttle');
inputc.addEventListener('keyup',function (e) {
    throttleAjax(e.target.value);
})


