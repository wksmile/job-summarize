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
