var Human = function (name) {
    return new Human.prototype.init(name);
}

Human.prototype = {
    eat:function() {
        console.log(this.name+" eat finsh");
        return this;
    },
    rest:function(t) {
        console.log(this.name+" rest at clock " + t);
        return this;
    },
    go:function() {
        console.log("Now "+ this.name +" go to sleep");
        return this;
    },
    sleep: function(t) {
        console.log("I sleep at clock " + t);
        return this;
    }
}

var init = Human.prototype.init = function (name) {
    this.name = name;
};
init.prototype = Human.prototype;

Human("jack").eat().rest(5).go().sleep(10)；

//  Human()函数内部调用了new Human.prototype.init()上的函数，并且new调用init，init当做构造函数调用，new调用默认返回this
//  name属性传给init当做init的实例属性，然后把init的原型值赋值为Human.prototype,其他方法调用会去Human.prototype上找。

