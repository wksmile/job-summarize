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

##### 怎么保证你的node.js的进程不挂掉？为什么PM2可以保证你的进程不挂掉？
[参考](https://www.jianshu.com/p/ac843b516fda)

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






