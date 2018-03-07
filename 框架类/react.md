### 利用shouldComponentUpdate钩子函数优化react性能 

> [原文](https://www.cnblogs.com/penghuwan/p/6707254.html)

一个组件state的改变（调用this.setState()方法）以及从父组件接受的props发生变化时，会导致组件重渲染。

* 前后不改变state值的setState（理论上）和无数据交换的父组件的重渲染都会导致组件的重渲染，但你可以在shouldComponentUpdate这道两者必经的关口过滤不必要的渲染

* 当state中的数据类型为引用类型类如对象时就会出现问题。（具体看原文）

