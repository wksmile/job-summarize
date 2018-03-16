/*  题目： 在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。   */
//  从左下角开始查找
function find(target, matrix) {
    var row = matrix.length-1;   //  当前的行
    var found = false;
    for(var i=row,j=0;i>=0 && j<matrix[0].length;){
        if(matrix[i][j] === target) {
            found = true;
            break;
        } else if(matrix[i][j] < target) {
            j++;
        } else {
            i--
        }
    }
    return found;
}
/******************************测试**********************/
var matrix = [
    [1,2,8,9],
    [2,4,9,12],
    [4,7,10,13],
    [6,8,11,15]
]
console.log(find('er',matrix));

