//  简单的实现一个promise
//  [实现一个完美符合Promise/A+规范的Promise](https://github.com/forthealllight/blog/issues/4)

function myPromise(constructor) {
    let self = this
    self.status = 'pending'
    self.value = undefined    // resolve时候的值
    self.reason = undefined   // reject时候的状态值
    self.resolveArray = []    // resolve时候的数组
    self.rejectArray = []     // reject时候的数组

    function resolve(value){
        if(self.status === 'pending') {
            self.status = 'resolved'
            self.value = value
            self.resolveArray.forEach((f)=>{
                f()
            })
        }
    }

    function reject(reason){
        if(self.status === 'pending') {
            self.status = 'rejected'
            self.reason = reason
            self.rejectArray.forEach((f)=> {
                f()
            })
        }
    }

    try {
        constructor(resolve,reject)
    } catch(e){
        reject(e)     //  ?
    }
}

myPromise.prototype.then = function(onFullfilled, onRejected){
    let self = this
    let promise2
    switch(self.status) {
        case 'pending':
            promise2 = new myPromise(function(resolve,reject){
                self.resolveArray.push(function(){
                    try{
                        let temple = onFullfilled(self.value);
                        resolve(temple);
                    } catch(e) {
                        reject(e)
                    }
                });
                self.rejectArray.push(function(){
                    try{
                        let temple = onRejected(self.reason);
                        resolve(temple)
                    } catch(e){
                        reject(e)
                    }
                });
            });
            break;
        case 'resolved':
            onFullfilled(self.value);
            break;
        case 'rejected':
            onRejected(self.reason);
            break;
        default:
    }
    return promise2
}

let p = new myPromise(function(resolve,reject){
    setTimeout(function(){
        resolve('successed hahaha')
    },1000)
})

p.then(function(value){
    console.log(value+'dff')
    return 'ceshiya'
}).then(function(value){
    console.log("链式调用"+value)
})


