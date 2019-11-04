
window.addEventListener('load',function(){
    let shopButtons = document.getElementsByClassName("productBtn");
    for(var i=0;i<shopButtons.length;i++){
    document.getElementsByClassName("productBtn")[i].onclick = shopShowLightBox;
    }
    document.getElementById("Cancelbtn").onclick = cancelLogin;
    // document.getElementById("productBox")=cancelProductBox;
    document.getElementById("addToBackpack").onclick = addToBackpack01;
    });
    
    function shopShowLightBox(){
        document.getElementById("shopLightBox").style.display="";
        document.getElementById("boxForDisappear").style.opacity="0";
    }  
    function cancelLogin(){
        document.getElementById("shopLightBox").style.display = "none";
        document.getElementById("boxForDisappear").style.opacity="1 ";
    }
    function addToBackpack01(){
        document.getElementById("shopLightBox").style.display = "none";
    }
