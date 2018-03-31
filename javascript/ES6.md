##### 怎么捕获Promise运行错误？
1. then().catch()
2. Promise内部`try{}.catch(e){ reject(e)}`把错误抛到后面的catch
3. `unhandledRejection`捕获Promise内未处理的错误

##### 箭头函数的好处？作用？与匿名函数的区别？
**好处**：
1. 箭头函数使得表达更加简洁。
2. 一个用处是简化回调函数
3. 箭头函数可以让this指向固定化，这种特性很有利于封装回调函数。

**注意**：
1. 函数体内的this对象，就是定义生效时所在的对象，而不是使用时所在的对象。即this对象的指向是可变的，但是在箭头函数中，它是固定的。因为箭头函数没有自己的this对象，所以不能使用call(),apply(),bind(),arguments等。
2. 不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
3. 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
4. 不可以使用yield命令，因此箭头函数不能用作 Generator 函数。

##### 如果已经有三个promise,A，B,C怎么串行执行？
详见testBind.js

##### Promise实现ajax?
[使用Promise封装简单Ajax方法](https://www.jianshu.com/p/143458fb747c)

参见script.js文件

##### ES6箭头函数和普通函数的区别？
1. 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。this对象的指向是可变的
2. 不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。因为箭头函数没有this，而是引用了外层的this
3. 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
4. 不可以使用yield命令，因此箭头函数不能用作 Generator 函数

