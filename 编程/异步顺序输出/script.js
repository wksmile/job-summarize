function f1 () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(2)
        },200)
    })
}

function f2 () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(1)
        },200)
    })
}

function f3 () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(5)
        },200)
    })
}

var arr = [f1,f2,f3];

// async函数执行
async function fn() {
    for(var i=0;i<3;i++){
        console.log(await arr[i]())
    }
}

// 普通函数串行执行
function fn1(arr){
    (arr.shift()()).then(function (a) {
        console.log(a);
        if(arr.length>0){
            fn1(arr);
        }
    })
}

// fn();
fn1(arr);


