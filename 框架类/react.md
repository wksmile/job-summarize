### 利用shouldComponentUpdate钩子函数优化react性能 

> [原文](https://www.cnblogs.com/penghuwan/p/6707254.html)

一个组件state的改变（调用this.setState()方法）以及从父组件接受的props发生变化时，会导致组件重渲染。

* 前后不改变state值的setState（理论上）和无数据交换的父组件的重渲染都会导致组件的重渲染，但你可以在shouldComponentUpdate这道两者必经的关口过滤不必要的渲染

* 当state中的数据类型为引用类型类如对象时就会出现问题。（具体看原文）

##### 用redux的原因？解决了哪些问题？
[为什么react要用redux](http://blog.csdn.net/u010632868/article/details/74937904)

[为什么使用redux](http://blog.csdn.net/haoaiqian/article/details/78625200)

##### react的性能优化
[参考react性能优化探索实践](http://imweb.io/topic/577512fe732b4107576230b9)

当我们要更新某个子组件的时候,react的默认做法是调用所有组件的render，再对生成的虚拟DOM进行对比，如不变则不进行更新。这样的render和虚拟DOM的对比明显是在浪费。

**优化**
react在每个组件生命周期更新的时候都会调用一个`shouldComponentUpdate(nextProps, nextState)`函数。

在`shouldComponentUpdate`内比较状态是否变化，但是对于引用类型比较都是true

原始类型可以用`ShallowCompare`插件，这样就不需要每次去比较

目前采用的是在reducer里面更新数据使用Object.assign({}, state, {newkey: newValue}（数据管理采用redux），然后在组件里面根据某个具体的字段判断是否更新

**************************

**列表类组件优化**
列表类组件默认更新方式会比较复杂（因为可能会涉及到增删改，排序等复杂操作），所以需要加上一个key属性，提供一种除组件类之外的识别一个组件的方法。如果某个组件key值发生变化，React会直接跳过DOM diff，重新渲染，从而节省计算提高性能。


##### react的setState
异步更新，批处理


##### 项目里用到了react，为什么要选择react，react有哪些好处？
可以从虚拟DOM、数据驱动、面向对象等等方面回答

##### 数据驱动？
[前端数据驱动的价值](https://div.io/topic/1574)
[数据驱动模式借助react的实践探索](http://gad.qq.com/article/detail/18390)

在全局仓库存储公共数据，核心就是页面的行为使得数据改变，数据渲染出数据改变后相应的页面。

数据驱动+react实践的前提是react性能，用户每次操作都会重新渲染数据，生成对应的新页面。因为虚拟dom和diff算法





