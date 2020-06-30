##### 浏览器兼容？遇到过哪些问题？
1. 不同浏览器的标签默认的外补丁和内补丁不同，CSS里加 *{margin:0;padding:0;}
2. 几个img标签放在一块，有些浏览器会有默认的间距，有通配符也不起作用，解决方案：使用float属性为img布局。备注：img标签是行内属性标签，只要不超出容器高度，img会排在一行里，使用float是比较好的选择
3. 背景透明度问题。
   IE８以下浏览器都不支持 opacity透明度设置。
   可以使用IE自带的“滤镜”来实现，使用filter:alpha(opacity=)来设置透明度。
   案例：设置div元素的背景。
4. box-sizing设置不同问题
5. 引入respond.js脚本，可以解决老版本浏览器能理解并执行媒体查询的css3指令。
6. reset.css重置不同浏览器初始的样式
   
[参考](https://zhuanlan.zhihu.com/p/25975404)   
[WEB前端开发人员须知的常见浏览器兼容问题及解决技巧](https://blog.csdn.net/xustart7720/article/details/73604651/)
[web前端面试题之 CSS浏览器兼容性](https://blog.csdn.net/Wz1135640/article/details/78192648)   
   
##### 浏览器怎么查看一个页面的回流和重绘
f12 timeline/performance 查看

##### BOM对象
Bom是浏览器对象。常用的Bom属性

1. location
2. history
3. Navigator

##### 端口号是什么意思，是真实存在还是虚拟的，端口号是无限的吗
一台服务器上搭载了多个web服务，为了区分所以使用了不同的端口号。端口号的范围从0到65535，是逻辑意义上的端口。
从0-1023端口固定分配给一些服务，从1024到65535端口不固定分配。

##### 搜索引擎的原理，数据从哪里去取，提示信息的原理
[搜索引擎的工作原理是什么](https://www.zhihu.com/question/19937854)

##### v8垃圾回收怎么样进行？
[浅谈Chrome V8引擎中的垃圾回收机制](https://www.cnblogs.com/liangdaye/p/4654734.html)

##### 前后端分离怎么做？
[实现前后端分离的心得](http://blog.jobbole.com/111624/)

[前后端分离实践](https://segmentfault.com/a/1190000009329474?_ea=2038402)

##### 哪些逻辑处理适合放在前端，哪些适合放在后端？
[前后端到底怎么分？（一段代码逻辑到底该放在前端还是后台？）](https://blog.csdn.net/qq_35120986/article/details/80947175)

##### localStorage的使用以及同源策略？
- localStorage受同源策略限制，iframe同源页面也可以互相访问，可以通过postMessage跨域通信解决跨域问题
- localStorage拓展了cookies的大小限制，可以达到5M，cookies一般为4k左右
- 所有浏览器会把localStorage限定为String类型，这个对于我们日常的类型需要一些装换，通过JSON.parse实现转换

[localStorage使用总结](https://www.cnblogs.com/st-leslie/p/5617130.html)
[localStorage跨域存储方式](https://www.jianshu.com/p/e86d92aeae69)

[浏览器同源政策及其规避方法](http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html)

##### 浏览器内核以及区别？
[参考](https://blog.csdn.net/weixin_38399962/article/details/80108079)
