
    function $id(id){
        return document.getElementById(id);
    }
    function $class(className){
        return document.querySelector(className);
    }
    let topBg=$class(".topBg");
    let banner =$class(".banner");
    let navSec =$class(".navSec");
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
    let memberName= $id("memberName");
    let navTop=$class(".navTop");
    let wealth = $id("wealth");
    let coin = $id("coin");
    //__________ 燈箱開關 __________//
    //燈箱打開
    function loginRegister(){
        loginWrap.style.display="";
        loginPage.style.display="";
        registerPage.style.display="none";
        loginBtn.backgroundImage="none";
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
    /*-----------會員登入回應--------------*/ 
    function login(){
        var xhr=new XMLHttpRequest();

        xhr.onload=function(){
            if(xhr.status==200){
                // document.getElementById("loginMsg").innerText=xhr.responseText;
                // if(xhr.responseText=="登入成功！"){
                    loginWrap.style.display="none";
                    loginPage.style.display="none";
                    registerPage.style.display="none";
                    loginBtn.style.width=50+"px";
                    wealth.style.backgroundImage.url="../img/GEM.png";
                    wealth.style.backgroundRepeat="none";
                    coin.innerText="800";
                    // navTop.style.top=40+"px";
                    // banner.style.top=70+"px";
                    // topBg.style.height=170+"px";
                    let member = JSON.parse(xhr.responseText);
                    if( member.error){

                    }else{
                        console.log("=====",member.memId);
                        console.log("=====",member.memName);
                        console.log("=====",member.email);                      
                    }
                    // memName.style.top=35;
                    memberName.innerText="您好!&nbsp&nbsp"+member.memName;
                    loginBtn.innerText="登出";
                // }
            }else{
                document.getElementById("loginMsg").innerText=xhr.status;
            }   
        }

        let url="php/login.php";
        xhr.open("post",url,true);
        let query_string=`memId=${document.getElementById("memId").value} & memPsw=${document.getElementById("memPsw").value}`;
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(query_string);
        console.log(query_string);
    } 
    /*-----------註冊帳號驗證--------------*/
    function checkId(){

    } 

window.addEventListener("load",function(){
    // __________ 檢查是否登入__________//
    let xhr = new XMLHttpRequest();
    xhr.onload=function(){
      let member = JSON.parse(xhr.responseText);
      if(member.memName){
        memberName.innerHTML = "您好!&nbsp&nbsp"+member.memName;
        // navTop.style.top=40+"px";
        // banner.style.top=70+"px";
        // topBg.style.height=170+"px";
        wealth.style.width=23+"px";
        wealth.style.height=23+"px";
        wealth.style.backgroundRepeat="none";
        coin.innerText="800";
        loginBtn.style.width=50+"px"
        $id("loginBtn").innerHTML = "登出";
        // $id("loginBtn").onclick=logOut();
      }
    }
    xhr.open("get", "php/getLoginInfo.php", true);
    xhr.send(null);
},false);