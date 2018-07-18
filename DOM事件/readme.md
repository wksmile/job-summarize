##### DOM事件的级别？DOM2?
- DOM0,element.onclick=function(){}
- DOM2,element.addEventListener('click',function(){},false)
- DOM3增加了一些事件类型,element.addEventListener('keyup',function(){},false)

false参数表示事件句柄在冒泡阶段执行，true表示在捕获阶段执行

早期IE浏览器：
dom.attachEvent("onclick",handler)
dom.detachEvent("onclick",handler)

##### DOM事件模型，即事件冒泡，捕获等？
- 捕获：从上到下
- 冒泡：从当前元素向上

##### DOM事件流？
- 概念：事件怎么发生一直到响应
- 阶段：捕获 -> 目标阶段 -> 冒泡

##### 描述DOM事件捕获的具体流程？
- 事件捕获流程：window->document->html标签->body->...->目标元素(html标签不能通过document.html获取，通过document.documentElement获取到html标签)
- 事件冒泡流程：与捕获流程相反

这里可以把事件代理的应用说出来


##### Event对象的常见应用
1. event.preventDefault()阻止默认行为
2. event.stopPropagation()阻止冒泡
3. event.stopImmediatePropagation()事件响应优先级
4. event.currentTarget,当前所绑定的事件对象
5. event.target,当前点击的目标


##### 自定义事件
    var eve = new Event('custome');   // 定义事件名
    ev.addEventListener('custome',function(){
        console.log('custome');
    });
    ev.dispatchEvent(eve);   // 触发事件

- CustomEvent还可以加入一些数据，后接一个object对象，而event不能，其他的用法一样，学习下CustomEvent

[漫谈js自定义事件、DOM/伪DOM自定义事件](http://www.zhangxinxu.com/wordpress/2012/04/js-dom%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BA%8B%E4%BB%B6/)

##### 事件绑定中this和e.target的区别
js中事件是会冒泡的，所以this是可以变化的，但event.target不会变化，它永远是直接接受事件的目标DOM元素,[参考](https://www.jianshu.com/p/391291914754)

##### 如何让事件先冒泡后捕获？
在DOM标准事件模型中，是先捕获后冒泡。但是如果要实现先冒泡后捕获的效果，对于同一个事件，监听捕获和冒泡，分别对应相应的处理函数，监听到捕获事件，先暂缓执行，直到冒泡事件被捕获后再执行捕获之间。

