//  替换空格  时间复杂度n2,将字符串中的每一个空格替换为%20
function replaceSpaceTo20(str) {
    return str.replace(/\s+/g, function (restr) {
        var length = restr.length;
        var re = '%20';
        // while(--length){
        //     re += re;
        // }
        return re.repeat(length);
    });
    //  return str.replace(/\s+?/g,'%20')  这句话就可以
}

/*************************测试***********************/

console.log(replaceSpaceTo20('We are  happy'));


//  题目：有两个排序的数组A1和A2,把A2中的所有数字插入到A1中并且所有的数字是排序的
//  若是从A1中从头到尾比较复制数字可能会出现多次复制同一个数字的情况，我们可以提前算出复制后得到的数组的长度，然后从后往前比较A1和A2中的数字，并把比较大的数字复制到A1的合适位置

function compressTwoArray(a1,a2) {
    var a1index = a1.length - 1;  //  当前的a1索引
    var a2index = a2.length - 1;  //  当前的a2索引
    var resultindex = a1index+a2index+1;
    while(a1index >= 0 && a2index >= 0) {
        if(a1[a1index] < a2[a2index]) {
            a1[resultindex] = a2[a2index];
            a2index--;
        } else {
            a1[resultindex] = a1[a1index];
            a1index--;
        }
        resultindex--;
    }
    if(a1index<0) {
        a1.splice(0,resultindex+1,...a2.slice(0,resultindex+1))
    }
    return a1;
}

/***************************测试********************************/

var a1 = [-10,0,1,9,9,14,67,200];
var a2 = [300,301,367];

console.log('字符串---', compressTwoArray(a1,a2));
