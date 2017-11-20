### DOM事件类
- DOM事件的级别？DOM2?
- DOM事件模型，即事件冒泡，捕获等？
- DOM事件流？
- 描述DOM事件捕获的具体流程？
- Event对象的常见应用？
- 自定义事件（重要）？

##### DOM事件级别
- DOM0,element.onclick=function(){}
- DOM2,element.addEventListener('click',function(){},false)
- DOM3增加了一些事件类型,element.addEventListener('keyup',function(){},false)

##### 事件模型
- 捕获：从上到下
- 冒泡：从当前元素向上

##### 事件流
- 概念：事件怎么发生一直到响应
- 阶段：捕获 -> 目标阶段 -> 冒泡

##### 描述DOM事件捕获的具体流程
- 事件捕获流程：window->document->html标签->body->...->目标元素(html标签不能通过document.html获取，通过document.documentElement获取到html标签)
- 事件冒泡流程：与捕获流程相反

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
