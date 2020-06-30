##### CSS3新特性？
[参考](https://www.cnblogs.com/huqinhan/p/5797516.html)
1. CSS3实现圆角（border-radius），阴影（box-shadow）
2. 对文字加特效（text-shadow、），线性渐变（gradient((to right,red , blue))），旋转（transform）
3. transform:rotate(9deg) scale(0.85,0.90) translate(0px,-30px) skew(-9deg,0deg);// 旋转,缩放,定位,倾斜
4. 增加了更多的CSS选择器,如属性选择器，结构伪类选择器（:root,nth-last-child,E:first-of-type选择位于其父元素中且匹配E的第一个同类型的子元素。）,多背景，rgba
5. 在CSS3中唯一引入的伪元素是 ::selection.鼠标选中的元素
6. 媒体查询，多栏布局
7. border-image
8. 动画:animation,transition,transform等。

##### 怎样计算白屏、首屏时间？
[如何计算白屏和首屏时间](http://www.cnblogs.com/longm/p/7382163.html)

**白屏时间**: 地址栏输入网址点击回车 => 浏览器出现第一个字符或者元素
在html的head标签中插入script标签window.firstPaint = Date.now();
计算白屏时间： 白屏时间 = firstPaint - performance.timing.navigationStart;
不支持performance时： 白屏时间 = firstPaint - pageStartTime;

移动端的白屏的解决与优化方案：[移动端白屏的解决与优化方案](http://guoyan2900.iteye.com/blog/2187519)

**首屏时间**：地址栏输入网址点击回车 => 浏览器第一屏渲染完成
计算首屏时间方法：
- 首屏模块标签标记法。html的body末尾中使用内联的script标签标记当前时间。window.firstScreen = Date.now()。首屏时间： firstScreen - performance.timing.navigationStart;
- 统计首屏内加载最慢的图片时间。此时首屏时间等于 加载最慢的图片的时间点 - performance.timing.navigationStart;
- 如果页面首屏没有图片，首屏时间 = performance.timing.domContentLoadedEventStart - performance.timing.navigationStart
- 自定义首屏内容计算法。

首屏时间优化： [浅谈自己知道的首屏加载时间的优化策略](https://blog.csdn.net/clark_fitz817/article/details/79513046)， [前端如何优化首屏加载速度](https://juejin.im/post/5de4fd9c518825434771d163)
- 缩小webpack或者其他打包工具生成的包大小,[Webpack如何打包才能尽可能的缩小体积](https://blog.csdn.net/js_admin/article/details/76824004)
- 使用服务端渲染
- 使用预渲染的方式，预渲染适用于简单的静态页面，服务端渲染适用于复杂、较大型、与服务端交互频繁的功能型网站[预渲染](https://juejin.im/post/5b8ba25751882542f25a6cc8)
- 使用gzip压缩减小文件传输的大小，[gzip压缩初探](https://juejin.im/post/5d27dd2de51d454f6f16ec89)
- 使用页面或者组件分块懒加载，[Vue组件代码分块和懒加载](https://blog.csdn.net/u010730126/article/details/103703940)

##### 编写html5需要注意什么？
[HTML及H5代码编写规范及注意要点](https://blog.csdn.net/sinat_34719507/article/details/53891959)
[移动端H5页面注意事项](https://segmentfault.com/a/1190000012156216)



