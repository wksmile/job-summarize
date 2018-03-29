# 面试题
[连接](https://segmentfault.com/a/1190000011635556)

## 面试技巧
- 知识面要广
- 理解要深刻（比如了解浏览器的特性，了解js引擎）
- 内心要诚实
- 态度要谦虚
- 回答要灵活
- 要学会赞美

#### 面试模拟
- 渲染机制
- js运行机制
- 页面性能
- 错误监控

## 渲染机制

- 什么是DOCTYPE及作用
- 浏览器渲染过程？输入url后的流程？
- 什么叫浏览器的Reflow?
- 设么叫Repaint?
- 布局Layout?
    
##### 什么是DOCTYPE及作用？
1. <!DOCTYPE> 声明位于文档中的最前面，处于 <html> 标签之前。告知浏览器以何种模式来渲染文档。 
2. 严格模式的排版和 JS 运作模式是  以该浏览器支持的最高标准运行。
3. 在混杂模式中，页面以宽松的向后兼容的方式显示。模拟老式浏览器的行为以防止站点无法工作。
4. DOCTYPE不存在或格式不正确会导致文档以混杂模式呈现。 

- HTML5-----<!DOCTYPE html>
- HTML 4.01 Strict(严格模式)该DTD包含所有HTML元素和属性，但不包括展示型的和弃用的元素<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">(这个不用记)
- HTML 4.01 Transitional （松散模式）该DTD包含所有HTML元素和属性，包括展示性的和弃用的元素<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">（这个不用记）


##### 重排Reflow
> 定义:DOM结构中的各个元素都有自己的盒子（模型），这些都需要浏览器根据各种样式来计算并根据计算结果将元素放到它该出现的位置，这个过程称为reflow

<b>触发Reflow</b>
- 当你增加，删除，修改DOM节点时，会导致Reflow或Repaint
- 当你移动DOM的位置，或是搞个动画的时候
- 当你修改css样式的时候
- 当你Resize窗口的时候（移动端没有这个问题）或是滚动的时候（有可能触发）
- 当你修改网页的默认字体时

##### 重绘Repaint

> 定义：当各种盒子的位置，大小以及其他属性，例如颜色、字体大小等都确定下来后，浏览器于是便把这些元素都按照各自的特性绘制了一遍，于是页面的内容出现了，这个过程称为repaint

> 触发Repaint
- DOM改动
- css改动

> 怎样尽量减少Reflow？
- 使用documentFragment，一次性加入节点

## js运行机制
[参考](https://www.cnblogs.com/MasterYao/p/5563725.html)

- 如何理解JS的单线程
- 什么是任务队列
- 什么是Event Loop:  执行栈执行的是同步任务，什么时候去异步队列取这个任务？什么时候往这个异步队列中放这个异步任务。

##### 什么时候会开启异步任务？
- setTimeout和setInterval
- DOM事件
- ES6中的Promise
- 文件读取
- 网络请求

#### 运行机制总结
- 理解JS的单线程的概念：一个时间内只能干一件事
- 理解任务队列：包括同步任务和异步任务
- 理解Event Loop
- 理解哪些语句会放入异步任务队列（重要）
- 理解语句放入异步任务队列的时机（重要）

## 页面性能

> 题目：提升页面性能的方法有哪些？
1. 资源压缩合并，减少HTTP请求
2. 非核心代码异步加载?->异步加载的方式?->异步加载方式的区别?
3. 利用浏览器缓存？->缓存的分类？->缓存的原理？
4. 使用CDN
5. 预解析DNS


    <meta http-equiv="x-dns-prefetch-control" content="on">  // 浏览器默认打开，但是在https的网站中不会默认打开，加这一句强制默认打开dns预解析
    <link rel="dns-prefetch" href="//host_name_to_prefetch.com">
    
##### 异步加载
1. 异步加载的方式：
    
    - 动态脚本加载，js动态创建脚本
    - defer，
    - async
    
2. 异步加载的区别
    
    - defer是在HTML解析完成之后才会执行，DOMContentLoaded事件触发执行之前。如果是多个，按照加载的顺序依次执行
    - async是在加载完成后立即执行，如果是多个，执行顺序和加载顺序无关（IE不支持async，只支持defer）
    
##### 浏览器缓存
1. 缓存的分类
    
    1). 强缓存：在有效时间内不从服务器请求，若下面两者都从服务器下发了，应该以cache-control为准
            
       Expires Expires:thu,21 Jan 2017 23:39:02 GMT  //这里的时间表示服务器的绝对时间，但是是与浏览器的时间比较，下发时间的是服务器，服务器时间可能和浏览器时间不一致
       Cache-Control Cache-Control:max-age=3600 // 这里表示客户端相对时间，单位为秒
    2). 协商缓存   
        
        Last-Modified(服务器下发的),If-Modified-Since（从服务器请求的时候加上） Last-Modified:wed,26 Jan 2017 00:35:11 GMT，Etag,If-None-match
        
