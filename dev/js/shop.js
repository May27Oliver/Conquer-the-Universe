

window.addEventListener('load',function(){
    let shopButtons1 = document.getElementsByClassName("productBtn1");
    for(var i=0;i<shopButtons1.length;i++){
        document.getElementsByClassName("productBtn1")[i].onclick = shopShowLightBox1; // <!---道具$100確認鍵
    }
    let shopButtons2 = document.getElementsByClassName("productBtn2");
    for(var i=0;i<shopButtons2.length;i++){
        document.getElementsByClassName("productBtn2")[i].onclick = shopShowLightBox2; // <!---道具$100確認鍵
    }
    let shopButtons3 = document.getElementsByClassName("productBtn3");
    for(var i=0;i<shopButtons3.length;i++){
        document.getElementsByClassName("productBtn3")[i].onclick = shopShowLightBox3; // <!---道具$100確認鍵
    }
    let shopButtons4 = document.getElementsByClassName("productBtn4");
    for(var i=0;i<shopButtons4.length;i++){
        document.getElementsByClassName("productBtn4")[i].onclick = shopShowLightBox4; // <!---道具$100確認鍵
    }

    document.getElementById("Cancelbtn").onclick = cancelLogin;  // 道具購買燈箱的取消鍵
    document.getElementById("addToBackpack").onclick = addToBackpack01;  //道具購買燈箱的確認鍵1
    document.getElementById("addToBackpack2").onclick = addToBackpack02;  //道具購買燈箱的確認鍵2
    document.getElementById("addToBackpack3").onclick = addToBackpack03;  //道具購買燈箱的確認鍵3
    document.getElementById("addToBackpack4").onclick = addToBackpack04;  //道具購買燈箱的確認鍵4


    document.getElementById("eventButton").onclick = eventLightBox;  //扭蛋啟動的<按下去>-->啟動扭蛋購買燈箱的按鍵
    document.getElementById("trashLightBoxBtn").onclick = backToGashapon;  //扭蛋事件燈箱出現後的確認按鍵(返回原畫面)
    document.getElementById("gashaponEvent").onclick = gashapon; //確認購買扭蛋隨機事件的<確認>按鈕
    document.getElementById("cancelEvent").onclick = cancelEvent; //確認購買燈箱的<取消鍵>(返回原畫面)
});

let randIndex;

function shopShowLightBox1(){  //道具1$100確認鍵
    document.getElementById("shopLightBox").style.display="";//道具燈箱出現
    document.getElementById("shopBlack").style.display="";//道具燈箱的襯底出現
    document.getElementById("addToBackpack2").style.display="none";
    document.getElementById("addToBackpack3").style.display="none";
    document.getElementById("addToBackpack4").style.display="none";
    document.getElementById("addToBackpack").style.display="inline-block";
}
function shopShowLightBox2(){  //道具2$100確認鍵
    document.getElementById("shopLightBox").style.display="";//道具燈箱出現
    document.getElementById("shopBlack").style.display="";//道具燈箱的襯底出現
    document.getElementById("addToBackpack").style.display="none";
    document.getElementById("addToBackpack2").style.display="inline-block";
    document.getElementById("addToBackpack3").style.display="none";
    document.getElementById("addToBackpack4").style.display="none";
}
function shopShowLightBox3(){  //道具3$100確認鍵
    document.getElementById("shopLightBox").style.display="";//道具燈箱出現
    document.getElementById("shopBlack").style.display="";//道具燈箱的襯底出現
    document.getElementById("addToBackpack").style.display="none";
    document.getElementById("addToBackpack2").style.display="none";
    document.getElementById("addToBackpack4").style.display="none";
    document.getElementById("addToBackpack3").style.display="inline-block";
}
function shopShowLightBox4(){  //道具4$100確認鍵
    document.getElementById("shopLightBox").style.display="";//道具燈箱出現
    document.getElementById("shopBlack").style.display="";//道具燈箱的襯底出現
    document.getElementById("addToBackpack").style.display="none";
    document.getElementById("addToBackpack2").style.display="none";
    document.getElementById("addToBackpack3").style.display="none";
    document.getElementById("addToBackpack4").style.display="inline-block"
}

function cancelLogin(){     // 道具購買燈箱的取消鍵
    document.getElementById("shopLightBox").style.display = "none"; //道具燈箱消失
    document.getElementById("shopBlack").style.display="none"; //燈箱的黑色襯底消失
}
function addToBackpack01(){  //道具購買燈箱的確認鍵1
    document.getElementById("shopLightBox").style.display = "none"; //道具燈箱消失
    document.getElementById("shopBlack").style.display="none"; //道具燈箱的黑色襯底消失
}
function addToBackpack02(){  //道具購買燈箱的確認鍵2
    document.getElementById("shopLightBox").style.display = "none"; //道具燈箱消失
    document.getElementById("shopBlack").style.display="none"; //道具燈箱的黑色襯底消失
}
function addToBackpack03(){  //道具購買燈箱的確認鍵3
    document.getElementById("shopLightBox").style.display = "none"; //道具燈箱消失
    document.getElementById("shopBlack").style.display="none"; //道具燈箱的黑色襯底消失
}
function addToBackpack04(){  //道具購買燈箱的確認鍵4
    document.getElementById("shopLightBox").style.display = "none"; //道具燈箱消失
    document.getElementById("shopBlack").style.display="none"; //道具燈箱的黑色襯底消失
}


