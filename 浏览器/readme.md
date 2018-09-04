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



