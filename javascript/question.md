##### 手写一个select组件，就是点一下select出来一个列表，点击列表项select自动填充。
[问题来源](https://zhuanlan.zhihu.com/p/28771824)

##### 手写用setTimeout模拟setInterval?
[setTimeout与setInterval区别](http://blog.csdn.net/baidu_24024601/article/details/51862488) 

    setTimeout(function(){
        //do something
        setTimeout(arguments.callee,interval);
    },interval)
    
上面实现了递归调用，这样做的好处是：在前一个定时器代码执行完成之前，不会向队列插入新的定时代码，确保不会有任何的缺失间隔。而且，它保证在下一次定时器代码执行之前，至少要等待指定的时间间隔。


##### 给一个字符串数组，根据他们的开头分类?
    function order(strArr){
        let hash = {}
        strArr.forEach(e=>{
            let key = e.substring(0,1)
            if(hash[key]) hash[key].push(e)
            else hash[key] = [e]
        })
        return hash
    }

##### 给定一个元素获取它相对于视图窗口的坐标
getBoundingClientRect
返回的是调用该方法的元素的TextRectangle对象，该对象具有
top、left、right、bottom
四个属性，分别代表该元素上、左、右、下四条边界相对于浏览器窗口左上角（注意，不是文档区域的左上角）的偏移像素值。


##### offsetHeight, scrollHeight, clientHeight分别代表什么
1. clientHeight和clientWidth用于描述元素内尺寸，是指 元素内容+内边距 大小，不包括边框（IE下实际包括）、外边距、滚动条部分

2. clientTop和clientLeft返回内边距的边缘和边框的外边缘之间的水平和垂直距离，也就是左，上边框宽度

3. offsetHeight和offsetWidth用于描述元素外尺寸，是指 元素内容+内边距+边框，不包括外边距和滚动条部分

4. offsetTop和offsetLeft表示该元素的左上角（边框外边缘）与已定位的父容器（offsetParent对象）左上角的距离

5. offsetParent对象是指元素最近的定位（relative,absolute）祖先元素，递归上溯，如果没有祖先元素是定位的话，会返回null

6. `var x = window.scrollX;` //以像素为单位，返回水平轴上document已经被卷去的宽度,同pageXOffset，为了跨浏览器兼容性，请使用window.pageXOffset

7. `var y = window.scrollY;` //以像素为单位，返回垂直方向上document被卷曲的高度，同pageYOffset ，为了跨浏览器兼容性，请使用 window.pageYOffset

8. scrollWidth  // 返回元素的宽度（包括元素宽度、内边距和溢出尺寸，不包括边框和外边距），无溢出的情况，与clientWidth相同

9. scrollHeigh  // 返回元素的高度（包括元素高度、内边距和溢出尺寸，不包括边框和外边距），无溢出的情况，与clientHeight相同

[参考](https://www.cnblogs.com/ifworld/p/7605954.html)

##### 格式化编码
serialize()      输出序列化表单的值

编码函数：
编码：escape     encodeURI    encodeURIComponent
解码：unescape   decodeURI    decodeURIComponent

[参考](https://www.cnblogs.com/luckyuns/p/6396701.html)

##### javascript中sleep方法的实现
[es5、promise、async以及generator中实现sleep的方法](https://blog.csdn.net/liwusen/article/details/78489442)

##### 简单的实现一个promise
[实现一个完美符合Promise/A+规范的Promise](https://github.com/forthealllight/blog/issues/4)

[手把手教你实现一个完整的 Promise](https://www.cnblogs.com/huansky/p/6064402.html)



