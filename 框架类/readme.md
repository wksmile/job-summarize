#### 如果说用VUE做了什么

1. 项目中做的东西
2. vue的生命周期是什么？
3. vue的工作原理是什么？
4. 有没有看过它的源码？
5. 觉得它源码有什么缺点？
6. 如果让你改进你怎么改进这个缺点？
7. vue框架的优点，是什么？


#### jQuery喜欢问的问题：
jQuery源码有没有看过，它的核心架构是什么？事件委托是怎么做的？插件机制是什么？
直接看jQuery看过源码的比较好的博客，不用直接去看源码，这样效率更高

吃透mvvm源码中的一个，阿里特别喜欢问vue的源码，向jQuery一样不用直接去看源码，可以看别人的博客
项目中遇到的问题，怎么解决的

npm常见命令，它是怎么用的，它的script使用

用到jQuery很可能用到模板引擎。jQuery的事件委托，事件代理，jQuery的延迟的delaycate方法


##### vue,angular,react的异同？
[vue/angular/react区别](https://www.jianshu.com/p/1a7d0c5c6326)

[VueJs与ReactJS和AngularJS的异同点_javascript技巧](https://yq.aliyun.com/ziliao/111225)

##### vue和angular的区别
**区别**
1. vue的双向绑定是基于ES5中的Object.defineProperty,而angular是由自己实现的一套模板编译规则，需要进行所谓的‘脏’检查。因此，vue在性能上更高效，但是代价是对于ie9以下的浏览器无法支持。

2. vue需要提供一个el对象进行实例化，后续的所有作用范围也是在el对象之下，而angular而是整个html页面。一个页面，可以有多个vue实例，而angular好像不是这么玩的。

3. vue上手快，angular学习曲线陡峭

4. angular使用双向绑定，vue在不同组件间强制使用单相数据流。

5. vue组件代表一个自给自足的独立单元，有自己的视图和数据逻辑。而angular不是。

6. vue由es5开发，angular由typescript开发

##### React和vue的异同
**相同**

1. Virtual DOM
2. 组件化
3. 单向数据流
4. props父组件与子组件通信
5. 都有自己的构建工具
6. chrome开发工具
7. 配套框架，路由，状态管理

**区别**

1. HTML模板 vs JSX
2. reatc状态state对象不可变，需要用到setState函数，vue状态直接由data属性管理
3. 

[参考1](http://caibaojian.com/vue-vs-react.html)
[参考2](http://chping.website/2016/11/28/Vue%E5%92%8CReact%E5%AF%B9%E6%AF%94/)

##### 用vue/react的原因，解决了哪些问题

##### vue数据双向绑定的底层实现?

##### 回调函数，Promise,async/await三者的区别，以及为什么用Promise，然后又变成了async/await

#####  MongoDB性能问题

##### 前端测试和web压力测试

##### virtual dom的实现，diff算法

##### babel是如何将es6代码编译成es5的


