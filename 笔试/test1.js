var arr1 = [1,2,[3,4,[5,[6]],[[6,90]]]];

function flat(input){
    var arr = [];
    input.forEach((item,idx)=>{
        if(Array.isArray(item)){
            arr=arr.concat(flat(item));
        }else{
            arr.push(item)
        }

    })
    return arr
}

console.log(flat(arr1));
