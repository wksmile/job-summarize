#### 同步异步执行顺序

[原文参考链接](http://www.ruanyifeng.com/blog/2018/02/node-event-loop.html)

> node提供了四个定时器setTimeout(),setInterval(),setImmediate(),process.nextTick(),其前两是语言标准，后两个是node都有的

```$xslt
setTimeout(()=>{
  console.log(1)
},0);

setImmediate(()=>{
  console.log(2)
});

Promise.resolve().then(()=>{
  console.log(4)
});

process.nextTick(()=>{
  console.log(3)
});

(()=>{
  console.log(5)
})();
```

上面输出结果为：5 3 4 1 2

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





