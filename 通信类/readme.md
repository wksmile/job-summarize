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

> ajax的代码实现参见script.js

[ajax的jQuery实现及jsonp实现](https://www.cnblogs.com/xujiazheng/p/6253461.html)

- `onreadystatechange`存储函数（或函数名），每当 readyState 属性改变时，就会调用该函数
- `readyState`五种状态的含义。
    + 0：请求未初始化
    + 1：服务器连接已建立
    + 2：请求已接收
    + 3：请求处理中
    + 4：请求已完成，且响应已就绪

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

**CORS跨域**：
它允许浏览器向跨源服务器，发出XMLHttpRequest请求，从而克服了AJAX只能同源使用的限制。CORS需要浏览器和服务器同时支持。浏览器一旦发现AJAX请求跨源，就会自动添加一些附加的头信息。

[参考](https://github.com/wengjq/Blog/issues/2)

[js中几种实用的跨域方法原理详解](http://www.cnblogs.com/2050/p/3191744.html)

**CORS与JSPON比较**
JSONP只支持GET请求，CORS支持所有类型的HTTP请求。JSONP的优势在于支持老式浏览器，以及可以向不支持CORS的网站请求数据。

##### 父域与子域是否算跨域？如果ip相同是否算跨域？
父域子域域名不同就算跨域了。但是在子域登录的帐户可以访问父域的共享资源（当然得有授权）而不需在父域登录，因为子域与父域是相互信任的，只要通过了子域的验证也就通过了父域的验证，反之亦然。

一个ip可以对应多个域名，因此域名相同也可能跨域

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

[从输入URL到页面加载的过程？如何由一道题完善自己的前端知识体系！](https://juejin.im/post/5aa5cb846fb9a028e25d2fb1)

##### nginx的好处？nginx和node的比较?
nginx:
更快 | 高扩展性，跨平台 | 高可靠性 | 低内存消耗 | 热部署 | 最自由的BSD许可协议

Nginx的性能比Node.js的HTTP模块要好很多。但Nginx考量的是面向客户端， 后端业务方面依然是受具体业务影响。而Node.js则可以利用异步I/O来实现业务并行，以提升效率。

##### cookies和session的区别？
[浅谈Session与Cookie的区别与联系](https://blog.csdn.net/duan1078774504/article/details/51912868)

这类问题先回答cookies和session创建的流程和关系

1. cookie数据存放在客户的浏览器上，session数据放在服务器上。
2. cookie不是很安全，别人可以分析存放在本地的COOKIE并进行COOKIE欺骗
   考虑到安全应当使用session。
3. session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能
   考虑到减轻服务器性能方面，应当使用COOKIE。
4. 单个cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie。
5. 所以个人建议：
   将登陆信息等重要信息存放为SESSION
   其他信息如果需要保留，可以放在COOKIE中

**cookies的一些属性**
[参考](https://www.cnblogs.com/tzyy/p/4151291.html)

- **name** cookie的名称
- **value** cookie的值
- **domain** 可以访问此cookie的域名。子域名可以读取父级域名的cookies，反之不可以。
- **path** 可以访问此cookie的页面路径
- **expires/Max-Age** cookie超时时间。不设置的话默认值是Session，意思是cookie会和session一起失效,当浏览器关闭(不是浏览器标签页，而是整个浏览器) 后，此cookie失效。
- **Size** cookie大小
- **http** cookie的httponly,为true表示不能通过document.cookie来访问此cookie
- **secure** 设置是否只能通过https来传递此cookie

**cookie有哪些编码方式**
- URL编码

**session具体是怎么存储数据的**:
每次我们访问一个页面，如果有开启session，也就是有session_start() 时，就会自动生成一个session_id 来标注是这次会话的唯一ID，同时也会自动往cookie里写入一个名字为PHPSESSID的变量，它的值正是session_id，当这次会话没结束，再次访问的时候，服务器会去读取这个PHPSESSID的cookie是否有值有没过期，如果能够读取到，则继续用这个session_id，如果没有，就会新生成一个session_id，同时生成PHPSESSID这个cookie。由于默认生成的这个PHPSESSID cookie是会话，也就是说关闭浏览器就会过期掉，所以，下次重新浏览时，会重新生成一个session_id。

好，这个是session_id，就用来标识绑定一个用户的，既然session_id生成了。那么当我们往session里面写入数据，是如何保存的，答案是保存在服务器的临时目录里

**向客户端写入cookies**
服务端返回响应头："Set-Cookie: 'name=value;domain=.domain.com;path=/;expires=Sat, 11 Jun 2016 11:29:42 GMT;HttpOnly;secure'"

**localStorage**
localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；在所有同源窗口中都是共享的；


sessionStorage和localStorage操作的api相同
在需要存储数据页面用localStorage设置数据。
`localStorage.setItem(key,value)`

在需要引用数据的页面用localStorage获取数据,在页面间传递数据需要在同一域名下的页面
`var name=localStorage.getItem(key);`

删除数据，因为localStorage是可长期存储数据的，所以如果用完后不再需要的话，可以顺手销毁掉

`localStorage.removeItem(key);`    //删除单个数据
`localStorage.clear();`            //删除所有数据
`localStorage.key(index);`         //得到某个索引的key

##### 长连接？短连接？长轮询？短轮询？
HTTP协议是基于请求/响应模式的，因此只要服务端给了响应，本次HTTP连接就结束了。TCP连接是一个双向的通道，它是可以保持一段时间不关闭的，因此TCP连接才有真正的长连接和短连接这一说，HTTP没有这个说法。

**长连接**：
服务器和客户端都设置了`keep-alive`的约定。HTTP1.1默认都已设置。所以HTTP1.1默认都打开了TCP长连接。HTTP1.0不支持长连接。

长连接时多个HTTP请求可以复用同一个TCP连接。

长连接并不是永久连接的。如果一段时间内（具体的时间长短，是可以在header当中进行设置的，也就是所谓的超时时间），这个连接没有HTTP请求发出的话，那么这个长连接就会被断掉。

长连接适用于涉及消息推送，请求频繁的场景（直播，流媒体）。连接建立后，在该连接下的所有请求都可以重用这个长连接管道，避免了频繁了连接请求，提升了效率。

**短连接**：
短连接，及连接只保持在数据传输过程，请求发起，连接建立，数据返回，连接关闭。它适用于一些实时数据请求，配合轮询来进行新旧数据的更替。

**短轮询**：
短轮询去服务端查询的时候，不管库存量有没有变化，服务器就立即返回结果了。

**长轮询**：
长轮询中，服务器如果检测到库存量没有变化的话，将会把当前请求挂起一段时间（这个时间也叫作超时时间，一般是几十秒）。在这个时间里，服务器会去检测库存量有没有变化，检测到变化就立即返回，否则就一直等到超时为止。

减少客户端请求次数

##### 域名收敛是什么？
[浅谈域名发散与域名收敛 ](https://github.com/chokcoco/cnblogsArticle/issues/1)

**域名发散**：
http 静态资源采用多个子域名，充分利用现代浏览器的多线程并发下载能力，保证资源最完美地分域名存储，以提供最大并行度，让客户端加载静态资源更为迅速。

域名发散的原因：
- 为了保护服务器不被强暴到崩溃，浏览器要对 max connections（最大并发数）进行限制。如果每个用户的最大并发数不限制的话，服务器的负载能力会大幅下降。
- 防止 DDOS 攻击。

**域名收敛**：
域名收敛的意思就是建议将静态资源只放在一个域名下面，而非发散情况下的多个域名下。

在移动端的 http 请求耗时中，DNS 解析占据了大部分时间。因为在增加域的同时，往往会给浏览器带来 DNS 解析的开销。所以在这种情况下，提出了域名收敛，减少域名数量可以降低 DNS 解析的成本。

SPDY 协议可以完成多路复用的加密全双工通道，显著提升非wifi环境下的网络体验，域名收敛配合 SPDY 才能最大程度发挥他们的效用，达到事半功倍。SPDY 的作用就是，在不增加域名的情况下，解除最大连接数的限制。主要的特点就是多路复用，他的目的就是致力于取消并发连接上限。

**SPDY**优势：
- 多路复用，请求优化。SPDY 规定在一个 SPDY 连接内可以有无限个并行请求，即允许多个并发 HTTP 请求共用一个 TCP会话。
- 设置优先级
- 支持服务器推送技术
- 压缩了HTTP头
- 强制使用SSL协议传输
