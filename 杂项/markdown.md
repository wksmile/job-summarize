## 通用的惰性单列

    var getSingle = function(fn) {
        var result;
        return function(){
            return result || (result = fn.apply(this, arguments));
        }
    }
    
    //把处理的逻辑分出来放在另一个函数中，通过getSingle处理后返回函数， 如下：
    var createLoginLayer = function(){
        var div = document.createElement('div');
        div.innerHTML = '我是登录浮窗';
        div.style.display = 'none';
        document.body.appendChild(div);
        return div;
    }
    
    var createSingleLoginLayer = getSingle(createLoginLayer);
    
    document.getElementById('loginBtn').onclick = function(){
        var loginLayer = createSingleLoginLayer();
        loginLayerstyle.display = 'block';
    }
    
##### 理解RESTful架构
[理解RESTful架构](http://www.ruanyifeng.com/blog/2011/09/restful.html)
[RESTful API 设计指南](http://www.ruanyifeng.com/blog/2014/05/restful_api)

**URL定位资源，HTTP描述操作**

- 在REST中的一切都被认为是一种资源。所以网址中不能有动词，只能有名词。
- 每个资源由URI标识。
- 使用统一的接口。处理资源使用POST，GET，PUT，DELETE操作类似创建，读取，更新和删除（CRUD）操作。
- 无状态。每个请求是一个独立的请求。从客户端到服务器的每个请求都必须包含所有必要的信息，以便于理解。
- 通信都是通过展现。例如XML，JSON

##### jpg和png有什么区别？
[jpg和png有什么区别？](https://www.zhihu.com/question/29758228)

1. GIF（87年）：使用无损压缩，支持256中颜色（一般叫8 bit彩色），支持单一透明色；
2. JPG（92年）：使用的一种失真压缩标准方法，24 bit真彩色，内容比GIF丰富，不支持动画、不支持透明色。
3. PNG:格式是无损数据压缩的,PNG格式有8位、24位、32位三种形式,其中8位PNG支持两种不同的透明形式（索引透明和alpha透明）,24位PNG不支持透明,32位PNG在24位基础上增加了8位透明通道（32-24=8）,因此可展现256级透明程度。
4. alpha通道：描述图片中的透明区域，此透明区域允许通透地显示背景。

##### 浏览器SEO优化解决方案？
[前端SEO优化的一些解决方案](https://blog.csdn.net/take_dream_as_horse/article/details/53064508)
[前端SEO技巧](https://www.cnblogs.com/EnSnail/p/5671345.html)

1. 使用HTML5语义化的标签
2. meta描述。可定义关键词、网站描述。
    
    
    <meta name="keywords" content="关键词1，关键词2" />
    < meta name="description" content="描述1，描述2" />
    
3. 前景图片img添加alt属性
4. title标题，概括强调
5. a标签：页内链接，要加 “title” 属性加以说明，让访客和 “蜘蛛” 知道。而外部链接，链接到其他网站的，则需要加上 el="nofollow" 属性, 告诉 “蜘蛛” 不要爬，因为一旦“蜘蛛”爬了外部链接之后，就不会再回来了。
6. 表格应该使用caption表格标题标签
7. 重要内容不要用js输出
8. 尽量少用iframe框架
9. 后端渲染。[前后端渲染和同构渲染](https://blog.csdn.net/qizhiqq/article/details/70904799)

##### 移动端适配问题？
[移动端适配](https://www.cnblogs.com/MaggieGao/p/6994868.html)

##### 常用的图片格式有哪些？他们的使用场景是什么？



