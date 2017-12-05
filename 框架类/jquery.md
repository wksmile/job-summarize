#### jQuery喜欢问的问题：

##### [jquery源码解读](http://www.cnblogs.com/aaronjs/p/3279314.html)

jQuery源码有没有看过，它的核心架构是什么？事件委托是怎么做的？插件机制是什么？
直接看jQuery看过源码的比较好的博客，不用直接去看源码，这样效率更高

<b>jquery的核心框架？</b>

> [浅谈jquery核心设计框架](https://www.cnblogs.com/onepixel/p/5097584.html)

<b>jquery事件委托是怎么做的</b>

> [javascript事件委托以及jQuery对事件委托的支持](http://blog.csdn.net/luanlouis/article/details/24009177)

<b>jquery插件机制</b>
[创建jQuery插件](https://gist.github.com/quexer/3619237)

- jQUery.extend(object)用于扩展jquery对象本身，用来在jquery命名空间上增加新函数。参数object即为用以扩展jquery对象
- jQuery.fn.extend(object):该方法用于给jQuery元素集来提供新的方法，因此通常用来制作插件

用到jQuery很可能用到模板引擎。jQuery的事件委托，事件代理，jQuery的延迟的delay方法

