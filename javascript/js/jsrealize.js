// by zhangxinxu welcome to visit my personal website http://www.zhangxinxu.com/
// zxx.drag v1.0 2010-03-23
// javascript实现拖拽
// 被拖拽的对象如果不是绝对定位或是相对定位（position:absolute/relative），那么是不会看到效果的。
var params = {
  left: 0,
  top: 0,
  currentX: 0,
  currentY: 0,
  flag: false
};
// 获取dom对象o的key属性
// Element.currentStyle是一个与window.getComputedStyle方法功能相同的属性。这个属性实现在旧版本的IE浏览器中.
var getCss = function(o,key){
  return o.currentStyle? o.currentStyle[key] : document.defaultView.getComputedStyle(o,false)[key];
};

// bar触发拖拽的对象，target 被拖拽的对象
var startDrag = function(bar, target, callback){
  // 被拖拽的对象左边的距离
  if(getCss(target, "left") !== "auto"){
    params.left = getCss(target, "left");
  }
  // 被拖拽的对象上边的距离
  if(getCss(target, "top") !== "auto"){
    params.top = getCss(target, "top");
  }
  //
  bar.onmousedown = function(event){
    params.flag = true;
    if(!event){
      event = window.event;
      //onselectstart 触发时间为目标对象被开始选中时（即选中动作刚开始，尚未实质性被选中），这里表示对象不能被选中
      bar.onselectstart = function(){
        return false;
      }
    }
    var e = event;
    // clientX 鼠标指针相对于浏览器页面（或客户区）的水平坐标,保存初始值
    params.currentX = e.clientX;
    params.currentY = e.clientY;
  };

  document.onmouseup = function(){
    params.flag = false;
    if(getCss(target, "left") !== "auto"){
      params.left = getCss(target, "left");
    }
    if(getCss(target, "top") !== "auto"){
      params.top = getCss(target, "top");
    }
  };

  document.onmousemove = function(event){
    var e = event ? event: window.event;
    if(params.flag){
      // 鼠标相对于浏览器窗口可视区域的X，Y坐标（窗口坐标），
      var nowX = e.clientX, nowY = e.clientY;
      var disX = nowX - params.currentX, disY = nowY - params.currentY;
      target.style.left = parseInt(params.left) + disX + "px";
      target.style.top = parseInt(params.top) + disY + "px";

      if (typeof callback == "function") {
        callback((parseInt(params.left) || 0) + disX, (parseInt(params.top) || 0) + disY);
      }

      if (event.preventDefault) {
        event.preventDefault();
      }
      return false;
    }
  }

};
