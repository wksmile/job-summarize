#### 同步异步执行顺序

[原文参考链接](http://www.ruanyifeng.com/blog/2018/02/node-event-loop.html)

> node提供了四个定时器setTimeout(),setInterval(),setImmediate(),process.nextTick(),其前两是语言标准，后两个是node都有的

代码参见`readme.md`

执行顺序：
1. 同步任务总比异步任务更早执行，先执行同步任务
2. 异步任务分为：追加在本轮循环的异步任务和追加在次轮循环的异步任务。process.nextTick和Promise的回调函数**追加在本轮循环**。setTimeout、setInterval、setImmediate的回调函数**追加在次轮循环**。本轮循环的异步任务优先于次轮循环的异步任务先执行。
3. process.nextTick()是所有异步任务里面最快执行的。接着执行异步里面的**微任务**。Promise对象的回调函数会进入微任务。nextTickQueue->microTaskQueue。前一个队列清空才会执行下一个队列，即全部的process.nextTick的回调函数执行都会早于Promise。
4. 异步任务。

总的顺序为：同步任务 -> process.nextTick() -> 微任务 -> 异步任务

##### node.js线程进程间通信？
基于cluster模块，事件监听

每个worker进程通过使用child_process.fork()函数,当worker使用server.listen（...）函数时 ，将参数序列传递给master进程。如果master进程已经匹配workers，会将传递句柄给工人。如果master没有匹配好worker，那么会创建一个worker，再传递并句柄传递给worker。

##### 怎么保证你的node.js的进程不挂掉？为什么PM2可以保证你的进程不挂掉？
[参考](https://www.jianshu.com/p/ac843b516fda)

主进程和子进程之间通过IPC实现进程间的通信。进程间通过send方法发送信息，通过监听message事件收取信息，这和cluster模块继承的EventEmitter对象是一致的：

##### 介绍express中间件？
[Express中间件的原理及实现](https://www.jianshu.com/p/797a4e38fe77)

- 中间件其实是一个函数，在响应发送之前对请求进行一些操作
- 中间件：执行任何代码。修改请求和响应对象。终结请求-响应循环。调用堆栈中的下一个中间件。
- 中间件分类：应用级中间件，路由级中间件，错误处理中间件，内置中间件，第三方中间件
- 中间件执行顺序就是你定义的顺序
- app.use 加载用于处理http請求的middleware（中间件），当一个请求来的时候，会依次被这些 middlewares处理。

##### 讲讲Express？
**Express和koa**：
Express：主要基于Connect中间件框架，回调函数，功能丰富，随取随用，并且框架自身封装了大量便利的功能，比如路由、视图处理等等。
koa：主要基于co中间件框架，框架自身并没集成太多功能，大部分功能需要用户自行require中间件去解决，但是由于其基于ES6 generator特性的中间件机制，解决了长期诟病的“callback hell”和麻烦的错误处理的问题

##### node.js了解
- 基于Google V8引擎，系统真正执行的代码是用C++写的
- 单线程，非阻塞，异步IO和事件驱动
- 事件循环：node.js会把所有的异步操作使用事件机制解决，有个线程在不断地循环检测事件队列。

适用场景：高并发、I/O密集、少量业务逻辑的场景。如RESTful API,聊天，单页app

**node.js与javascript的关系**：
参见图片：node与js关系图

##### 面向过程和面向对象的区别
**面向过程**：面向过程就是分析出解决问题所需的步骤。采用自顶向下、分而治之的方法，将整个程序按功能划分为几个可独立编程的子过程模块，每一子模块完成指定的子任务，主过程通过调用各子过程完来成全部处理工作。

**面向对象**：面向对象则是把构成问题的事物分解成对象，抽象出对象的目的并不在于完成某个步骤，而是描述其在整个解决问题的步骤中的行为。面向对象的相关概念：类，对象，封装，继承，消息，多态性

##### Buffer模块是干什么的
 Buffer 类被引入作为 Node.js API 的一部分，使其可以在 TCP 流或文件系统操作等场景中处理二进制数据流。

##### utf8,gbk,ASCII,Unicode,Base64
- ASCII,ASCII码用了1个字节，1个字节可以表示256种状态，但ASCII码只用了128种来表示英文字符和特殊字符，也就是一个字节的后七位，最前面的1位都是0

- Unicode,将世界上所有的符号都纳入其中。每一个符号都给予一个独一无二的编码，那么乱码问题就会消失。这就是Unicode。问题，对于不需要两个字节或多个表示的内容造成浪费，且计算机无法区分unicode还是ascii

- UTF-8是一种针对Unicode的可变长度字符编码,可以使用1~4个字节表示一个符号，又称万国码，它包含全世界所有国家需要用到的字符，是国际编码，通用性强，是用以解决国际上字符的一种多字节编码。英文使用8位/8Bit（即1个字节/1Byte），中文使用24位/24Bit（3个字节/3Byte）来编码。

- BCD,BCD码是计算机在对十进制数做运算或存储时采用的二进制格式。

- Base64,Base64是网络上最常见的用于传输8Bit字节码的编码方式之一

- GBK是汉字编码标准之一

##### next执行下一个中间件的原理是什么？
[对express中next函数的一些理解](https://cnodejs.org/topic/5757e80a8316c7cb1ad35bab)

next函数内部有个while循环，每次循环都会从stack中拿出一个layer，这个layer中包含了路由和中间件信息，然后就会用layer和请求的path就行匹配，如果匹配成功就会执行layer.handle_request，调用中间件函数。但如果匹配失败，就会循环下一个layer（即中间件）。

app.use注册的中间件，如果path参数为空，则默认为"/"，而path为"/"的中间件默认匹配所有的请求。

#### Koa和express的区别？koa1和koa2的区别？


##### websocket心跳检测？





