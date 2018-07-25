[jquery源码解读](http://www.cnblogs.com/aaronjs/p/3279314.html)

直接看jQuery看过源码的比较好的博客，不用直接去看源码，这样效率更高

##### jquery的核心框架？

> [浅谈jquery核心设计框架](https://www.cnblogs.com/onepixel/p/5097584.html)

##### jquery事件委托是怎么做的

> [javascript事件委托以及jQuery对事件委托的支持](http://blog.csdn.net/luanlouis/article/details/24009177)

好处：比较合适动态元素的绑定，新添加的子元素也会有监听函数，也可以有事件触发机制。

##### jquery插件机制
[创建jQuery插件](https://gist.github.com/quexer/3619237)

- jQUery.extend(object)用于扩展jquery对象本身，用来在jquery命名空间上增加新函数。参数object即为用以扩展jquery对象
- jQuery.fn.extend(object):该方法用于给jQuery元素集来提供新的方法，因此通常用来制作插件

用到jQuery很可能用到模板引擎。jQuery的事件委托，事件代理，jQuery的延迟的delay方法

JQuery的通知插件

##### jquery绑定事件的几种方式？
[jQuery绑定事件的四种方式](https://www.jianshu.com/p/14977cecf7e5)

1. bind(type,[data],fn)。bind的特点就是会把监听器绑定到目标元素上，有一个绑一个。还有一个简写的方式a.click(fn),作用同bind.

2. live(type,[data],fn)。live方法把监听器绑定到document上。利用事件委托。（已废弃），使用delegate。

3. delegate(selector,type,[data],fn)。参数多了一个selector，用来指定触发事件的目标元素，监听器将被绑定在调用此方法的元素上

4. on(type,[selectot],[data],fn)。其他的都是调用on方法，所以尽量使用on方法。



