#### 同步异步执行顺序

[原文参考链接](http://www.ruanyifeng.com/blog/2018/02/node-event-loop.html)

> node提供了四个定时器setTimeout(),setInterval(),setImmediate(),process.nextTick(),其前两是语言标准，后两个是node都有的。

```$xslt
setTimeout(()=>{
  console.log(1)
});

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

