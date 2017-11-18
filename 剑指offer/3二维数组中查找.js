//  二维数组中的查找,从右上角开始查找

function find(matrix, number) {
    var rows = matrix.length;     //  行数
    var columns = matrix[0].length;    //   列数
    var found = false;
    if(matrix != null && rows > 0 && columns > 0){
        var row = 0;               //    矩阵中右上角数的当前行
        var column = columns-1;    //  矩阵中右上角数所在的当前列
        while(row < rows && column >= 0) {
            if(matrix[row][column] === number) {
                found = true;
                break;
            } else if (matrix[row][column] > number) {
                --column;
            } else {
                ++row;
            }
        }
    }
    return found;
}

//  二维数组中的查找,从左下角开始查找
function findFromleftDown(matrix, number) {
    var rows = matrix.length;     //  行数
    var colums = matrix[0].length;    //  列数
    var found = false;
    if(matrix != null && colums > 0 && rows > 0) {
        var row = rows - 1;          //  左下角所在的行
        var colum = 0;               //  左下角所在的列
        while(row >= 0 && colum < colums) {
            if(matrix[row][colum] === number) {
                found = true;
                break;
            } else if(matrix[row][colum] > number) {
                --row;
            } else {
                ++colum;
            }
        }
    }
    return found;
}

/***************************测试***********************************/

var matrix = [
    [1,2,8,9],
    [2,4,9,12],
    [4,7,10,13],
    [6,8,11,15]
]

console.log('从右上角开始', find(matrix, 15));

console.log('从左下角开始', findFromleftDown(matrix,1));
