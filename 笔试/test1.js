/*请完成下面这个函数，实现题目要求的功能
 当然，你也可以不按照下面这个模板来作答，完全按照自己的想法来 ^-^
 ******************************开始写代码******************************/
function groupList(list) {
  if(!Array.isArray(list) || !list) return []
  var len = list.length,
    current,
    result = {}
  for(var i=0;i<len;i++){
    current = list[i];
    if(Object.toString.call(current) !== "[object Object]") continue;
    if(current.type){
      if(!result[current.type]) result[current.type] = [current.content]
      else result[current.type].push(current.content);
    }
  }
  console.log(result);
}

/******************************结束写代码******************************/

var input = read_line();
var data = JSON.parse(input);
var result = groupList(data);
console.log(JSON.stringify(result));
