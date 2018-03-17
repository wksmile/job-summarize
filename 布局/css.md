##### css隐藏页面元素常用方法？

[参考](http://www.divcss5.com/rumen/r18099.shtml)
[参考](http://www.zhangxinxu.com/wordpress/2012/02/css-overflow-hidden-visibility-hidden-disabled-use/)

+ opacity设为0。从视觉上隐藏元素，而元素本身依然占据它自己的位置并对网页的布局起作用，并也将响应用户交互。但是会被读屏软件阅读。可以实现状态平滑地从透明过度到完全不透明。
+ visibility设为hidden。同opacity属性，被隐藏的元素依然会对我们的网页布局起作用，不同的是visibility不会响应任何用户的交互（不会响鼠标点击等事件），而且元素在读屏软件中也会被隐藏。可以实现时间平滑的过度动画。这个元素的子孙元素可以设置不同的visibility属性。
+ display设为none。元素不可见且不生成盒模型，隐藏的元素不占据任何空间。用户交互在该元素上不生效，读屏软件也不会读到元素的内容。任何这个元素的子孙元素也会被同时隐藏且不可改变。为这个属性添加过渡动画是无效的，它的任何不同状态值之间的切换总是会立即生效。不过可以通过js的dom访问到这个元素。
+ position设为absolute然后将位置设到不可见区域。这个办法既不会影响布局，有能让元素保持可以操作。隐藏的元素的内容可以被读屏软件读取，避免使用这个方法去隐藏任何可以获得焦点的元素。
+ 设置``clip-path:polygon(0px 0px,0px 0px,0px 0px,0px 0px);``隐藏元素。

> 总结如下：

- opacity     **占据文档流** 、 **响应交互** 、 **会被读屏** 、 **平滑过渡**
- visibility  **占据文档流** 、 **不会响应交互** 、 **不会被读屏** 、 **平滑过渡** 、 **子元素可以不同属性** 、 **重绘不会重排**
- display    **不占据文档流** 、 **不会响应交互** 、  **不会被读屏** 、  **不能平滑过渡** 、 **子元素必须相同属性** 、 **浏览器重排和重绘**
- position   **不会影响布局** 、 **会被读屏**

display与visibility区别

再进一步，当一个页面某个元素经常需要切换display时如何优化，一般会用复合层优化，或者要求低一点用absolute让其脱离普通文档流也行。然后可以将话题引到普通文档流，absolute文档流，复合图层的区别

普通文档流：元素按照其在 HTML 中的位置顺序决定排布的过程

可以描述下浏览器渲染原理以及复合图层和普通图层的绘制区别（复合图层单独分配资源，独立绘制，性能提升，但是不能过多，还有隐式合成等等）

absolute文档流：

##### css中不同单位的含义？
[参考](http://www.runoob.com/cssref/css-units.html)

##### 如何实现一个矩形的椭圆边角?

##### 移动端布局方案？
1. flex
2. media+百分比。页面主体布局基本采用百分比去设置。其他块内布局,例如font-size等可通过设置媒体查询的断点来分设置，以达到兼容其他手机尺寸。
    问题：
    - 媒体查询的断点设置麻烦，只能在选取的几个主流设备尺寸下呈现完美适配。
    - 1px的问题，需要额外做处理，比如transform:scaleX(0.5)
    
3. hotcss和flexible库。自动通过hotcss.js计算页面的html的font-size的大小，其后在布局中使用rem作为像素单位，使得页面在不同的移动设备上可以视觉一致。
4. vw+rem。在计算html的font-size时，是根据vw去自动计算，而不是用js脚本去动态计算。

##### flex特性
**display:flex**

**容器上的属性**

+ `flex-direction:row | row-reverse | column | column-reverse;` // 决定主轴的方向（即项目的排列方向）。

+ `flex-wrap:nowrap | wrap | wrap-reverse;` //如何换行。

+ flex-flow: row nowarp; 为默认值，flex-direction属性和flex-wrap属性的简写形式

+ `justify-content:flex-start | flex-end | center | space-between | space-around;` // 定义了项目在主轴上的对齐方式。

+ `align-items:flex-start | flex-end | center | baseline | stretch;` // 定义项目在交叉轴上如何对齐。

+ `align-content:flex-start | flex-end | center | space-between | space-around | stretch;` // 定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

**项目上的属性**

- `order:<integer>` 定义项目的排列顺序。数值越小，排列越靠前，默认为0。

- `flex-grow: <number>` 属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。

- `flex-shrink:<number>` 定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。

- `flex-basis: <length> | auto;`  定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。

- `flex`  flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto

- `align-self: auto | flex-start | flex-end | center | baseline | stretch;`  align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。 







