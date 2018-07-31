/*
*  说明：将下面的对象根据parentId转化为层次的树结构
*  [参考](https://blog.csdn.net/qq_37746973/article/details/78664079)
* */

var data = [
    {
        parentId: 0,
        id: 1,
        value: '1'
    },
    {
        parentId: 3,
        id: 2,
        value: '2'
    },
    {
        parentId: 0,
        id: 3,
        value: '3'
    },
    {
        parentId: 1,
        id: 4,
        value: '4'
    },
    {
        parentId: 1,
        id: 5,
        value: '5'
    }];

function buildTree(data) {
    var temp = {};
    var tree = {};
    for(let i in data){
        temp[data[i].id] = data[i];
    }

    for(let j in temp){
        if(temp[j].parentId){
            if(!temp[temp[j].parentId].children) {
                temp[temp[j].parentId].children = [];
            }
            temp[temp[j].parentId].children.push(temp[j]);
        } else {
            tree[temp[j].id] = temp[j];
        }
    }
    return tree;
}

console.log(buildTree(data))


