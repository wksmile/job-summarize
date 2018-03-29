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
    0 == ' ' ==false  // true
    null == undefined // true
    if(b){....}
    if(''){}
    !window.abc       // true
    
!!100 可以看到输出true

为false的值: 0, NaN, '', null, undefined, false, []


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


##### 判断数组的方法
1. Array.isArray函数
2. 不存在上面函数可以用Object.prototype.toString.call(arg) === '[object Array]'来判断

##### 前端性能优化？该题目请直接看现代前端技术解析P253
[参考](http://hpoenixf.com/web%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%EF%BC%88%E4%B8%80%EF%BC%89.html)
[参考](https://github.com/wksmile/blog/issues/3)

分为两个方向。从用户角度来看，一个是页面加载的很快，另一个是页面使用起来很流畅。因此，对性能优化的探索，我们可以分为页面加载时间跟页面运行效率两个方向来进行研究

**网络加载优化**
1. 减少http资源请求次数。合并静态资源，js,css代码，合并雪碧图
2. 减少http请求大小。减少没必要的图片，js,css,html代码，对文件进行压缩(gzip压缩传输内容)。
3. 将css，javascript放在外部文件中，避免用<style>,<script>标签直接引用。
4. 尽量避免空的src,href,也会请求
5. 为html指定Cache-Control或Expires。
    cache-control可以指定public和private.public表明响应可以被任何对象（包括：发送请求的客户端，代理服务器，等等）缓存。private表明响应只能被单个用户缓存，不能作为共享缓存（即代理服务器不能缓存它）。
6. 合理设置Etag和Last-Modified.
7. 减少页面重定向，会延长页面内容返回的时间
8. 使用静态资源分域存放来增加下载并行数。浏览器在同一时刻向同一域名请求下载资源是有限的。
9. 使用静态资源CDN来存储文件
10. 使用缓存的ajax
11. 减少cookies大小并进行cookies隔离
12. 使用异步js资源，script中增加defer和async
13. 避免使用css import引用加载javascript

**服务器部分优化**：
+ dns查询时间可以使用httpdns或是dns预加载，域名收敛等手段优化。
+ 建立连接的重点是长连接和链接复用，更好的是直接上http2。为了优化链接的环节，前端这里还需要对资源使用cdn，雪碧图，代码合并等手段。
+ 启用hsts，要求浏览器在之后的访问使用https，减少无谓的http跳转https，同时还可以防止ssl剥离攻击，提升安全性。

[参考](https://github.com/wy-ei/notebook/issues/34)
[参考](https://github.com/wksmile/blog/issues/3)
[参考](https://jinlong.github.io/2013/06/24/better-performance-with-requestanimationframe/)

**javascript代码优化**
1. 对于scroll和touchmove这类高频事件用debounce消抖或throttle节流（在underscore或lodash中可以找到这两个函数）。
2. 多个dom的插入删除移动考虑使用fragment，尽量减少dom操作（每次修改了 DOM 或者其样式之后都要进行 DOM树的构建，CSSOM 的重新计算，进而得到新的渲染树。）
3. 使用 requestAnimationFrame 来写动画
4. 使用 Web Worker 来处理复杂的计算
5. 避免在 scroll 或 touchmove 这类事件的回调中修改样式,会强制重新计算样式
6. CSS 选择器在匹配的时候是由右至左进行的，因此最后一个选择器常被称为关键选择器，因为最后一个选择越特殊，需要进行匹配的次数越少。
7. 合理处理脚本和样式表。css阻塞渲染，javascript阻塞文档解析

`will-change: transform;`或者 `transform: translateZ(0);`这样来将元素提升至单独的图层中。


##### CDN缓存
[参考](https://cloud.tencent.com/document/product/228/3236?!preview=true&lang=zh)

**CDN原理**：



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
7. `44546.7675>>>0` // 无符号右移，44546将数字字符串返回整数部分，不是数字字符串返回0

##### 怎么实现拖拽？

##### 手写 Object.create函数的ployfill

    Object.create=function(proto,propertiesObject){
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

