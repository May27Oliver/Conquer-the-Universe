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
    let memId = $id("memId");
    let memPsw = $id("memPsw");
    let memName = $id("memName");
    let memEmail = $id("memEmail");
    let pswChecked = $id("pswChecked");
    let registerPage = $class(".registerPage");

    //__________ 燈箱開關 __________//
    //燈箱打開
    function loginRegister(){
        loginWrap.style.display="";
        loginPage.style.display="";
        registerPage.style.display="none";
    }
    //燈相關閉
    function closeBox(){
        loginWrap.style.display="none";
    }
    //登入及驗證
    function login(){}
    function registerBox(){
        loginPage.style.display="none";
        registerPage.style.display="";
    }
    //註冊及驗證
    function register(){}
    //取消註冊，清空表單同時返回登入
    function backLogin(){
        // memId.placeholder="";
        // memPsw.placeholder="";
        // pswChecked.placeholder="";
        memName.value="";
        memEmail.value="";
        registerPage.style.display="none";
        loginPage.style.display="";
    }
// },false);