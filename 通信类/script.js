// ajax的实现
var xhr = new(window.XMLHttpRequest || ActiveXObject)('Microsoft.XMLHTTP');

xhr.open('get', 'www.baidu.com', false);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
            // 请求成功
        } else {
            // 请求失败
        }
    }
}

/*****************************************************************/