**考点 、 不变应万变 、 题目到知识再到题目**

##### typeof运算符得到的类型？
```$xslt
   typeof undefined    // undefined
   typeof 'abc'        // string
   typeof 123          // number
   typeof true         // boolean
   /****** typeof是只能区别上面的值类型，引用类型只能区分函数 ******/
   typeof console.log  // function
   typeof {}           // object
   typeof []           // object
   typeof null         // object
```
注意值除了new Function()返回'function'外，其他的通过构造函数构造函数String，Number,Boolean,Date,Error,Array,RegExp,Object等new出来的值typeof都是object

##### 可能发生值类型转换？
+ 字符串拼接
+ ==运算符
+ if语句
+ 逻辑运算

    
    var b=100+'10'   // '10010'
    100 == '100'     // true
    0 == '' ==false  // true
    null == undefined // true
    if(b){....}
    if(''){}
    !window.abc       // true
    
!!100 可以看到输出true

为false的值: 0, NaN, '', null, undefined, false


##### 如何准确判断一个变量是数组类型
+ 用instanceof, arr instamceof Array,typeof不能判断出数组

    
##### 何时使用 === 何时使用 == 

if(obj.a == null){
    // 这里判断一个变量是否是null或空时用 ==
    // 这是jquery源码中推荐的写法，除了这里其他的全部用 ===
}

##### JS中有哪些内置函数？（不考虑浏览器环境，纯粹js）
Object, Array, Boolean, Number, String, Function, Date, RegExp, Error 

##### 如何理解JSON?
+ JSON只不过是一个js对象。JSON.stringfy(),JSON.parse()
+ JSON也是一种数据格式。包括的数据格式：number,boolean,string,null,array,object

##### 函数声明提前，变量声明提前？

##### 请你讲一下闭包？
[闭包的概念及解决的问题](https://zhuanlan.zhihu.com/p/29157822)

[javascript垃圾回收](https://www.cnblogs.com/zhwl/p/4664604.html)

由于在JS中，变量的作用域属于函数作用域，在函数执行后作用域就会被清理、内存也随之回收，但是由于闭包是建立在一个函数内部的子函数，由于其可访问上级作用域的原因，即使上级函数执行完，作用域也不会随之销毁，这时的子函数——也就是闭包，便拥有了访问上级作用域中的变量的权限，即使上级函数执行完后作用域内的值也不会被销毁。

1. 权限访问其他函数作用域内的变量的一个函数。
2. 变量属于函数作用域
3. 作用域继承
4. 内存回收机制（标记清除和引用计数）
5. 应用：事件绑定的成功回调，函数内部返回函数

##### 如何理解作用域？
+ 自由变量（要去父作用域获取值）
+ 作用域链，即自由变量的查找
+ 闭包的两个场景（函数返回保存了函数定义作用域引入的变量以及for循环点击弹出对应的键值）

> this要在执行时才能确认值，定义时无法确认

##### jwt-token优点和缺点？
[JWT](https://www.cnblogs.com/yan7/p/7857833.html)

##### 回调函数，Promise,async/await三者的区别，以及为什么用Promise，然后又变成了async/await？


##### cookies和session的区别？
1. cookie数据存放在客户的浏览器上，session数据放在服务器上。
2. cookie不是很安全，别人可以分析存放在本地的COOKIE并进行COOKIE欺骗
   考虑到安全应当使用session。
3. session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能
   考虑到减轻服务器性能方面，应当使用COOKIE。
4. 单个cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie。
5. 所以个人建议：
   将登陆信息等重要信息存放为SESSION
   其他信息如果需要保留，可以放在COOKIE中


##### 判断数组的方法
1. Array.isArray函数
2. 不存在上面函数可以用Object.prototype.toString.call(arg) === '[object Array]'来判断

##### 前端性能优化？
分为两个方向。从用户角度来看，一个是页面加载的很快，另一个是页面使用起来很流畅。因此，对性能优化的探索，我们可以分为页面加载时间跟页面运行效率两个方向来进行研究

服务器部分优化：
+ dns查询时间可以使用httpdns或是dns预加载，域名收敛等手段优化。
+ 建立连接的重点是长连接和链接复用，更好的是直接上http2。为了优化链接的环节，前端这里还需要对资源使用cdn，雪碧图，代码合并等手段。
+ 启用hsts，要求浏览器在之后的访问使用https，减少无谓的http跳转https，同时还可以防止ssl剥离攻击，提升安全性。

[参考](http://hpoenixf.com/web%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%EF%BC%88%E4%B8%80%EF%BC%89.html)

##### 如何理解getComputedStyle
+ getComputedStyle会获取当前元素所有最终使用的CSS属性值（最终计算后的结果），通过window.getComputedStyle等价于document.defaultView.getComputedStyle调用

+ 注意，如果元素的背景色透明，那么getComputedStyle获取出来的就是透明的这个背景（因为透明本身也是有效的），而不会是父节点的背景。所以它不一定是最终显示的颜色。

+ getComputedStyle会引起回流，因为它需要获取祖先节点的一些信息进行计算（譬如宽高等），所以用的时候慎用，回流会引起性能问题。然后合适的话会将话题引导回流，重绘，浏览器渲染原理等等。当然也可以列举一些其它会引发回流的操作，如offsetXXX，scrollXXX，clientXXX，currentStyle等等


上面两个方法都能检测ifames

###### 事件冒泡事件捕获？

##### appendchild和insertbefore有什么区别。
Node.appendChild() 方法将一个节点添加到指定父节点的子节点列表末尾。 

Node.insertBefore() 方法在参考节点之前插入一个节点作为一个指定父节点的子节点。

    var insertedElement = parentElement.insertBefore(newElement, referenceElement);
    // nsertedElement 是被插入的节点，即 newElement
    // parentElement  是新插入节点的父节点
    // newElement 是被插入的节点
    // referenceElement 在插入newElement之前的那个节点

没有insertAfter方法，可以使用insertBefore和nextSibling来模拟

    parentDiv.insertBefore(sp1, referenceElement.nextSibling);

##### ES6箭头函数和普通函数的区别？
1. 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。this对象的指向是可变的
2. 不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。因为箭头函数没有this，而是引用了外层的this
3. 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
4. 不可以使用yield命令，因此箭头函数不能用作 Generator 函数

##### 实现函数remove删除对象属性？（拷贝一个对象）
1. `delete object.property`
2. for循环新建一个对象，移除该属性
3. parse,stringify来移除属性

##### js实现map函数?
参考script.js文件

##### js中string和number之间类型转换？
**string转为number**
1. `parseInt("10.545djc")`  // 10
2. `parseFloat("10.54fgf")`  // 10.54
3. `+"1000.12"`    // 1000.12
4. `Math.floor("1000.01")` // 1000 向下取整
5. `Math.ceil(0.2)`    // 1 向上取整
5. `Math.round("4893.54")` // 4894 四舍五入
6. `Number("5.5")`   // 5.5
7. `44546.7675>>>0` // 44546将数字字符串返回整数部分，不是数字字符串返回0

##### 怎么实现拖拽？

##### 手写 Object.create函数的ployfill

##### TCP的可靠信道传输，拥塞避免流量控制

看完4-7
