var num = 3;
var turn = 'LRR';
var turnArr = turn.split('');
var sd = 'N';    // 当前方向
var currentTurn;  // 当前转向
var currentStr = ['N','E','S','W'];

var currIndex

for(var i=0;i<num;i++){
  currentTurn = turnArr[i];
  if(currentTurn === 'L') {
    if(currentStr.indexOf(sd) === 0) {
      sd = 'W'
    } else {
      currIndex = currentStr.indexOf(sd);
      sd = currentStr[currIndex-1]
    }
  } else if(currentTurn === 'R') {
    if(currentStr.indexOf(sd) === 3) {
      sd = 'N'
    } else {
      currIndex = currentStr.indexOf(sd);
      sd = currentStr[currIndex+1]
    }
  }
}

console.log(sd)


