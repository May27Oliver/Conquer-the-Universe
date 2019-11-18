// window.addEventListener("load",function(){
    //__________ 與HTML做連結 __________//
    function $id(id){
        return document.getElementById(id);
    }
    function $class(className){
        return document.querySelector(className);
    }
    let loginBtn = $id("loginBtn");
    let loginBoxClose = $id("loginBoxClose");
    let loginWrap = $id("loginWrap");
    let loginPage = $class(".loginPage");
    let registerPage = $class(".registerPage");

    //__________ 燈箱開關 __________//
    function loginRegister(){
        loginWrap.style.display="";
        loginPage.style.display="";
        registerPage.style.display="none";
    }
    function login(){}
    function register(){
        loginPage.style.display="none";
        registerPage.style.display="";
    }
    function closeBox(){
        loginWrap.style.display="none";
    }
// },false);