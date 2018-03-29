### 前端安全分类
- CSRF
- XSS

##### CSRF问题
- 基本概念和缩写？
    + CSRF,通常称为跨站请求伪造，英文名Cross-site request forgery缩写CSRF
- 攻击原理？<img src="./safe.png">

- 防御措施？
    + Token验证，因为攻击携带的是原来网站的cookie，并没有带token
    + Referer验证  
    + 隐藏令牌 
    
##### XSS
- 基本概念缩写：cross-site scripting跨域脚本攻击
- 攻击原理,防御措施： http://www.imooc.com/learn/812
- 对比CSRF和XSS的区别?
    xss：用户过分信任网站，放任来自浏览器地址栏代表的那个网站代码在自己本地任意执行。如果没有浏览器的安全机制限制，xss代码可以在用户浏览器为所欲为； 
    csrf：网站过分信任用户，放任来自所谓通过访问控制机制的代表合法用户的请求执行网站的某个特定功能。
- 防御措施？
    + 设置HttpOnly头
    + 在表单提交或者url参数传递前，对需要的参数进行过滤
    + 编码转义HTMLEncode

**问**：对前端安全的理解？
* XSS
* CSRF
* SQL注入
* 点击劫持
* 社会工程学 [链接](https://www.zhihu.com/question/26113526?sort=created)
* 攻防方式

##### 点击劫持
> 恶意网站使用 <iframe> 标签把我方的一些含有重要信息类如交易的网页嵌入进去，然后把 iframe 设置透明，用定位的手段的把一些引诱用户在恶意网页上点击。

**防范**：
1. 判断顶层视口的域名和本页面的域名是否一致，不一致就跳转到我方的网页 ``top.location.hostname !== self.location.hostname``
2. 通过配置 nginx 发送 X-Frame-Options 响应头，这样浏览器就会阻止嵌入网页的渲染。[参考](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/X-Frame-Options)



