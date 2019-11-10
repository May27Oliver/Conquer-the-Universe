

window.addEventListener('load',function(){
    let shopButtons = document.getElementsByClassName("productBtn");
    for(var i=0;i<shopButtons.length;i++){
    document.getElementsByClassName("productBtn")[i].onclick = shopShowLightBox;
    }
    document.getElementById("Cancelbtn").onclick = cancelLogin;
    document.getElementById("addToBackpack").onclick = addToBackpack01;
    document.getElementById("eventButton").onclick = trashBack;
    document.getElementById("trashLightBoxBtn").onclick = showGashaoin;
    document.getElementById("gashaponEvent").onclick = gashaponLightBox;
    document.getElementById("cancelEvent").onclick = cancelEvent; 
    });
    function shopShowLightBox(){
        document.getElementById("shopLightBox").style.display="";
        document.getElementById("shopBlack").style.display="";
    }  
    function cancelLogin(){
        document.getElementById("shopLightBox").style.display = "none";
        document.getElementById("boxForDisappear").style.opacity="1";
        document.getElementById("shopBlack").style.display="none";
    }
    function addToBackpack01(){
        document.getElementById("shopLightBox").style.display = "none";
        document.getElementById("boxForDisappear").style.opacity="1";
        document.getElementById("shopBlack").style.display="none";
    }
    function trashBack(){
        document.getElementById("shopBlack").style.display=" ";
        document.getElementById("gashaponLightBox").style.display ="";
    }
    function showGashaoin(){
        document.getElementById("trashLightBox").style.display ="none";
        document.getElementById("gashaponBtn").style.opacity="1";  
        document.getElementById("event02").style.display =""; 
    }
    function gashaponLightBox(){
        $('.gashaponPic01').addClass('active');
        $('.gashaponPic02').addClass('active');
        $('.gashaponPic03').addClass('active');
        $('.gashaponPic04').addClass('active');
        $('.gashaponPic05').addClass('active');
        $('.gashaponPic06').addClass('active');
        $('.gashaponPic07').addClass('active');
        document.getElementById("event02").style.display ="";   
        document.getElementById("gashaponLightBox").style.display = "none"; 
        setTimeout( function gashaponLightBox(){
        document.getElementById("trashLightBox").style.display =""; 
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
    }