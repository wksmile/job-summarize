##### vue网易云音乐项目：
- 怎么禁用双击页面放大：参考二面三面文件夹中`移动端300ms点击延迟解决方案`问题

- import使用在一个**对象**中导出然后在另一个对象中改变。不要在import中管理用户数据，用vuex。使用其他的Immutable.js [ES6 import引用问题](https://segmentfault.com/a/1190000010230843)。import命令输入的变量都是只读的，因为它的本质是输入接口。也就是说，不允许在加载模块的脚本里面，改写接口。如果import的是引用类型可以改变。

- vue路由切换怎么让后台的歌曲不暂停。
尝试使用keep-alive，但是keep-alive会让歌曲不播放，只是缓存组件,避免多次加载相应的组件,减少性能消耗，能在组件切换过程中将状态保留在内存中，防止重复渲染DOM，但不会被渲染到真实的dom中,实际缓存的是vnode节点。 [聊聊keep-alive组件的使用及其实现原理](https://github.com/answershuto/learnVue/blob/master/docs/%E8%81%8A%E8%81%8Akeep-alive%E7%BB%84%E4%BB%B6%E7%9A%84%E4%BD%BF%E7%94%A8%E5%8F%8A%E5%85%B6%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86.MarkDown) 
解决方法: vuex缓存歌曲以及歌曲播放的时间，然后页面切换的时候播放歌曲。
解决方法2: 使用SPA单页面架构局部刷新就可以，检测hash值改变用ajax去局部刷新。

**项目哪些可以优化**：

- 资源dns预加载
- 首屏加载时间过慢，考虑资源分段加载,ajax分段请求
- Cache-Control或Expires缓存静态资源

##### react项目介绍
1. 滑动分段请求
2. 怎么让聊天页面的消息变为已读，退出消息时改变状态

**消息列表的分段加载**：
代理模式分段加载

scroll事件节流,聊天请求数据事件节流。使用debouncing事件，[debouncing事件](https://segmentfault.com/q/1010000008666931)


##### 流量台项目介绍
**难点，创新**：怎么让提交的代码执行并且改变页面的数字，而且页面不刷新

1. 浏览器在textarea中输入脚本后点击提交代码
2. 在javascript回调函数中处理代码。处理如下
    - 将代码经过安全检验，将"<,>,\,/，document,src,iframe,href"等换为空格。
    - 将代码经过编码后通过ajax的post提交到服务器
    - 服务器收到提交的代码后保存提交的代码在一个变量中，返回成功标志
    - 脚本收到ajax返回的成功消息后刷新实验页面中的一个iframe内嵌框，iframe的src重载会向服务端发送一个get请求，这个get请求的处理代码在上一个ajax的服务端同一个文件中
    - 服务端收到get请求后，将刚才保存在变量中脚本放入locals变量中，一同将刚才iframe请求的一个页面返回给iframe。
    - 当iframe页面加载的时候会执行提交的脚本，然后就可以吧代码计算的结果显示出来。

**优化**：
1. 项目中有几张比较大的图片，可以用gzip压缩后再发送到客户端
2. 使用cache-control缓存图片

**性能优化是非常出彩的地方，一定要重点讲**


#### DAT项目
1. bug修复。右键弹窗，上传图片限制，上传图片提示，绘制屋顶阴影丢失。
2. 前端性能优化，首屏渲染。绘制优化，减少dom操作。
3. 3D建筑物绘制设计。



##### 项目如何实现模块化的？
es6模块import

##### 问题集锦
- 介绍项目中用到的主要技术，有哪些比较厉害的技术

http://kain.site/

## 问题
- isNaN


#### 实现iframe页面
[iframe框架](https://cloud.tencent.com/developer/article/1193409)


### 点评管家iframe
[基于iframe的跨域与更新父窗体地址栏的解决方案](https://cloud.tencent.com/developer/article/1193409)

#### 疫情期间到店安心码项目：
上传有图片和视屏两种：
亮点： 
1. canvas实现图片压缩
    参考[用 Canvas 技术压缩要上传的图片](https://juejin.im/entry/560a726960b2ad8a22a538fc)
2. 大文件视屏上传
    参考[大文件上传](https://juejin.im/post/5dff8a26e51d4558105420ed)

### 点评管家用户反馈评分
1. touch和click事件,[参考](https://www.jianshu.com/p/b950ef9b5056)
    - 正确的触发方式是： touchstar->touchmove->touchend,  touchstart->touchend->click

    - 点击穿透问题：
        + fastClick库可以解决。
        + 延迟一定时间（300ms）来处理
    
    - user-select:none;  禁止选择事件

#### 在美团最牛逼的事情，最厉害的技术是什么？


