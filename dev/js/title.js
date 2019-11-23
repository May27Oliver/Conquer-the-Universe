window.addEventListener('load',function(){
     //發獎牌
     getTitle();
     function getTitle(){
         var xhr = new XMLHttpRequest();
         // xhr.onload=function (){}
         var url = "php/getTitle.php";
         xhr.open("Get", url, true);
         xhr.send( null );
     }

});