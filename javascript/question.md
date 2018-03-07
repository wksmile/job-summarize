##### 手写一个select组件，就是点一下select出来一个列表，点击列表项select自动填充。[问题来源](https://zhuanlan.zhihu.com/p/28771824)

##### 模版用过没有？&*%、%￥(没听懂，应该是一些模板)字符串怎么解析成模板的？特别是带逻辑的那一块?

##### 手写用setTimeout模拟setInterval?
[setTimeout与setInterval区别](http://blog.csdn.net/baidu_24024601/article/details/51862488) 

    setTimeout(function(){
        //do something
        setTimeout(arguments.callee,interval);
    },interval)
    
上面实现了递归调用，这样做的好处是：在前一个定时器代码执行完成之前，不会向队列插入新的定时代码，确保不会有任何的缺失间隔。而且，它保证在下一次定时器代码执行之前，至少要等待指定的时间间隔。

##### 给一个字符串数组，根据他们的开头分类?
    function order(strArr){
        let hash = {}
        strArr.forEach(e=>{
            let key = e.substring(0,1)
            if(hash[key]) hash[key].push(e)
            else hash[key] = [e]
        })
        return hash
    }
    
##### 代码优化？
[参考1](https://www.jianshu.com/p/60ae173a4192)

1. 合并js文件
2. 生产模式要经过压缩处理
3. 尽量使用内置方法
4. 多个if else语句将最可能的情况放在上面，可替换为switch语句
5. 定义多个变量时尽量放在一条语句中
6. js放在文档底部，css放在文档顶部
7. 对于``if(myValue!=undefined)``换为``if(!undefined)``减少字节
8. 尽可能不要用delete删除对象
9. 将对象设置为null也不会删除对象，只是指向了null
10. 尽量避免用全局变量
11. dom对象删除时解除该dom上的事件绑定
12. 方法和闭包变量回收
13. for..in循环是性能杀手，通过该方法遍历对象属性进行拷贝非常低效。

#### 性能优化？
[参考](https://github.com/wy-ei/notebook/issues/34)
[参考](https://github.com/wksmile/blog/issues/3)
[参考](https://jinlong.github.io/2013/06/24/better-performance-with-requestanimationframe/)

1. 对于scroll和touchmove这类高频事件用debounce消抖或throttle节流（在underscore或lodash中可以找到这两个函数）。
2. 多个dom的插入删除移动考虑使用fragment，尽量减少dom操作（每次修改了 DOM 或者其样式之后都要进行 DOM树的构建，CSSOM 的重新计算，进而得到新的渲染树。）
3. 使用 requestAnimationFrame 来写动画
4. 使用 Web Worker 来处理复杂的计算
5. 避免在 scroll 或 touchmove 这类事件的回调中修改样式,会强制重新计算样式
