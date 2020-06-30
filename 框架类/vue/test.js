let data = {
    name: 'ewrf'
}

function observe(data) {
    if (!data || typeof data !== 'object') return
    Object.keys(data).forEach(function(key) {
        defineReavtive(data, key, data[key])
    })
}

function defineReavtive(data, key, val) {
    var dep = new Dep()
    observe(val)
    Object.defineProperty(data, key, {
        set: function(newVal) {
            if (newVal === val) return
            val = newVal
            dep.notify()
        },
        get: function() {
            Dep.target && dep.addSub(Dep.target)
            return val
        }
    })
}

function Dep() {
    this.subs = []
}

Dep.prototype = {
    notify() {
        this.subs.forEach(function(sub) {
            sub.update()
        })
    }
}

Watcher.prototype = {
    get: function(key) {
        Dep.target = this
        this.value = data[key]
        Dep.target = null
    }
}

function pressImage(img, toWidth, toHeight) {
    let canvas = document.createElement('canvas')
    canvas.width = toWidth
    canvas.height = toHeight
    canvas.getContext('2d').drawImage(img)
    let compressImg = canvas.toDataURL('image/jpeg', 0.7)
}