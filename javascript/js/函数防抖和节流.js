/**********************************************函数防抖和节流**************************************************************/
// 参考： https://juejin.im/post/5a35ed25f265da431d3cc1b1
// 函数防抖及用例-----------------------模拟一段ajax请求
function ajax(content) {
    console.log('ajax request' + content)
}

// 防抖函数, 防抖： 单位时间内最多执行一次操作，再次操作重新计算时间
function debounce(fun, delay) {
    return function(args) {
        let that = this;
        let _args = args;
        clearTimeout(fun.id);
        fun.id = setTimeout(function() {
            fun.call(that, _args)
        }, delay)
    }
}

let inputb = document.getElementById('debouce');

let debounceAjax = debounce(ajax, 500);

inputb.addEventListener('keyup', function(e) {
    debounceAjax(e.target.value);
})

// 函数节流： 规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效
function throttle(fn, gapTime) {
    let _lastTime = null;

    return function() {
        let _nowTime = +new Date()
        if (_nowTime - _lastTime > gapTime || !_lastTime) {
            fn();
            _lastTime = _nowTime
        }
    }
}

let throttleAjax = throttle(ajax, 1000);

let inputc = document.getElementById('throttle');
inputc.addEventListener('keyup', function(e) {
    throttleAjax(e.target.value);
})