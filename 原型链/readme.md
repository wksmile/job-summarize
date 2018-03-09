### 原型链
- 创建对象有几种方法
- 原型？构造函数？实例？原型链？
- instanceof的原理
- new运算符工作原理

##### new运算符运算的过程
+ 创建一个新对象
+ this指向这个新对象
+ 执行代码，即对this赋值
+ 返回this

##### 原型规则和实类
+ 所有的引用类型（对象，数组，函数，除了null）都具有对象特性，即可自由扩展属性
+ 所有的引用类型（对象，数组，函数，除了null）都有一个__proto__属性，属性值是一个普通对象
+ 所有**函数**，都有一个prototype属性，属性值也是一个普通对象
+ 所有的引用类型（数组，对象，函数），__proto__属性指向它的构造函数的prototype属性值
+ 当试图得到一个引用类型的某个属性时，如果这个引用类型本身没有这个属性，那么会去它的__proto__中寻找

    
    function Foo(name){this.name=name}
    Foo.prototype.alertname = function(){}
    var f=new Foo('kain')
    f.printName = function(){}
    f.toString()  // 要去f.__proto__.__proto__中查找

f.__proto__ === Foo.prototype                  // true         <br>
Foo.prototype.__proto__ === Object.prototype   // true         <br>
f.__proto__.__proto__===Object.prototype       // true         <br>

##### 循环对象自身的属性


    var item
    for (item in f) {  // 会得到自身属性以及原型链上属性
        if(f.hasOwnProperty(item)){}   // 只取得自身属性
    }

##### 创建对象的几种方法
    // 第一类:字面量
    var o1 = {name: 'kain'};
    var o11 = new Object({name: 'kain'});

    // 第二类：通过构造函数,使用new运算符操作函数
    var M = function(name){ this.name = name};
    var o2 = new M('kain');

    // 第三类o3.__proto__===P为true；
    var P = {name: 'o3'};
    var o3 = Object.create(P);

##### instanceof
- 指实例的__proto__对象是否等于该对象的原型或者原型链上的原型
    o2.__proto__.constructor === M 判断o2实例是否是由M构造函数生成

##### new运算符工作原理
TODO

##### 构造函数的扩展

var a={} 其实是 var a=new Onject()的语法糖             <br>
var a=[] => var a=new Array()                     <br>
function Foo(){}   => var Foo=new Function()      <br>

