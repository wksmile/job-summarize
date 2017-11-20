### 原型链
- 创建对象有几种方法
- 原型？构造函数？实例？原型链？
- instanceof的原理
- new运算符工作原理

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
