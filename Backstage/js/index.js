var  frontEndOver = document.getElementById("front_end");
frontEndOver.addEventListener("mouseover",function(){
ufo.style.transform = "translate(-100%,0)";
});
var  frontEndOut = document.getElementById("front_end");
frontEndOut.addEventListener("mouseout",function(){
ufo.style.transform = "translate(0,0)";
}); 

var  backEndOver = document.getElementById("back_end");
backEndOver.addEventListener("mouseover",function(){
ufo.style.transform = "translate(100%,0)";
});
var  backEndOut = document.getElementById("back_end");
backEndOut.addEventListener("mouseout",function(){
ufo.style.transform = "translate(0,0)";
}); 