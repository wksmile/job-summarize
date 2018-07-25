var result = {}

function transfrom(arr) {
    if(result.hasOwnProperty(""))
    transfrom(arr);
}

var obj = [
    {id:1,parent:null},
    {id:2,parent:1},
    {id:3,parent:2},
]

console.log(transfrom(obj))

