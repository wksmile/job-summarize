### 题目：谈谈你对css盒模型的认识

1. 基本概念：标准模型+IE模型。 有margin,border,padding,content，别忘了IE模型
2. 标准模型和IE模型的区别？ 计算宽度和高度的不同。怎么计算？
3. css如何设置获取这两种模型的宽和高？
4. js如何设置获取盒模型对应的宽和高
5. 实例题（根据盒模型解释边距重叠）
6. BFC（边距重叠解决方案，还有IFC），要引出这个概念

### 回答

 1. 标准模型的宽和高就是content，IE模型宽和高还包括padding和border。
 2. box-sizing:content-box/border-box   content-box指标准模型，border-box指IE模型
 4.  （1）dom.style.width/height 只能取到内联样式的宽和高，style标签和外链的样式取不到
     （2）dom.currentStyle.width/height 取到的是最终渲染后的宽和高，只有IE支持
     （3）window.getComputedStyle(dom).width/height  同（2）但是多浏览器支持
     （4）dom.getBoundingClientRect().width/height同（3），除此可以取到相对于视窗的上下左右的距离
 5. 根据盒模型解释边距重叠
    例如boxModel.html中id为sec的示例中，父元素的高度是多少。100px，这里是100px，但是给sec加上overflow:hidden后父元素的高度变成110px，这是因为给父级元素创建了BFC。
    
    
### 知识点补充

##### 边距重叠
两个上下方向相邻的元素框垂直相遇时，外边距会合并，合并后的外边距的高度等于两个发生合并的外边距中较高的那个边距值，需要注意的是：只有普通文档流中块框的**垂直**外边距才会发生外边距合并。行内框、浮动框或绝对定位之间的外边距不会合并。

##### BFC(边距重叠解决方案)
> BFC的基本概念:块级格式化上下文

> BFC的原理（渲染规则）：

[参考](http://www.zhangxinxu.com/wordpress/2015/02/css-deep-understand-flow-bfc-column-two-auto-layout/)

1. 属于不同BFC外边距不会发生重叠
2. BFC的区域不会与浮动元素的布局重叠
3. BFC元素是一个独立的容器，外面的元素不会影响里面的元素。里面的元素也不会影响外面的元素
4. 计算BFC高度的时候，浮动子元素也会参与计算(清除浮动)

> 如何创建BFC
1. overflow不为visible;
2. float的值不为none；
3. position的值不为static或relative；
4. display属性为inline-blocks,table,table-cell,table-caption,flex,inline-flex;

> BFC的使用场景
1. BFC.html中#margin中给第二个p元素加一个父元素并加上样式overflow:hidden创建BFC，使得该p元素的上下边距不会重叠。(1原理)
2. BFC.html中#layout中.right元素的高度超出左侧元素的高度会与左侧浮动元素重叠。可以在.right中增加overfloat:auto创建BFC不会与浮动元素重叠（原理2）
3. BFC.html中#float中由于子元素.float浮动，使得父元素的高度为0，在父元素#float中加上overfloat:auto使得父元素为BFC（原理4）


##### IFC
**IFC规律**

1. 框会从包含块的顶部开始，一个接一个地水平摆放。

2. 摆放这些框时，它们在水平方向的 内外边距+边框 所占用的空间都会被考虑； 在垂直方向上，这些框可能会以不同形式来对齐： 水平的margin、padding、border有效，垂直无效。不能指定宽高;

3. 行框的宽度是 由包含块和存在的浮动来决定; 行框的高度 由行高来决定

影响IFC的css
- font-size
- line-height
- height
- vertical-align


        
        