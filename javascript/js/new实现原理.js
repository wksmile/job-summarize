function Person(name) {
    this.name = name;
    return function() {};
}

var person = new Person('John');

// 这里的new运算符实际发生的过程用下面伪代码表示
function ext(Person, args) {
    let extObj = {}
    extObj.__proto__ = Person.prototype
    let result = Person.apply(extObj, args)
    return typeof result === 'object' ? result : extObj
}