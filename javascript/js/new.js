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
obj.onreadystatechange=function(){
    if(this.readyState=="complete"){
        alert('图片的宽度为：'+obj.width+'；图片的高度为：'+obj.height);
        document.getElementById("mypic").innnerHTML="<img src='"+this.src+"' />";
    }
}



