##### HTML5常见面试题
[HTML5常见面试题](https://www.jianshu.com/p/e6e714eff7d5)

##### 什么是DOCTYPE及作用？
1. <!DOCTYPE> 声明位于文档中的最前面，处于 html 标签之前。告知浏览器以何种模式来渲染文档。 
2. 严格模式的排版和 JS 运作模式是  以该浏览器支持的最高标准运行。
3. 在混杂模式中，页面以宽松的向后兼容的方式显示。模拟老式浏览器的行为以防止站点无法工作。
4. DOCTYPE不存在或格式不正确会导致文档以混杂模式呈现。 

- HTML5-----<!DOCTYPE html>
- HTML 4.01 Strict(严格模式)该DTD包含所有HTML元素和属性，但不包括展示型的和弃用的元素<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">(这个不用记)
- HTML 4.01 Transitional （松散模式）该DTD包含所有HTML元素和属性，包括展示性的和弃用的元素<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">（这个不用记）

##### BOM和DOM的区别
DOM: DOM是一个使程序和脚本有能力动态地访问和更新文档的内容、结构以及样式的平台和语言中立的接口
BOM: BOM定义了JavaScript可以进行操作的浏览器的各个功能部件的接口

##### h5和原生android的优缺点?
[Android界面 Html5还是Native，说说他们的各自的优缺点](https://blog.csdn.net/rockcode_li/article/details/39342999)

**Native app**
优点：
- 可以充分发挥系统特性（调用系统服务、内存管理等），操控设备硬件（如相机、蓝牙、振动器等）；
- 可提供最佳的用户体验，最优质的用户界面，最华丽的交互,比较适合制作游戏等性能要求比较高的应用；
- 可访问本地资源；
- 与web app相比，性能更好，交互流畅（尤其是复杂应用）。

缺点：
- 在更新的时候需要发布新的版本，不够方便；
- 各平台开发语言、sdk和开发环境不同，学习成本高；
- 各平台不兼容，多平台的开发、移植比较复杂，开发成本高，开发周期长；
- 针对多种设备（不同分辨率、不同硬件配置等）的调试和适配较麻烦，开发成本高，开发周期长；
- 维持多个版本的成本比较高。

**web app**
优点：
- 使用web方式可以实现网页完成之后，可以在其他设备上使用，实现跨平台；
- 使用web方式制作mobie app最大的好处是，客户端无需更新，而且界面的更新由于是基于html5，可能只需要写几个插件就完成了功能的更新添加；
- 并且数据显示很多手机用户不是经常更新他的app程序，同时相对于native app，web方式修改app的界面的成本更低一些。
- 所以说，对于对界面的灵活性有较高要求的app，比较倾向于用web方式实现mobie app。

缺点：
- 受限于手机浏览器的支持，纯粹的移动Web App（指在浏览器里面运行的应用程序，而不是Hybrid App）目前只能访问摄像头、麦克风和地址簿等设备功能。
- 虽然万维网联盟（W3C）方面的工作取得了进展，让Web App可以访问这类设备服务，
- 但是移动浏览器目前并不提供这样的功能——移动浏览器提供这样的功能对许多创新型的移动应用程序来说是一个关键要求；
- 而且性能上无法充分发挥系统特性（调用系统服务、内存管理等），无法操控设备硬件（如相机、蓝牙、振动器等）。

##### HTML5 drag api
- dragstart：事件主体是被拖放元素，在开始拖放被拖放元素时触发，。
- darg：事件主体是被拖放元素，在正在拖放被拖放元素时触发。
- dragenter：事件主体是目标元素，在被拖放元素进入某元素时触发。
- dragover：事件主体是目标元素，在被拖放在某元素内移动时触发。
- dragleave：事件主体是目标元素，在被拖放元素移出目标元素是触发。
- drop：事件主体是目标元素，在目标元素完全接受被拖放元素时触发。

- dragend：事件主体是被拖放元素，在整个拖放操作结束时触发

##### iframe标签的优缺点
优点：
1. iframe能够原封不动的把嵌入的网页展现出来。
2. 如果有多个网页引用iframe，那么你只需要修改iframe的内容，就可以实现调用的每一个页面内容的更改，方便快捷。

缺点：
1. 阻塞主页面的onload事件
2. 搜索引擎无法解读这种页面，不利于SEO
3. iframe和主页面共享连接池，而浏览器对相同区域有限制所以会影响性能。
4. 页面样式调试麻烦，出现多个滚动条
5. 浏览器后退按钮失效


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

#### canvas使用过程中性能问题？drawImage使用过程中有什么问题？



