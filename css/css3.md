**问题**：
css动画，追问：js动画写过吗？
css动画：transform/transitions/animation

[参考:张鑫旭博客](http://www.zhangxinxu.com/wordpress/2010/11/css3-transitions-transforms-animation-introduction/)
[参考css vs js动画](http://zencode.in/19.CSS-vs-JS%E5%8A%A8%E7%94%BB%EF%BC%9A%E8%B0%81%E6%9B%B4%E5%BF%AB%EF%BC%9F.html)
[更好的逐帧动画函数-requestAnimationFrame简介](http://www.cnblogs.com/zichi/p/5208171.html)

requestAnimationFrame:
1. requestAnimationFrame 会把每一帧中的所有DOM操作集中起来，在一次重绘或回流中就完成，并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率，一般来说，这个频率为每秒60帧。

2. 在隐藏或不可见的元素中，requestAnimationFrame将不会进行重绘或回流，这当然就意味着更少的的cpu，gpu和内存使用量。

兼容的requestAnimationFrame:

    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              function( callback ){
                window.setTimeout(callback, 1000 / 60);
              };
    })();

**settimeOut问题**：
过度绘制，会导致丢帧

### css3中的变形处理？

利用transform功能实现文字或图像的 **旋转、缩放、倾斜、移动**这四种类型的变形处理。

###### 2D变形

**旋转**:顺时针transform:rotate(45deg)  

**缩放**：transform:scale(0.5)一个参数表示水平垂直缩放相同的倍率，两个参数分别表示水平和垂直方向

**倾斜**：transform:skew(30deg,30deg)一个参数表示水平方向倾斜，两个参数表示水平和垂直方向倾斜

**移动**：transform:translate(50px,50px)一个参数表示水平方向移动，两个参数表示水平和垂直方向移动

多个变形可以联合起来：

    transform: translate(150px,200px) rotate(45deg) scale(1.5);

    transform: rotate(45deg) scale(1.5) translate(150px,200px);

注意上面两个变换顺序不一样导致得到的结果也不一样。因为变换的上下左右旋转等是以当前的元素，不是视图。

###### 3D变形

> 可以将2D变形方法与3D变形方法同时书写在一行样式代码中

transform:scale(0.5) rotateX(30deg) rotateY(45deg);

**旋转**：transform:rotateX(45deg) rotateY(45deg) rotateZ(45deg)

**缩放**：transform:scaleX(0.5) scaleY(1) scaleZ(2); transform：scale(0.5,0.8)相当于transform:scaleX(0.5) scaleY(0.8)

**倾斜**：transform:skewX(45deg) skewY(45deg);顺时针方向倾斜，没有skewZ,倾斜是2维空间的变换。

**移动**：transform:translateX(50px) translateY(50px) translateZ(50px);

### CSS3中的动画功能

##### transitions

transitions功能通过将元素的某个属性值从一个属性值在指定的时间内平滑到另一个属性值来实现动画功能。

    transition: property duration timing-function
    // 以上代码是以下三个属性的简写
    transition-property(过渡的属性),transition-duration(过渡的时间),transition-timing-function(过渡的曲线方法,linear,ease,ease-in,ease-out,ease-in-out)
    
除了上述三个属性外，css3还有transition-delay属性，该属性指定变换动画特效延迟多久后开始执行。使用transition功能可以同时平滑过渡多个属性值。

可以通过改变元素的位置属性值，实现变形处理的transform属性值来让元素实现移动旋转等动画效果。

##### animations

使用transitions功能时只能通过指定属性的开始值与结束值，不能实现比较复杂的动画效果。而animations通过定义多个关键帧以及定义每个关键帧中元素的属性值来实现更为复杂的动画效果。

    @keyframes mycolor {
        0% {
            background-color: red
        }
        100% {
            background-color: yellow
        }
    }
    div:hover {
        animation-name: mycolor;
        animation-duration: 5s;
        animation-timing-function: linear;
    }
    
通过如下方法来创建关键帧的集合：

@keyframes 关键帧集合名{创建关键帧的代码}

属性名：
+ animation-name 关键帧集合名
+ animation-duration 动画完成时间
+ animation-timing-function 动画过度方法（linear,ease-in,ease-out,ease,ease-in-out）
+ animation-delay 延迟多少秒执行动画
+ animation-iteration-count 动画执行次数或无效次(infinite)
+ animation-direction  动画执行方向

总的书写方式： animation: 关键帧集合名 动画完成时间 动画过度方法 延迟多少秒执行动画 动画执行次数或无效次 动画执行方向;

可以在关键帧同时指定多个属性值可以实现多个属性值同时变化的动画。

##### js动画和css动画的差异性？
[参考](https://www.cnblogs.com/shuaishuaidejun/p/7444711.html)


##### js引擎怎么实现Class关键字？
   
   
##### 用过哪些预处理器，scss？那scss有存在什么缺点吗？

##### 百分比单位的分析
1. 子元素的height或width中使用百分比，是相对于子元素的直接父元素，width相对于父元素的width，height相对于父元素的height。
2. 子元素的top和bottom如果设置百分比，则相对于直接非static定位(默认定位)的父元素的高度。left和right相对于weight。
3. padding和margin如果设置百分比，无论垂直方向或者是水平方向都是相对于直接父元素的width
4. border-radius设置百分比，则是相对于**自身的宽度**，类似还有translate,background-size等属性

[响应式布局的常用解决方案对比(媒体查询、百分比、rem和vw/vh）](https://juejin.im/post/5b39905351882574c72f2808)

##### animation动画如何判断动画停止

animation-play-state 属性样式running paused


