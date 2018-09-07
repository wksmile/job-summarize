function test(a){
  this.a = a;
}

test.prototype.shuchu = function () {
  console.log('作用域绑定 '+this.a.value)
  console.log('testBind参数传递 ')
  console.log('调用参数传递 ')
}

var obj = {value:'ok'}
var fun_new = test.testBind(obj,{value:'also ok'})  // 这里是绑定bind时候传进去的参数
var after_new = new fun_new();
after_new.shuchu();

// bind函数完整实现
Function.prototype.testBind = function(that){
  var _this = this,
    slice = Array.prototype.slice,
    // 这里的参数是绑定时候传进来的参数
    args = slice.apply(arguments,[1]),
    fNOP = function () {},
    bound = function(){
      //这里的this指的是调用时候的环境，this相当于after_new
      return _this.apply(this instanceof  fNOP ?　this : that||window,
        // 这里的参数是执行返回后函数的参数，在绑定参数后面
        args.concat(Array.prototype.slice.apply(arguments,[0]))
      )
    }
  // 这里是当使用new运算符的时候继承原函数的原型链方法
  // 继承原来函数的原型
  fNOP.prototype = _this.prototype;
  bound.prototype = new fNOP();
  return bound;
}

// 完整实现参数传递测试
var test = function(a,b){
  console.log('作用域绑定 '+ this.value)
  console.log('testBind参数传递 '+ a.value2)
  console.log('调用参数传递 ' + b)
}
var obj = {value:'ok'}
var fun_new = test.testBind(obj,{value2:'also ok'})  // 这里是绑定bind时候传进去的参数
fun_new('hello bind')   // 这里是bind返回后调用传入参数
// 作用域绑定 ok
// testBind参数传递 also ok
// 调用参数传递  hello bind


/****************************************************************************************/
var lis = [1,2,3,4,5,56];

for(var i = 0; i < lis.length; i++) {
  lis[i].addEventListener('click', function(e) {
    alert(i);
  }, false)
}

// 以上不能正常打印索引，用一下三种方法
for(let i = 0; i < lis.length; i++) {
  lis[i].addEventListener('click', function(e) {
    alert(i);
  }, false)
}

for(var i = 0; i < lis.length; i++) {
  lis[i].addEventListener('click', function(i) {
    alert(i);
  }.bind(null, i), false)
}

for(var i = 0; i < lis.length; i++) {
  lis[i].addEventListener('click', (function(e) {
    alert(i);
  })(i), false)
}

/*******************************************************************************/
// 如果已经有三个promise,A，B,C怎么串行执行？

// promise
A.then(B).then(C).catch(...)

// async/await
(async ()=>{
  await a();
  await b();
  await c();
})()

// 如果是一个promise数组怎么串行执行
// promise
let prom = proms[0];
for(let i = 1; i < proms.length; i++) {
  prom = prom.then(proms[i]);
}
// async/await
(async ()=>{
  for(let i = 0; i < proms.length; i++) {
    await prom[i]();
  }
})()

/*****************************************************************************************/
// javascript实现对象的深拷贝
(function ($) {
    'use strict';
    var types = 'Array Object String Date RegExp Function Boolean Number Null Undefined'.split(' ');

    function type () {
        return Object.prototype.toString.call(this).slice(8, -1);
    }

    for (var i = types.length; i--;) {
        $['is' + types[i]] = (function (self) {
            return function (elem) {
                return type.call(elem) === self;
            };
        })(types[i]);
    }

    return $;
})(window.$ || (window.$ = {}));//类型判断

function copy (obj) {
    if ($.isFunction(obj)) {
        return new Function("return " + obj.toString())();
    } else if (obj === null || (typeof obj !== "object")) {
        return obj;
    } else {
        var name, target = $.isArray(obj) ? [] : {}, value;

        for (name in obj) {
            value = obj[name];
            // 循环引用
            if (value === obj) {
                continue;
            }
            if ($.isArray(value) || $.isObject(value)) {
                target[name] = copy(value,deep);
            } else if ($.isFunction(value)) {
                target[name] = new Function("return " + value.toString())();
            } else {
                target[name] = value;
            }
        }
        return target;
    }
}




