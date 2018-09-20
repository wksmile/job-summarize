// javascript实现拖拽
// 被拖拽的对象如果不是绝对定位或是相对定位（position:absolute/relative），那么是不会看到效果的。
// 【参考】(https://blog.csdn.net/gongzhuxiaoxin/article/details/52894784)
// 【张鑫旭原版】(https://www.zhangxinxu.com/wordpress/2010/03/javascript%E5%AE%9E%E7%8E%B0%E6%9C%80%E7%AE%80%E5%8D%95%E7%9A%84%E6%8B%96%E6%8B%BD%E6%95%88%E6%9E%9C/)
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

// bar点击的对象（即点击那里可以实现拖拽，例如弹出层的标题栏），第二个是拖拽的对象（例如一个弹出层）。
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
      var left = parseInt(params.left) + disX;
      var top = parseInt(params.top) + disY

        //控制拖拽物体的范围只能在浏览器视窗内，不允许出现滚动条
        if(left<0){
            left=0;
        }else if(left >window.innerWidth-target.offsetWidth){
            left = window.innerWidth-target.offsetWidth;
        }
        if(top<0){
            top=0;
        }else if(top >window.innerHeight-target.offsetHeight){
            top = window.innerHeight-target.offsetHeight;
        }

        target.style.left = left + "px";
        target.style.top = top + "px";

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
