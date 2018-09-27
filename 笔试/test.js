function GetParam(url, id) {
    url = url+ "";
    regstr = "/(\\?|\\&)" + id + "=([^\\&]+)/";
    reg = eval(regstr);//eval可以将 regstr字符串转换为 正则表达式
    result = url.match(reg);//匹配的结果是：result[0]=?sid=22 result[1]=sid result[2]=22。所以下面我们返回result[2]

    if (result && result[2]) {
        return result[2];
    }
}

var url = "http://www.189dg.com/ajax/sms_query.ashx?action=smsdetail&sid=22&stime=2014-06-27&etime=2014-06-27";

console.log(GetParam(url,"time"));