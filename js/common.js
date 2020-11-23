function adminInterceptor(adminName,adminPassword){
    $.post("http://127.0.0.1/carpNovel/back/index", {
        account:adminName,
        password:adminPassword, 
        function (result) {
            //console.log(result)
            if (result == "NoExist") {
                location.href="./login.html";
            }
        }
    })
}