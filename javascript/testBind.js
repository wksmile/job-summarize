// 实现bind函数
Function.prototype.testBind = function(that){
  var _this = this,
    args = Array.prototype.slice.apply(arguments,[1]),
    FNOP = function () {},
    bound = function () {
    return _this.apply(this instanceof FNOP ? this : that||window,
      args.concat(Array.prototype.slice.apply(arguments,[0]))
    )
  }
  FNOP.prototype = _this.prototype;
  bound.prototype = new FNOP();
  return bound;
}

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


