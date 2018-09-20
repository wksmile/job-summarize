##### typeof运算符得到的类型？
```$xslt
   typeof undefined    // undefined
   typeof 'abc'        // string
   typeof 123          // number
   typeof true         // boolean
   typeof Symbol()     // symbol
   /****** typeof是只能区别上面的值类型，引用类型只能区分函数，Symbol是另外一种类型，可以用typeof来区分 ******/
   typeof console.log  // function
   typeof {}           // object
   typeof []           // object
   typeof null         // object
```
注意值除了new Function()返回'function'外，其他的通过构造函数构造函数String，Number,Boolean,Date,Error,Array,RegExp,Object等new出来的值typeof都是object。注意Symbol不是构造函数，不能用new运算符

##### 可能发生值类型转换？
+ 字符串拼接
+ ==运算符
+ if语句
+ 逻辑运算

    
    var b=100+'10'   // '10010'
    100 == '100'     // true
    0 == ' ' ==false  // true
    null == undefined // true
    if(b){....}
    if(''){}
    !window.abc       // true
    
!!100 可以看到输出true

为false的值: 0, NaN, '', null, undefined, false


##### 如何准确判断一个变量是数组类型
+ Array.isArray() // ES5支持


    function(o){
        return typeof o === "object" && Object.prototype.toString.call(o) === "[object Array]";
    }

    
##### 何时使用 === 何时使用 == 

if(obj.a == null){
    // 这里判断一个变量是否是null或空时用 ==
    // 这是jquery源码中推荐的写法，除了这里其他的全部用 ===
}

##### JS中有哪些内置函数？（不考虑浏览器环境，纯粹js）
Object, Array, Boolean, Number, String, Function, Date, RegExp, Error 

##### 函数声明提前，变量声明提前？
函数声明提前：函数名称和函数体均提前，即可以在声明一个Javascript函数之前调用。

变量声明提前：变量的初始化代码仍然在原来的位置，只是声明提前。

