

window.addEventListener('load',function(){
    let shopButtons = document.getElementsByClassName("productBtn");
    for(var i=0;i<shopButtons.length;i++){
    document.getElementsByClassName("productBtn")[i].onclick = shopShowLightBox; // <!---道具$100確認鍵
  
    }
    document.getElementById("Cancelbtn").onclick = cancelLogin;  // 道具購買燈箱的取消鍵
    document.getElementById("addToBackpack").onclick = addToBackpack01;  //道具購買燈箱的確認鍵
    document.getElementById("eventButton").onclick = eventLightBox;  //扭蛋啟動的<按下去>-->啟動扭蛋購買燈箱的按鍵
    document.getElementById("trashLightBoxBtn").onclick = backToGashapon;  //扭蛋事件燈箱出現後的確認按鍵(返回原畫面)
    document.getElementById("gashaponEvent").onclick = gashaponLightBox; //確認購買扭蛋隨機事件的<確認>按鈕
    document.getElementById("cancelEvent").onclick = cancelEvent; //確認購買燈箱的<取消鍵>(返回原畫面)
    });
    function shopShowLightBox(){  //道具$100確認鍵
        document.getElementById("shopLightBox").style.display="";//道具燈箱出現
        document.getElementById("shopBlack").style.display="";//道具燈箱的襯底出現
    }  
    function cancelLogin(){     // 道具購買燈箱的取消鍵
        document.getElementById("shopLightBox").style.display = "none"; //道具燈箱消失
        document.getElementById("shopBlack").style.display="none"; //燈箱的黑色襯底消失
    }
    function addToBackpack01(){  //道具購買燈箱的確認鍵
        document.getElementById("shopLightBox").style.display = "none"; //道具燈箱消失
        document.getElementById("shopBlack").style.display="none"; //道具燈箱的黑色襯底消失
    }
      function eventLightBox(){ //扭蛋啟動的<按下去>-->啟動扭蛋購買燈箱的按鍵
        document.getElementById("shopBlack1").style.display = "";//燈箱黑色襯底出現
        document.getElementById("gashaponLightBox").style.display ="";//確認事件燈箱出現

        var arr1 = new Array("肥仔星候選人","胖胖星候選人","兔兔星候選人");
        var arr2 = new Array("盜伐山林","亂丟垃圾","日行一善");
        var amountArr = new Array("支持度-100","支持度-100","支持度+100");
        // var arr3 = new Array("山林","垃圾","一善");
        function rand(arr){
          return parseInt (Math.random()*arr.length);
        } 
        let trashLightBox = document.getElementById("trashLightBox");
        let aa = arr1[rand(arr1)];
        let randIndex = rand(arr2);
        let bb = arr2[randIndex];
        let amount = amountArr[randIndex];
        
        let dd = "<a href='../index.html'><img src='img/" + bb + ".png'/></a>"
        var cc=`${dd}<br>${aa}<br>${bb}<br>${amount}`;
        trashLightBox.innerHTML=cc;    
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
          ctx.drawImage(img,150,120,100,85);
        }
        img.src = document.getElementById("shopPic1").src;
      }
      function loadImage02(){
        
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d"); 
        var img = new Image();
        img.onload = function(){
          ctx.drawImage(img,150,120,100,85);
        }
        img.src = document.getElementById("shopPic2").src;
      }
      function loadImage03(){
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d"); 
        var img = new Image();
        img.onload = function(){
          ctx.drawImage(img,265,280,100,120);
        }
        img.src = document.getElementById("shopPic3").src;
      }
      function loadImage04(){
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d"); 
        var img = new Image();
        img.onload = function(){
          ctx.drawImage(img,60,280,100,130);
        }
        img.src = document.getElementById("shopPic4").src;
      }