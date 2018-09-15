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

async function fn() {
    for(var i=0;i<3;i++){
        console.log(await arr[i]())
    }
}

fn();


