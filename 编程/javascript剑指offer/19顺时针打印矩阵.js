/* 题目：输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，例如，如果输入如下矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.   */
/*
* 1.选坐标为(0,0),(1,1)…的点记为(start,start)，作为开始坐标,下一圈开始坐标为(start+1,start+1)；
 2.判断是否进入下一圈(即是否打印完成)的条件是rows>start*2 && cols>start*2；
 3.打印一圈的左上角坐标为(start,start)，右下角的坐标为(cols-start-1,rows-start-1)
 4.根据一圈左上角和右下角坐标判断“从左到右”，“从上到下”，“从右到左”，“从下到上”需要打印的点。
* */
function printMatrix(matrix) {
    if(matrix==null || matrix.length==0) return;
    var rows = matrix.length;
    var cols = matrix[0].length;
    var start = 0;
    var result = [];
    while(cols>start*2 && rows>start*2){
        // x,y方向边界值
        var endX = cols-1-start;
        var endY = rows-1-start;
        // 左到右
        for(var i=start;i<=endX;i++){
            result.push(matrix[start][i])
        }
        // 上到下
        if(start<endY){
            for(var i=start+1;i<=endY;i++){
                result.push(matrix[i][endX])
            }
        }
        // 右到左
        if(start<endX && start<endY){
            for(var i=endX-1;i>=start;i--){
                result.push(matrix[endY][i])
            }
        }
        // 下到上
        if(start<endX && start<endY-1){
            for(var i=endY-1;i>=start+1;i--){
                result.push(matrix[i][start])
            }
        }
        start++
    }
    return result;
}

var a = [
    [1,2],
    [5,6],
    [9,10],
    [13,14]
]
console.log('matrix:', printMatrix(a));
