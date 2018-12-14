
//user=gm1234; pwd=123434; age=16
function setCookie(name,value,days){//存cookie days天后过期
    var oDate = new Date();
    oDate.setDate(oDate.getDate() + days);
    document.cookie = name + "=" +  value  + ";expires = " + oDate;

}

function getCookie(name){//取cookie
    var arr = document.cookie.split(";"); //[user=gm1234, pwd=123434, age=16]
    for(var i = 0; i < arr.length;i++){
        var arr2 = arr[i].replace(/^\s+/g,""); //user=gm1234,pwd=123434,age=16
        var val = arr2.split("=");   //[user,gm1234]   [pwd,123434] [age,16]
        if(val[0] == name){
            return val[1]
        }
    }
    return "";
}

function removeCookie(name){//删除cookie  也就是让cookie过期
    setCookie(name,"",-1)
}