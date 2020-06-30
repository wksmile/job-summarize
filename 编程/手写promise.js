//  简单的实现一个promise
//  [实现一个完美符合Promise/A+规范的Promise](https://github.com/forthealllight/blog/issues/4)

function myPromise(constructor) {
    let self = this
    self.status = 'pending'
    self.value = undefined // resolve时候的值
    self.reason = undefined // reject时候的状态值
    self.resolveArray = [] // resolve时候的数组
    self.rejectArray = [] // reject时候的数组

    function resolve(value) {
        if (self.status === 'pending') {
            self.status = 'resolved'
            self.value = value
            self.resolveArray.forEach((f) => {
                f()
            })
        }
    }

    function reject(reason) {
        if (self.status === 'pending') {
            self.status = 'rejected'
            self.reason = reason
            self.rejectArray.forEach((f) => {
                f()
            })
        }
    }

    try {
        constructor(resolve, reject)
    } catch (e) {
        reject(e) //  ?
    }
}

myPromise.prototype.then = function(onFullfilled, onRejected) {
    let self = this
    let promise2
    switch (self.status) {
        case 'pending':
            promise2 = new myPromise(function(resolve, reject) {
                self.resolveArray.push(function() {
                    try {
                        let temple = onFullfilled(self.value);
                        resolve(temple);
                    } catch (e) {
                        reject(e)
                    }
                });
                self.rejectArray.push(function() {
                    try {
                        let temple = onRejected(self.reason);
                        resolve(temple)
                    } catch (e) {
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

let p = new myPromise(function(resolve, reject) {
    setTimeout(function() {
        resolve('successed hahaha')
    }, 1000)
})

p.then(function(value) {
    console.log(value + 'dff')
    return 'ceshiya'
}).then(function(value) {
    console.log("链式调用" + value)
})


/** 实现一个高阶函数createRequest,封装ajax函数请求，可以控制最大并发数， 参考https://juejin.im/post/5b99ceb25188255c5e66ceea */
function createRequest({pool}) {
    let currentNum = 0    // 当前执行的数量
    let blockList = []   // 阻塞列表

    function starBlocking() {
        let _resolve
        let promise = new Promise((resolve, reject) => {
            _resolve = resolve
        })
        blockList.push(_resolve)
        return promise
    }

    function next() {
        let _reslove = blockList.shift()
        _reslove()
    }

    return async function(...args) {
        if(currentNum >= pool) {
            await starBlocking()
        }
        try{
            currentNum++
            // 这里的ajax是一个请求函数
            const result = await ajax(...args)
            return Promise.resolve(result)
        } catch(err) {
            Promise.reject(err)
        } finally {
            currentNum--
            next()
        }
    }
}


// 实现一个并发数限制的函数，有fetch请求函数，
function handleFetchQueue(urls, max, callback) {
    const urlCount = urls.length;
    const requestsQueue = [];
    const results = [];
    let i = 0;
    const handleRequest = (url) => {
      const req = fetch(url).then(res => {
        const len = results.push(res);
        if (len < urlCount && i + 1 < urlCount) {
          requestsQueue.shift();
          handleRequest(urls[++i])
        } else if (len === urlCount) {
          'function' === typeof callback && callback(results)
        }
      }).catch(e => {
        results.push(e)
      });
      if (requestsQueue.push(req) < max) {
        handleRequest(urls[++i])
      }
    };
    handleRequest(urls[i])
  }

  function handleRequest(urls, max, callback) {
      // 当前并发数
      let i = 0
      // 存放结果
      let results = []
      let urlsLen = urls.length
      let requestFun = (url) => {
        fetch(url).then(res => {
            result.push(res)
            let resultLen = result.length
            if(resultLen <= urlsLen) {
                requestFun(urls[++i])
            } else {
                typeof callback === 'function' && callback()
            }
        })
      }

      if(currentNum < max) {
        requestFun(urls[++i])
      }
  }

