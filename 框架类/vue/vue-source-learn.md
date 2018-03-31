##### vue数据双向绑定底层实现？
[实现双向绑定mvvm](https://segmentfault.com/a/1190000006599500)

电脑 G/PROJECT/mvvm

##### vue虚拟DOM？
参考**现代前端技术解析P193**

virtual DOM是一个能够直接描述一段HTML DOM结构的javascript对象，浏览器可以根据它的结构按照一定的规律创建出确定唯一的HTML DOM结构。

创建虚拟dom往往就是将一段**DOM描述字符串**解析成虚拟DOM对象的过程，

##### vue的diff算法
[参考](http://blog.csdn.net/m6i37jk/article/details/78140159)
[参考](https://segmentfault.com/a/1190000008782928#articleHeader0)

- 仅在同级的vnode间做diff
- key值作用。不设key，newCh和oldCh只会进行头尾两端的相互比较，设key后，除了头尾两端的比较外，还会从用key生成的对象oldKeyToIdx中查找匹配的节点，所以为节点设置key可以更高效的利用dom。

##### vue的nextTick实现的原理？批处理？
[vue值nextTick全面解析](https://www.cnblogs.com/xujiazheng/p/6852124.html)
[批处理更新DOM](https://github.com/youngwind/blog/issues/88)
[Vue.js异步更新DOM策略及nextTick](https://github.com/answershuto/learnVue/blob/master/docs/Vue.js%E5%BC%82%E6%AD%A5%E6%9B%B4%E6%96%B0DOM%E7%AD%96%E7%95%A5%E5%8F%8AnextTick.MarkDown)

**异步更新**：有Promise、MutationObserver以及setTimeout实现异步。
Promise 的 resolve、MutationObserver排在microtask 队列，settimeout在task队列。microtask队列先于task队列执行。

**批处理**： 多次更改model同一个值，只更新一次DOM。减少渲染次数。


##### 事件广播和事件派发？
发布者订阅者模式

[说说element组件库broadcast与dispatch](https://github.com/answershuto/learnVue/blob/master/docs/%E8%AF%B4%E8%AF%B4element%E7%BB%84%E4%BB%B6%E5%BA%93broadcast%E4%B8%8Edispatch.MarkDown)

##### vue的template编译，即使用html字符串解析出语法树（和babel编译原理结合起来）
[Vue模板编译原理](https://github.com/berwin/Blog/issues/18)

- 第一步是将 模板字符串 转换成 element ASTs（元素抽象语法树）
- 第二步是对 AST 进行静态节点标记，主要用来做虚拟DOM的渲染优化（优化器）
- 第三步是 使用 element ASTs 生成 render 函数代码字符串（代码生成器）。

render返回值是VNode节点，VNode是Vue的虚拟DOM节点。在_update的时候，经过patch与之前的VNode节点进行比较，得出差异后将这些差异渲染到真实的DOM上。

##### vue计算属性的实现
[深入浅出 - vue之State](https://github.com/berwin/Blog/issues/13)



