### 通信类
- 什么是同源策略及限制？
- 前后端如何通信？有几种？
- 如何创建Ajax?如何原生实现？
- 什么是跨域？跨域通信的几种方式？

##### 什么是同源策略及限制？
> 同源策略限制从一个源加载的文档或脚本如何来与来自另一个源的资源进行交互。这是一个用于隔离潜在恶意文件的关键的安全机制。
 
> 非同源的限制
- Cookie,LocalStorage和IndexDB无法读取
- DOM无法获得
- AJAX请求不能发送

##### 前后端如何通信？
- Ajax，同源下的通信方式
- WebSocket，不受同源策略的限制
- CORS，支持跨域通信也支持同源通信

##### 如何创建Ajax？
- XMLHttpRequest对象的工作流程？
- 兼容性处理？
- 事件的触发条件？
- 事件的触发顺序？


    var xhr = new (window.XMLHttpRequest || ActiveXObject)('Microsoft.XMLHTTP');
    
    xhr.open('get','www.baidu.com',false);
    xhr.onreadystatechange = function () {
      if(xhr.readyState === 4) {
        if((xhr.status>=200 && xhr.status <300) || xhr.status === 304) {
          // 请求成功
        } else {
          // 请求失败
        }
      }
    }
    
[ajax的jQuery实现及jsonp实现](https://www.cnblogs.com/xujiazheng/p/6253461.html)

##### 跨域通信的几种方式？(下面五种都很重要)
**jcpiwh**

- JSONP（双向通信）
- 图像Img Ping(单相通信)
- location.hash（parent.parent.location.hash = self.location.hash.substring(1)）
- postMessage
- WebSocket
- CORS（要了解fetch的API，可以看看阮一峰的文章）

+ JSONP：JSONP的原理是什么？怎么实现的？如果让你来实现怎么实现？----实现原理是script标签的异步加载,且script标签的src属性并不被同源策略所约束，因为JSONP是有效的javascript代码，所以在请求完成后，即在JSONP响应加载到页面中以后，就会立刻执行。请求方提供回调函数，被请求方提供回调的json参数，请求成功后该函数会执行。

+ 图像Ping常用于跟踪用户点击页面或动态曝光次数。缺点：只能发送GET请求，二是无法访问服务器的响应文本。

+ 原理是利用location.hash来进行传值,改变hash并不会导致页面刷新.

+ CORS为什么就支持跨域通信？需要浏览器服务器支持。浏览器会拦截ajax请求，如果浏览器觉得ajax请求是跨域的它会在http头中加上Origin字段。  [参考阮一峰](http://www.ruanyifeng.com/blog/2016/04/cors.html)


[参考](https://github.com/wengjq/Blog/issues/2)

##### 为什么TCP连接要经过三次握手，四次断开？

[参考1](https://www.zhihu.com/question/24853633)
[参考2](https://www.cnblogs.com/zhoudayang/p/6012257.html)
[参考3](https://www.cnblogs.com/qiaoconglovelife/p/5733056.html)

必要性：TCP通过三次握手建立可靠的（确保收到）的全双工通信。
1. 第一次握手和第二次握手（ACK部分）建立了从客户端到服务器传送数据的可靠连接；
2. 第二次握手（SYN部分）和第三次握手建立了从服务器到客户端传送数据的可靠连接；
3. 由于我们期望建立全双工连接，所以两个方向的通信都是需要的，于是合并了服务器发送的ACK和SYN。
4. 第三次握手的必要性：防止已失效的请求报文段突然又传送到了服务端而造成连接的误判。

四次断开，为保证单向通信的可行性
1. 主动断开方发送FIN时，被动断开方要回复ACK，意思是“我收到你的FIN了”；
2. 主动断开方发送FIN并不意味着立即关闭TCP连接，而是告诉对方自己没有更多的数据要发送了，只有当对方发完自己的数据再发送FIN后，才意味着关闭TCP连接；
3. 被动断开方收到FIN并回复ACK后，此时TCP处于“半关闭”状态，为保证被动断开方可以继续发送数据，所以第二个FIN并不会伴随ACK发送，所以比连接时多一个报文段。

**三次握手四次挥手的过程**
[链接](http://blog.csdn.net/jungle_hello/article/details/51465119)

##### HTTPS通信过程
1. 客户端向服务器发送协议版本号、客户端生成的**随机数**、以及客户端支持的加密算法
2. 服务器返回确认双方使用的加密方法，并给出数字证书、以及一个服务器生成的**随机数**（证书其实就是一对公钥和私钥，只用于加密解密对话秘钥随机数）
3. 客户端确认数字证书有效，然后生成一个新的**随机数**，并使用数字证书中的公钥加密这个随机数发给服务端
4. 服务端使用私钥解密客户端发来的随机数
5. 服务器和客户端根据约定的加密方法，使用前面的三个随机数生成‘对话秘钥’用来加密接下来的整个过程

[参考](https://github.com/youngwind/blog/issues/108)

##### http状态码有哪些？
**概述**

- 1XX 信息性状态码  接收的请求正在处理
- 2XX 成功状态码    请求正常处理完毕
- 3XX 重定向状态码  需要进行附加操作以完成请求
- 4XX 客户端错误状态码 服务器无法处理请求
- 5XX 服务器错误状态码 服务器处理请求出错

**重要的状态码**
101,200,301,302,304,307，401,404,500

+ 101,协议升级，websocket升级和HTTP2升级可加进来,HTTP2的好处与HTTP1的比较   
+ 301,永久重定向
+ 302,临时重定向
+ 304，协商缓存，引进浏览器缓存知识，强制缓存，协商缓存...
+ 307，hsts跳转。原本的用法是用于让post请求的跳转去新的post请求，但也用于hsts跳转。

[参考](http://hpoenixf.com/%E9%9D%A2%E8%AF%95%E5%BF%85%E8%80%83%E4%B9%8Bhttp%E7%8A%B6%E6%80%81%E7%A0%81%E6%9C%89%E5%93%AA%E4%BA%9B.html#more)

##### 从浏览器输入url到显示页面的过程
1. 从浏览器接收url到开启网络请求线程（这一部分可以展开浏览器的机制以及进程与线程之间的关系）
2. 查询缓存，http的缓存（这部分包括http缓存头部，etag，catch-control等）
3. 开启网络线程到发出一个完整的http请求（这一部分涉及到dns查询，tcp/ip请求，五层因特网协议栈等知识）
4. 从服务器接收到请求到对应后台接收到请求（这一部分可能涉及到负载均衡，安全拦截以及后台内部的处理等等）
5. 后台和前台的http交互（这一部分包括http头部、响应码、报文结构、cookie等知识，可以提下静态资源的cookie优化，以及编码解码，如gzip压缩等）
6. 浏览器接收到http数据包后的解析流程（解析html-词法分析然后解析成dom树、解析css生成css规则树、合并成render树，然后layout、painting渲染、复合图层的合成、GPU绘制、外链资源的处理、loaded和domcontentloaded等）
7. CSS的可视化格式模型（元素的渲染规则，如包含块，控制框，BFC，IFC等概念）
8. JS引擎解析过程（JS的解释阶段，预处理阶段，执行阶段生成执行上下文，VO，作用域链、回收机制等等）
9. 其它（可以拓展不同的知识模块，如跨域，web安全，hybrid模式等等内容）

