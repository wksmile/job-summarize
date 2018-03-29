##### javascript数组去重？
1. set集合法

    var arr = [1,2,3,3,2]
    var arrset = new Set(arr)
    var arrNoAgain = Array.from(arrset)

[javascript数组去重](https://github.com/mqyqingfeng/Blog/issues/27)

2. 双重循环
3. indexof
4. sort排序后前后比较

##### eval是做什么用的，有什么安全问题?
**定义和用法**
1. eval() 函数可计算某个字符串，并执行其中的的 JavaScript 代码。

**特点和用途**
1. 通过eval()执行的代码包含在该次调用的执行环境中，因此被执行的代码具有与该执行环境相同的作用域链。eval()可以让写在函数里的代码运行在全局作用域中
2. 在eval()中创建的任何变量或函数都不会被提升，因为在解析代码的时候，它们被包含在一个字符串中；它们只在eval()执行的时候创建。

**安全问题**
1. eval不容易调试。用chromeDev等调试工具无法打断点调试，
2. 性能问题，通常比替代方法慢，因为它必须调用 JS 解释器
3. 引起XSS攻击

##### ajax跨域怎么做？
1. jsonp
2. CORS
3. 代理，请求本地，本地在请求跨域

##### js底层怎么实现的知道吗？

##### new关键字和不new有什么区别？
1. new关键字是用来申请内存的。

**当new一个对象实类的时候发生了什么new Foo()**
1. 一个继承自 Foo.prototype 的新对象被创建。
2. 使用指定的参数调用构造函数 Foo ，并将 this 绑定到新创建的对象。
3. 由构造函数返回的对象就是 new 表达式的结果。如果构造函数没有显式返回一个对象，则使用步骤1创建的对象。（一般情况下，构造函数不返回值，但是用户可以选择主动返回对象，来覆盖正常的对象创建步骤）

##### 谈谈this指针的指向问题？
[javascript的this指针](http://www.ruanyifeng.com/blog/2010/04/using_this_keyword_in_javascript.html)


