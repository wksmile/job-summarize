var $={};

var types = 'Array Object String Date RegExp Function Boolean Number Null Undefined'.split(' ');

function type () {
    return Object.prototype.toString.call(this).slice(8, -1);
}

for (var len = types.length,i=0;i<len; i++) {
    $['is' + types[i]] = (function (self) {
        return function (elem) {
            return type.call(elem) === self;
        };
    })(types[i]);
}

function copy (obj) {
    if ($.isFunction(obj)) {
        return new Function("return " + obj.toString())();
    } else if (obj === null || (typeof obj !== "object")) {
        return obj;
    } else {
        var name, target = $.isArray(obj) ? [] : {}, value;

        for (name in obj) {
            value = obj[name];

            if (value === obj) {
                continue;
            }
            if ($.isArray(value) || $.isObject(value)) {
                target[name] = copy(value,deep);
            } else if ($.isFunction(value)) {
                target[name] = new Function("return " + value.toString())();
            } else {
                target[name] = value;
            }
        }
        return target;
    }
}

var a = {name:"test",children:{name:function () {console.log("hahahahaha")}},sex: /[0-9a-z]g/};

var b = copy(a,true);

b.name = 'kk';

b.children.fn = function(){console.log("hahahaha")};

console.log(a);
console.log(b);


