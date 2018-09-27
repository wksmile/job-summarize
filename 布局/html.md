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


##### html5有哪些新特性、移除了那些元素？如何处理HTML5新标签的浏览器兼容问题？如何区分 HTML 和 HTML5？
**新特性**：
1. 拖拽释放(Drag and drop) API
2. 语义化更好的内容标签（header,nav,footer,aside,article,section）
3. 音频、视频API(audio,video)
4. 画布(Canvas) API
5. 地理(Geolocation) API
6. 本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失；
7. sessionStorage 的数据在浏览器关闭后自动删除
8. 表单控件，calendar、date、time、email、url、search  
9. 新的技术webworker, websocket, Geolocation

**移除的元素**：
1. 纯表现的元素：basefont，big，center，font, s，strike，tt，u；
2. 对可用性产生负面影响的元素：frame，frameset，noframes；

**支持HTML5新标签**：
IE8/IE7/IE6支持通过 document.createElement 方法产生的标签，可以利用这一特性让这些浏览器支持 HTML5 新标签，浏览器支持新标签后，还需要添加标签默认的样式（当然最好的方式是直接使用成熟的框架、使用最多的是html5shim框架）：

<!--[if lt IE 9]>
<script> src="http://html5shim.googlecode.com/svn/trunk/html5.js"</script>
<![endif]-->


##### 问题:对HTML5标签语义化的理解

1. 去掉或者丢失样式的时候能够让页面呈现出清晰的结构
2. 有利于SEO：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：爬虫依赖于标签来确定上下文和各个关键字的权重；
3. 方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页；
4. 便于团队开发和维护，语义化更具可读性，是下一步网页的重要动向，遵循W3C标准的团队都遵循这个标准，可以减少差异化。

[参考2](https://www.cnblogs.com/freeyiyi1993/p/3615179.html)
[参考3](http://www.html5jscss.com/html5-semantics-section.html)


##### canvas切图的原理
裁切的原理是通过 canvas A 的 getImageData 方法取出图片中指定区域的像素数据，再用 canvas B 的 putImageData 方法将像素数据绘制到 canvas B 中，并保持 canvas B 的尺寸与取出区域的尺寸一致。canvas B 中的图片就是裁切得到的图片区域块。

[参考1](http://leonshi.com/2015/10/31/html5-canvas-image-compress-crop/)

##### 怎样计算白屏首屏时间？
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
- 自定义首屏内容计算法。

首屏时间优化： [浅谈自己知道的首屏加载时间的优化策略](https://blog.csdn.net/clark_fitz817/article/details/79513046)

##### 编写html5需要注意什么？
[HTML及H5代码编写规范及注意要点](https://blog.csdn.net/sinat_34719507/article/details/53891959)
[移动端H5页面注意事项](https://segmentfault.com/a/1190000012156216)

##### canvas实现拖拽？