function eventLightBox(){ //扭蛋啟動的<按下去>-->啟動扭蛋購買燈箱的按鍵
    document.getElementById("shopBlack1").style.display = "";//燈箱黑色襯底出現
    document.getElementById("gashaponLightBox").style.display ="";//確認事件燈箱出現

    var arr1 = new Array("肥仔星候選人","胖胖星候選人","兔兔星候選人");
    var arr2 = new Array("胡亂爬樹","修橋造路","洗錢被抓");
    var amountArr = new Array("支持度-100","支持度+100","支持度-100");
    // var arr3 = new Array("山林","垃圾","一善");
    function rand(arr){
      return parseInt (Math.random()*arr.length);
    } 
    let trashLightBox = document.getElementById("trashLightBox");
    let aa = arr1[rand(arr1)];
    randIndex = rand(arr2);
    let bb = arr2[randIndex];
    let amount = amountArr[randIndex];
    
    let dd = "<a href='../index.html'><img src='img/" + bb + ".png'/></a>"
    var cc=`${dd}<br>${aa}<br>${bb}<br>${amount}`;
    trashLightBox.innerHTML=cc;    
    return randIndex;
}
function  backToGashapon(){   //反回原本扭蛋畫面
    document.getElementById("trashLightBox").style.display ="none"; //事件燈箱消失
    document.getElementById("gashaponBtn").style.opacity="1";  //扭蛋機下方的啟動鈕出現
    document.getElementById("trashLightBoxBtn").style.display="none";//事件燈箱確認紐消失
}
function gashaponLightBox(){     //購買扭蛋事件的確認按鈕 (按了之後執行動畫)
    $('.gashaponPic01').addClass('active');
    $('.gashaponPic02').addClass('active');
    $('.gashaponPic03').addClass('active');
    $('.gashaponPic04').addClass('active');
    $('.gashaponPic05').addClass('active');
    $('.gashaponPic06').addClass('active');
    $('.gashaponPic07').addClass('active');
    document.getElementById("event02").style.display ="";//扭蛋機出現  
    document.getElementById("shopBlack1").style.display="none"; //道具燈箱的黑色襯底
    document.getElementById("gashaponLightBox").style.display = "none"; //確認購買燈箱消失
    
    setTimeout( function gashaponLightBox(){ //扭蛋動畫+後續事件燈箱出現
    document.getElementById("trashLightBox").style.display =""; //事件燈箱出現
    document.getElementById("trashLightBoxBtn").style.display = "";//事件燈箱確認紐(返回原畫面)
    },5000 );
    
  
    document.getElementById("gashaponBtn").style.opacity="0";   
    $('.gashaponPic01').one('animationend', function() {
        $('.gashaponPic01').removeClass('active');
    });
    $('.gashaponPic02').one('animationend', function() {
        $('.gashaponPic02').removeClass('active');
    });
    $('.gashaponPic03').one('animationend', function() {
        $('.gashaponPic03').removeClass('active');
    });
    $('.gashaponPic04').one('animationend', function() {
        $('.gashaponPic04').removeClass('active');
    });
    $('.gashaponPic05').one('animationend', function() {
        $('.gashaponPic05').removeClass('active');
    });
    $('.gashaponPic06').one('animationend', function() {
        $('.gashaponPic06').removeClass('active');
    });
    $('.gashaponPic07').one('animationend', function() {
        $('.gashaponPic07').removeClass('active');
    });

    // 先查看登入會員有多少宇宙幣？
}
function cancelEvent(){ 
    document.getElementById("gashaponLightBox").style.display = 'none';
    document.getElementById("event02").style.display = " ";  
    document.getElementById("shopBlack1").style.display="none"; //道具燈箱的黑色襯底消失   
}

function loadImage01(){ //紙娃娃功能 
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d"); 
    var img = new Image();
    img.onload = function(){
      ctx.drawImage(img,125,120,100,85);
    }
    img.src = document.getElementById("shopPic1").src;
}
function loadImage02(){ 
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d"); 
    var img = new Image();
    img.onload = function(){
      ctx.drawImage(img,125,120,100,85);
    }
    img.src = document.getElementById("shopPic2").src;
}
function loadImage03(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d"); 
    var img = new Image();
    img.onload = function(){
      ctx.drawImage(img,245,280,100,120);
    }
    img.src = document.getElementById("shopPic3").src;
}
function loadImage04(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d"); 
    var img = new Image();
    img.onload = function(){
      ctx.drawImage(img,30,255,100,130);
    }
    img.src = document.getElementById("shopPic4").src;
}

function gashapon(){
    if($id("coin").innerText==""){
        alert("您尚未登入，請先登入或註冊會員～");
    }else{
        var xhr=new XMLHttpRequest();
        
        xhr.onload=function(){
            let starCoin =xhr.responseText;
            console.log(starCoin);
            if(starCoin<100){
                alert("您的錢不夠囉，請去小學堂學習~");
            }else{
                $id("coin").innerText=starCoin;
                gashaponLightBox();
            }
        }
        //缺少一個判斷錢夠不夠玩一次的判斷式
        //和支持度增減
        xhr.open("get", `php/cutStarCoin.php?event=${randIndex}`, true);
        xhr.send(null);
    }
}