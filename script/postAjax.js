function postAjax(url,callback,data){
    var xhr = null;
    if(window.XMLHttpRequest){ // 高版本浏览器
        xhr = new XMLHttpRequest();
    }else{//低版本浏览器
        xhr = new ActiveXObject('Microsoft.HTTP');
    }
    xhr.open("post",url,true);
    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded")
    xhr.send(data);
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 200){
            res = xhr.responseText;
            callback(res);
        }
    }
}