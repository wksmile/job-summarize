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

- `flex`  flex-grow, flex-shrink 和 flex-basis的简写，默认值为 0 1 auto

- `align-self: auto | flex-start | flex-end | center | baseline | stretch;`  align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。 

##### 常用的伪类
:link   选中所有尚未访问的链接   <br>
:visited 选中已经访问的链接      <br>
:hover   会在光标（鼠标指针）悬停在元素上时提供关联的样式。    <br>
:active 匹配被用户激活的元素,通常用来tab键的交互，代表按下按键和松开按键的时间，还用于a,button标签     <br>
链接伪类的先后顺序**LVHA**： :link - :visited - :hover - :active

:checked  表示任何处于选中状态的radio(<input type="radio">), checkbox (<input type="checkbox">) 或("select") 元素中的option HTML元素("option")) 。  

:disabled 是 CSS 伪类，表示任何被禁用的元素。如果一个元素不能被激活（如选择、点击或接受文本输入）或获取焦点，则该元素处于被禁用状态。

:first-child , :last-child , :nth-child() , :focus , :root(表示html元素，优先级更高)  <br>
:not(X) CSS否定伪类，它匹配不符合参数选择器X描述的元素。X不能包含另外一个否定选择器。

##### css中inline和inline-block的区别
inline:内联元素，元素前后没有换行符。多个内联元素排在同一行，直到一行排不下。设置width,height无效，margin,padding只有水平方向有效。

inline-block:行内块元素。排在同一行，但可以设置height,width,padding,margin.

block:块级元素.block元素可以包含block元素和inline元素；但inline元素只能包含inline元素。但p标签只能包含inline元素。独占一行，可设置width,height,margin,padding

##### 清除浮动的几种方法？
[参考](https://www.cnblogs.com/Gabriel-Wei/p/6184392.html)

1. 父级div定义height,解决父级div无法自动获取到高度的问题。只适合高度固定的布局，要给出精确的高度。（不推荐）
2. 父级内结尾处加空div标签 clear:both。（兼容性好）
3. 父级div定义 伪类:after{clear:both} 和 zoom。
4. 父级元素定义overflow:hidden。（BFC）
5. 父级div也一起浮动。造成新的浮动问题。（不推荐）
6. 父级div定义display:table,将div属性变成表格。（不推荐）


##### bootstrap清除浮动的方法？
[Bootstrap清除浮动的实现原理](https://segmentfault.com/a/1190000008424822)
Boostrap清除浮动的css如下：

    .clearfix:before,
    .clearfix:after {
        content: " ";
        display: table;
    }
    
    .clearfix:after {
        clear: both;
    }

##### css实现一个正方形？
[参考](https://www.cnblogs.com/wwlhome/p/5897320.html)

1. vw单位，1vw=1% viewport width
2. padding-bottom,padding百分比相对父元素宽度计算
3. padding-bottom+:after+absolute


##### css值的解析过程？（不是页面）


##### 两个嵌套的div，position都是absolute，子div设置top属性，那么这个top是相对于父元素的哪个位置定位的
**margin的外边缘**,通常我们可能只注意到了margin，padding这些，实际上，margin的外面还有一层position（top，left，right，bottom）。


##### Bootstrap中栅格系统如何实现？
[参考](https://www.cnblogs.com/kidney/p/5351133.html)

1. 12列的栅格体系，根据主流设备的尺寸进行分段，每段宽度固定，通过百分比和媒体查询实现响应式布局。顶层的container宽度固定。所有元素的盒模型 box-sizing:border-box.
2. container宽度小于固定宽度30px，左右留15px margin居中。并且contsiner左右15px的padding.
3. column必须包含在row中，每个row有margin-left:-15px;margin-right:-15px;因此row的宽度比container宽30px。
4. 每个栅格之间需要间隔，column栅格都设置了15px的padding.意味着每个column实际上也可以看成一个container。可以在任意一个column内再嵌套一个栅格系统，而无需再添加container，只需添加一个row。

##### 浮动元素的display是什么？
[float、position与display关系](https://blog.csdn.net/baoxiaofeicsdn/article/details/58603959)

浮动元素的display为block

##### css3文字溢出的处理？
[css3控制单行文本的溢出](https://www.cnblogs.com/fengxiongZz/p/6535357.html)

**text-overflow**用来设置是否使用一个省略标记（...）标示对象内文本的溢出。语法：

    text-overflow:clip | ellipsis
clip显示剪切，ellipsis显示省略标记

但是text-overflow只是用来说明文字溢出时用什么方式显示，要实现溢出时产生省略号的效果，还须定义强制文本在一行内显示（white-space:nowrap）及溢出内容为隐藏（overflow:hidden），只有这样才能实现溢出文本显示省略号的效果，代码如下：

        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

**word-wrap**:当前行超过指定容器的边界时是否断开转行

    word-wrap:normal | break-word
normal:控制连续文本换行，break-word:表示内容将在边界换行
    
##### grid布局
                display: grid;
                grid-template-rows: 100px;    // 行高
                grid-template-columns: 300px auto 300px; // 列宽