##### 请你讲一下闭包？
[闭包的概念及解决的问题](https://zhuanlan.zhihu.com/p/29157822)

[javascript垃圾回收](https://www.cnblogs.com/zhwl/p/4664604.html)

由于在JS中，变量的作用域属于函数作用域，在函数执行后作用域就会被清理、内存也随之回收，但是由于闭包是建立在一个函数内部的子函数，由于其可访问上级作用域的原因，即使上级函数执行完，作用域也不会随之销毁，这时的子函数——也就是闭包，便拥有了访问上级作用域中的变量的权限，即使上级函数执行完后作用域内的值也不会被销毁。

1. 权限访问其他函数作用域内的变量的一个函数。
2. 变量属于函数作用域
3. 作用域继承
4. 内存回收机制（标记清除和引用计数），引用计数循环引用手动切断循环myObj.element = null;
5. 应用：事件绑定的成功回调，函数内部返回函数

##### 如何理解作用域？
+ 自由变量（要去父作用域获取值）
+ 作用域链，即自由变量的查找
+ 闭包的两个场景（函数返回保存了函数定义作用域引入的变量以及for循环点击弹出对应的键值）

> this要在执行时才能确认值，定义时无法确认

##### 函数作用域和块级作用域的区别是什么？
函数作用域：变量在定义的函数内及嵌套的子函数内处处可见；原因：变量提升

块级函数域：变量在离开定义的块级代码后马上被回收。

##### jwt-token优点和缺点？
[JWT](https://www.cnblogs.com/yan7/p/7857833.html)

##### 回调函数，Promise,Generator,async/await三者的区别，以及为什么用Promise，然后又变成了async/await？

[Async/Await替代Promise的6个理由](https://cnodejs.org/topic/58e4914e43ee7e7106c13541)
1. 简介
2. 错误处理更全面，promise内部错误不能抛出来，而aync可以
3. 写法更自然，更像同步的语法
4. 更好的调试，async每一个异步就是一条语句

##### 判断数组的方法
1. Array.isArray函数
2. 不存在上面函数可以用Object.prototype.toString.call(arg) === '[object Array]'来判断

##### 如何理解getComputedStyle
+ getComputedStyle会获取当前元素所有最终使用的CSS属性值（最终计算后的结果），通过window.getComputedStyle等价于document.defaultView.getComputedStyle调用

+ 注意，如果元素的背景色透明，那么getComputedStyle获取出来的就是透明的这个背景（因为透明本身也是有效的），而不会是父节点的背景。所以它不一定是最终显示的颜色。

+ getComputedStyle会引起回流，因为它需要获取祖先节点的一些信息进行计算（譬如宽高等），所以用的时候慎用，回流会引起性能问题。然后合适的话会将话题引导回流，重绘，浏览器渲染原理等等。当然也可以列举一些其它会引发回流的操作，如offsetXXX，scrollXXX，clientXXX，currentStyle等等

##### appendchild和insertbefore有什么区别。
Node.appendChild() 方法将一个节点添加到指定父节点的子节点列表末尾。 

Node.insertBefore() 方法在参考节点之前插入一个节点作为一个指定父节点的子节点。

    var insertedElement = parentElement.insertBefore(newElement, referenceElement);
    // isertedElement 是被插入的节点，即 newElement
    // parentElement  是新插入节点的父节点
    // newElement 是被插入的节点
    // referenceElement 在插入newElement之前的那个节点

没有insertAfter方法，可以使用insertBefore和nextSibling来模拟

    if(referenceElement.nextSibling){
        parentDiv.insertBefore(sp1, referenceElement.nextSibling);
    } else {
        parentDiv.appendChild(spl);
    }

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
7. `44546.7675>>>0` // 无符号右移，44546将数字字符串返回整数部分，不是数字字符串返回0
8. `~~'675.6576'`   // 675

##### 怎么实现拖拽？

##### 手写 Object.create函数的ployfill

    Object.create = function(proto,propertiesObject){
        function F(){}
        F.prototype=proto
        return new F()
    }

[参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create)

##### 为什么false=={} // false; {}==false报错; [] == false // true

##### 知道数组的sort方法底层是什么排序方式吗？
插入排序和快速排序，数组长度小于等于 22 的用插入排序 InsertionSort，比22大的数组则使用快速排序 QuickSort。

##### 尾递归
[尾调用优化](http://www.ruanyifeng.com/blog/2015/04/tail-call.html)

尾调用：某个函数的最后一步是调用另一个函数。

尾递归：函数调用自身，称为递归。如果尾调用自身，就称为尾递归。

"尾调用优化"对递归操作意义重大，对于尾递归来说，由于只存在一个调用记录，所以永远不会发生"栈溢出"错误。ES6的尾调用优化只在严格模式下开启，正常模式是无效的。

尾递归的实现，往往需要改写递归函数，确保最后一步只调用自身。做到这一点的方法，就是把所有用到的内部变量改写成函数的参数。

##### 知道页面上某个点的坐标，如何获取该坐标上的所有元素
document.elementFromPoint(x,y)
返回dom节点

##### 为什么['1','2','3'].map(parseInt)返回[1,NaN,NaN]?
[参考](https://blog.csdn.net/u010703975/article/details/50261441)

##### 数组中哪些方法改变数组，哪些不改变
改变数组的方法： shift，unshift，pop，push，reverse，sort，splice
不改变数组方法： map,filter,forEach,some,every,concat,join,slice

和String对象方法做对比，string方法都不改变字符串

##### 怎么判断一个对象是否有环
[JS怎样判断一个对象是否存在"环"](https://segmentfault.com/q/1010000010856332/a-1020000010858170)

##### settimeout中this指向？
[谈谈setTimeout的作用域以及this的指向问题](https://www.cnblogs.com/hutaoer/p/3423782.html)

settimeout中回调函数中的this指向window,在严格模式下指向undefined

##### 为什么0.1+0.2不等于0.3
因为计算机不能精确表示0.1， 0.2这样的浮点数，计算时使用的是带有舍入误差的数

[为什么0.1+0.2不等于0.3](https://segmentfault.com/a/1190000012175422)

##### forEach,for in,for of的区别？
- forEach，循环数组，不能中断循环
- for-in，循环"enumerable"对象，包括原型，for-in更适合遍历对象
- for-of,遍历可迭代的对象的元素值

