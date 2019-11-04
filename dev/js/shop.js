
window.addEventListener('load',function(){
    let shopButtons = document.getElementsByClassName("productBtn");
    for(var i=0;i<shopButtons.length;i++){
    document.getElementsByClassName("productBtn")[i].onclick = shopShowLightBox;
    }
    document.getElementById("Cancelbtn").onclick = cancelLogin;
    document.getElementById("addToBackpack").onclick = addToBackpack01;
    document.getElementById("eventButton").onclick = trashBack;
    document.getElementById("trashLightBoxBtn").onclick = showGashaoin;
    });
    function shopShowLightBox(){
        document.getElementById("shopLightBox").style.display="";
        document.getElementById("boxForDisappear").style.opacity="0";
    }  
    function cancelLogin(){
        document.getElementById("shopLightBox").style.display = "none";
        document.getElementById("boxForDisappear").style.opacity="1";
    }
    function addToBackpack01(){
        document.getElementById("shopLightBox").style.display = "none";
    }
    function trashBack(){
        document.getElementById("event").style.opacity = "0";
        document.getElementById("trashLightBox").style.opacity= "1";
        document.getElementById("gashaponBtn").style.opacity="0";
    }
    function showGashaoin(){
        document.getElementById("event").style.opacity = "1";
        document.getElementById("trashLightBox").style.opacity ="0"
        document.getElementById("gashaponBtn").style.opacity="1";
    }