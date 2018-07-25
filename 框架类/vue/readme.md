##### react源码解析
[参考](https://juejin.im/post/5a84682ef265da4e83266cc4)

##### vue.js组件间通信
**父子组件间通信**
1. 使用`props`，父组件可以使用props向子组件通信
2. 使用`$children`可以在父组件中访问子组件,一个数组，顺序为注册的顺序。
3. 使用`$refs`通过this.$refs.son就可以访问了这个子组件，包括访问子组件的data里面的数据，调用它的函数

**子组件向父组件通信**
1. 子组件通过$emit触发事件，回调给父组件
2. 通过修改父组件传递的props来修改父组件数据（不推荐，将其放入data中，在需要回传给父组件的时候再用事件回传数据。）
3. 使用`$parent`可以访问父组件的数据

**非父子组件兄弟组件之间的数据传递**
1. 有时候，非父子关系的两个组件之间也需要通信。在简单的场景下，可以使用一个空的 Vue 实例作为事件总线：

2. 当数据足够复杂时用vuex进行数据管理


##### vuex
- state: Vuex 使用单一状态树——是的，用一个对象就包含了全部的应用层级状态。`this.$store.state.count`获取属性
- getter: 需要从 store 中的 state 中派生出一些状态，例如对列表进行过滤并计数。getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
- mutation: 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。mutation 必须是同步函数。因为异步执行的代码导致状态改变不可追溯。
- action提交的是mutation，而不是直接变更状态，action可以包含任意异步操作。

单相数据流，数据驱动

##### vue-resource 解决跨域问题
1. 在vue项目下的 config/index.js 文件里面配置代理proxyTable:
2. Vue.http.options.xhr = { withCredentials: true }
   //或是
   this.$http.jsonp('...', { credentials: true })


##### vue性能优化

- v-show,v-if,频繁切换中使用v-show,敏感信息用v-if
- 列表加上key值，diff算法有优化。同层的节点减少删除和创建，只是移动
- updated钩子函数上做优化
- keep-alive把组件保存在浏览器内存中，实现路由快速切换
- 不要在模板里面写过多的表达式与判断
- 组件的懒加载：`const Foo = r => require.ensure([], () => r(require('./Foo.vue')), 'group-foo')`

##### vue-cli的原理你了解吗？


