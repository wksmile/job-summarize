//继续线程占用
setInterval(function(){
  var j = 0;
  while(j++ < 100000000);
}, 0);

//倒计时
var  interval = 1000,
  ms = 50000,  //从服务器和活动开始时间计算出的时间差，这里测试用50000ms
  count = 0,
  startTime = new Date().getTime();
if( ms >= 0){
  var timeCounter = setTimeout(countDownStart,interval);
}

function countDownStart(){
  count++;
  var offset = new Date().getTime() - (startTime + count * interval);
  var nextTime = interval - offset;
  var daytohour = 0;
  if (nextTime < 0) { nextTime = 0 };
  ms -= interval;
  console.log("误差：" + offset + "ms，下一次执行：" + nextTime + "ms后，离活动开始还有：" + ms + "ms");
  if(ms < 0){
    clearTimeout(timeCounter);
  }else{
    timeCounter = setTimeout(countDownStart,nextTime);
  }
}

function count() {
  count++;
  var offset = new Date().getTime() - (startTime + count*interval);
  var nextTime = interval - offset;
  if(nextTime < 0) {nextTime=0};
  ms -= interval;
  if(ms<0) clearTimeout(timeCounter)
  else timeCounter = setTimeout(countDownStart,nextTime)
}