## 错误监控类
- 前端错误的分类
- 错误的捕获方式
- 上报错误的基本原理

##### 前端错误的分类
- 即时运行错误：代码错误
- 资源加载错误
 
##### 错误的捕获方式
1. 即时运行错误的捕获方式

- try...catch
- window.onerror（这个无法捕获资源加载错误）

2. 资源加载错误

- object.onerror（节点上绑error事件）
- performance.getEntries()（可以间接知道资源是否加载，重要）
- Error事件捕获（重要）

> 延伸：跨域的js运行错误可以捕获吗？错误提示什么，应该怎么处理？

<img src="buhuo.png">

>> 可以捕获到，如上图，但是只是提示Script error,不能提供其他具体的信息。

>> 解决方法：
    1. 在客户端script标签增加cross-origin属性
    2. 设置服务器js资源响应头Access-Control-Allow-Origin:*
    
##### 上报错误的基本方式
1. 采用Ajax通信的方式上报
2. 利用Image对象上报（用的更多）

##### 浏览器缓存机制？
现代前端技术解析P48

##### 移动端300ms点击延迟解决方案？
1. 禁用缩放


    `<meta name="viewport" content="user-scalable=no">
     <meta name="viewport" content="initial-scale=1,maximum-scale=1">`
     
2. 更改默认的视口宽度


    <meta name="viewport" content="width=device-width">
    
它没有完全禁用缩放，而只是禁用了浏览器默认的双击缩放行为，但用户仍然可以通过双指缩放操作来缩放页面。

3. 方案三：CSS touch-action

**当前如何避免延迟**
1. 指针事件的 polyfill
2. FastClick 是 FT Labs 专门为解决移动端浏览器 300 毫秒点击延迟问题所开发的一个轻量级的库

##### 如果要你去实现一个前端模板引擎，你会怎么做


##### 一个静态资源要上线，里面有各种资源依赖，你如何平稳上线

##### 去除代码里面所有的空格和换行，你怎么做？

##### let暂时性死区
[参考阮一峰es6指南](http://es6.ruanyifeng.com/#docs/let#%E6%9A%82%E6%97%B6%E6%80%A7%E6%AD%BB%E5%8C%BA)

暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。

##### 如何实现图片滚动懒加载？
这里看懂可以说是自己的实现
[参考1](http://www.zyy1217.com/2017/03/16/%E9%AB%98%E6%80%A7%E8%83%BD%E6%BB%9A%E5%8A%A8%20scroll%20%E5%8F%8A%E9%A1%B5%E9%9D%A2%E6%B8%B2%E6%9F%93%E4%BC%98%E5%8C%96/)

[参考2](http://www.zyy1217.com/2017/03/20/js%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA%E5%9B%BE%E7%89%87%E6%87%92%E5%8A%A0%E8%BD%BD%E6%8F%92%E4%BB%B6/)

##### 深度遍历dom树的代码？

##### 原生JS实现一个类型百度搜索的自动完成控件。
[参考链接](https://github.com/fyuanfen/fyuanfen.github.io/tree/master/searchlist)








