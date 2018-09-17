##### react源码解析
[参考](https://juejin.im/post/5a84682ef265da4e83266cc4)

##### react生命周期？
[React组件生命周期](https://segmentfault.com/a/1190000006792687)
[React组件生命周期过程说明](http://react-china.org/t/react/1740)

##### react创建组件的三种方式及其区别？
1. 函数式定义的无状态组件
2. es5原生方式React.createClass定义的组件
3. es6形式的extends React.Component定义的组件

[React创建组件的三种方式及其区别](https://www.cnblogs.com/wonyun/p/5930333.html)

### 利用shouldComponentUpdate钩子函数优化react性能 

> [原文](https://www.cnblogs.com/penghuwan/p/6707254.html)

一个组件state的改变（调用this.setState()方法）以及从父组件接受的props发生变化时，会导致组件重渲染。

* 前后不改变state值的setState（理论上）和无数据交换的父组件的重渲染都会导致组件的重渲染，但你可以在shouldComponentUpdate这道两者必经的关口过滤不必要的渲染

* 当state中的数据类型为引用类型类如对象时就会出现问题。（具体看原文）

##### react的性能优化
[参考react性能优化探索实践](http://imweb.io/topic/577512fe732b4107576230b9)

当我们要更新某个子组件的时候,react的默认做法是调用所有组件的render，调用组件的render生成新的虚拟DOM,再对生成的虚拟DOM进行对比，如不变则不进行更新。这样的render和虚拟DOM的对比明显是在浪费。

**优化**
react在每个组件生命周期更新的时候都会调用一个`shouldComponentUpdate(nextProps, nextState)`函数。

在`shouldComponentUpdate`内比较状态是否变化，但是对于引用类型比较都是true

原始类型可以用`ShallowCompare`插件，这样就不需要每次去比较

目前采用的是在reducer里面更新数据使用Object.assign({}, state, {newkey: newValue}（数据管理采用redux），然后在组件里面根据某个具体的字段判断是否更新

**************************

**列表类组件优化**：
列表类组件默认更新方式会比较复杂（因为可能会涉及到增删改，排序等复杂操作），所以需要加上一个key属性，提供一种除组件类之外的识别一个组件的方法。如果某个组件key值发生变化，React会直接跳过DOM diff，重新渲染，从而节省计算提高性能。


##### react的setState
异步更新，批处理

[参考](https://zhuanlan.zhihu.com/p/20328570)
[参考](https://zhuanlan.zhihu.com/p/25882602)

[为何说setState方法是异步的](https://segmentfault.com/a/1190000007454080)


##### 项目里用到了react，为什么要选择react，react有哪些好处？
虚拟DOM速度快、数据驱动、面向对象、跨浏览器兼容、模块化、前后端同构的javsscript、纯粹的javascript

[react的优点](https://www.jianshu.com/p/e3841ab55a68)

##### 数据驱动？
[前端数据驱动的价值](https://div.io/topic/1574)
[数据驱动模式借助react的实践探索](http://gad.qq.com/article/detail/18390)

页面上面所有的展示都是由数据决定的，和页面其他地方没有任何关系。页面之间每个模块，不用关心父子模块之间的关系，每个独立的模块都是由一个全局的model决定。

每一个模块的改变，全部都交给model处理。
然后model里面会和个个模块一一对应，每个模块无需关注其他模块的变化，只需要关注model里面对应自己数据的变化即可。所以模块间关系链条会显得非常简单。

换一个理解，我们将直接的模块和模块直接的耦合关系全部转移到了数据中去体现。而数据的维护是远远比模块更好维护的。换一个理解就是每一种数据状态对应一种页面的展示状态。页面想展示成什么样子，需要数据处理成什么样子。数据是这个页面的核心。

在全局仓库存储公共数据，核心就是页面的行为使得数据改变，数据渲染出数据改变后相应的页面。

数据驱动+react实践的前提是react性能，用户每次操作都会重新渲染数据，生成对应的新页面。因为虚拟dom和diff算法

数据驱动主要是处理模块之间的一种逻辑。

**数据驱动开发关注点**:
1. 第一点数据结构的处理，因为数据决定了整个页面的展示，
2. 第二点是处理好模块和数据中对应的关系。

##### 对组件化的理解？
- 组件的封装：封装视图，数据，变化逻辑
- 组件的复用：props传递、复用

##### react虚拟dom的理解？
[参考尤雨溪知乎回答](https://www.zhihu.com/question/31809713)

##### react中子组件怎么向父组件传值？
[子组件向父组件传值](http://www.cnblogs.com/lixuemin/p/5754289.html)


#### diff算法的时间复杂度？





