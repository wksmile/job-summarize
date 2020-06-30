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

// let inputb = document.getElementById('debouce');

let debounceAjax = debounce(ajax, 500);

// inputb.addEventListener('keyup', function(e) {
//     debounceAjax(e.target.value);
// })

// 函数节流： 规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效
function throttle(fn, time) {
    let isRun = true
    return function() {
        if (!isRun) return
        isRun = false
        setTimeout(function() {
            fn.apply(this.arguments)
            isRun = true
        }, time)
    }
}

// let throttleAjax = throttle(ajax, 1000);

// let inputc = document.getElementById('throttle');
// inputc.addEventListener('keyup', function(e) {
//     throttleAjax(e.target.value);
// })

// 数组扁平化
var drfff = [
    [1, 2, 2],
    [3, 4, 5, 5],
    [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10
];

function flatter(arr) {
    if (!Array.isArray(arr)) return []
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flatter(arr[i]))
        } else {
            result.push(arr[i])
        }
    }
    return result
}

console.log('flatter', flatter(drfff))