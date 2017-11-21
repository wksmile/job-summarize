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