
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
    let loginMsg=$id("loginMsg");
    let memIdRig=$id("memIdRig");
    let memPswRig=$id("memPswRig");
    let memNameRig=$id("memNameRig");
    let memEmailRig=$id("memEmailRig");
    let starSelect=$id("starSelect");
    let loginRig=$id("loginRig");
    //__________ 燈箱開關 __________//
    //燈箱打開
    function loginRegister(){
        if(loginBtn.innerText == "登出"){
            logOut();
        }else{
            loginWrap.style.display="";
            loginPage.style.display="";
            registerPage.style.display="none";
            loginBtn.backgroundImage="none";            
        }
    }
    //燈相關閉
    function closeBox(){
        loginWrap.style.display="none";
        memId.value="";
        memPsw.value="";
        loginMsg.innerText="";
    }
    //登入及驗證
    function registerBox(){
        loginPage.style.display="none";
        registerPage.style.display="";
    }
    //註冊及驗證
    function register(){
        if(memPswRig.value=="" && memIdRig.value==""){
            loginRig.innerText="帳號或密碼欄位不得為空";
        }else if(memPswRig.value!=pswChecked.value){
            loginRig.innerText="密碼確認輸入欄位值與密碼不符";
        }else{
            var xhr=new XMLHttpRequest();
            xhr.onload=function(){
                if(xhr.status==200){
                    alert("新增帳號成功");
                    loginWrap.style.display="none";
                    memId.value="";
                    memPsw.value="";
                    loginMsg.innerText="";
                }else{
                    alert(xhr.responseText);
                }   
            }

            let url="php/register.php";
            xhr.open("post",url,true);
            let query_string=`memIdRig=${memIdRig.value} & starSelect=${starSelect.value} & memPswRig=${memPswRig.value} & memNameRig=${memNameRig.value} & memEmailRig=${memEmailRig.value}`;
            //memId,memPsw跟登入一樣
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.send(query_string);

        } 
    }
    //取消註冊，清空表單同時返回登入
    function backLogin(){
        // memName.value="";
        // memEmail.value="";
        registerPage.style.display="none";
        loginPage.style.display="";
    }
    /*-----------會員登入回應--------------*/ 
    function login(){
        var xhr=new XMLHttpRequest();

        xhr.onload=function(){
            if(xhr.status==200){    
                    let member = JSON.parse(xhr.responseText);
                    if( member.error){
                        loginMsg.innerText=member.error;
                    }else{
                        console.log("=====",member.memId);
                        console.log("=====",member.memName);
                        console.log("=====",member.email);
                        
                        loginWrap.style.display="none";
                        loginPage.style.display="none";
                        registerPage.style.display="none";
                        loginBtn.style.width=50+"px";
                        wealth.style.backgroundImage.url="../img/GEM.png";
                        wealth.style.backgroundRepeat="none";
                        coin.innerText=member.starCoin;
                        wealth.style.width=23+"px";
                        wealth.style.height=23+"px";
                        memberName.innerText="您好!"+member.memName;
                        loginBtn.innerText="登出";
                        history.go(0);
                    }
            }else{
                loginMsg.innerText=member.error;
            }   
        }

        let url="php/login.php";
        xhr.open("post",url,true);
        let query_string=`memId=${memId.value} & memPsw=${memPsw.value}`;
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(query_string);
        console.log(query_string);
    } 
    /*--------------登出-------------------*/
    function logOut(){
        let xhr = new XMLHttpRequest();
        xhr.onload=function(){
            if(xhr.status==200){
                loginBtn.innerHTML = "登入/註冊";
                memberName.innerHTML ="";
                wealth.style.width=0;
                wealth.style.height=0;
                coin.innerText="";
                loginBtn.style.width=100+"px";
                history.go(0);
            }
        }
        xhr.open("get", "php/logOut.php", true);
        xhr.send(null);
    }

    /*-----------註冊帳號驗證--------------*/
    function checkId(){
        let xhr = new XMLHttpRequest()
        //註冊callback function
       xhr.onreadystatechange=function(){
         if(xhr.status ==200){
             if(memIdRig.value ==""){
                 loginRig.innerText="帳號不能是空的唷！";
             }else{
                 loginRig.innerText=xhr.responseText;
             }
           
         }else{
           loginRig.innerText=xhr.status;
         }
       }
     
       //設定好所要連結的程式
       let url='php/checkId.php';
       xhr.open("post",url,true);
       let query_string=`memIdRig=${memIdRig.value}`;
       xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
       xhr.send(query_string);
       console.log(query_string);
    } 

window.addEventListener("load",function(){
    // __________ 檢查是否登入__________//
    let xhr = new XMLHttpRequest();
    xhr.onload=function(){
      let member = JSON.parse(xhr.responseText);
      if(member.memName){
        memberName.innerHTML = "您好!"+member.memName;
        // navTop.style.top=40+"px";
        // banner.style.top=70+"px";
        // topBg.style.height=170+"px";
        wealth.style.width=23+"px";
        wealth.style.height=23+"px";
        wealth.style.backgroundRepeat="none";
        coin.innerText=member.starCoin;
        loginBtn.style.width=50+"px"
        loginBtn.innerHTML = "登出";
      }
    }
    xhr.open("get", "php/getLoginInfo.php", true);
    xhr.send(null);
},false);