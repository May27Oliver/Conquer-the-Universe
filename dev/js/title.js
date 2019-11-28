window.addEventListener('load',function(){
     //發稱號
     getTitle();
     function getTitle(){
         var xhr = new XMLHttpRequest();
         // xhr.onload=function (){}
         var url = "../php/getTitle.php";
         xhr.open("Get", url, true);
         xhr.send( null );
     }
     //抓會員稱號
     getMemTitle();
     function getMemTitle(){
         var xhr = new XMLHttpRequest();
         xhr.onload=function (){
            if( xhr.status == 200 ){ 
                titleData = JSON.parse(xhr.responseText);
                for(var i=0;i<titleData.length;i++){
                    $('#memDataLock1').append(`<option>${titleData[i]['titleName']}</option>`);
                }
                console.log(titleData.length);
            }else{ 
                alert( xhr.status );
            }
        }
         var url = "../php/citizenTitle.php";
         xhr.open("Get", url, true);
         xhr.send( null );
     }

});