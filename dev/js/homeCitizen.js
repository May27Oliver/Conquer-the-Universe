 //=====頁籤程式碼=====   
 $(document).ready(function(){
    $('#tabBtn1').click(function(){
        $('#tabBtn2').css('backgroundColor','#a6bfd0'),
        $('#tabBtn1').css('backgroundColor','#84ccc9'),
        $('#tab02').css('display','none');
        $('#tab01').css('display','inline-block');
    });
    $('#tabBtn2').click(function(){
        $('#tabBtn1').css('backgroundColor','#a6bfd0'),
        $('#tabBtn2').css('backgroundColor','#84ccc9'),
        $('#tab01').css('display','none');
        $('#tab02').css('display','inline-block');
    });
    
    
});
//=====倒數計時程式=====       
var aI = document.getElementsByTagName("i");

setInterval(function() {  // 設置倒數計時: 結束時間 - 當前時間

// 當前時間
var time = new Date();
var nowTime = time.getTime(); // 獲取當前毫秒數
// 設置結束時間 : 11月13號 24點0分0秒
//   time.setMonth(10); //   獲取當前 月份 (從 '0' 開始算)
//   time.setDate(14); //   獲取當前 日
time.setHours(24); //   獲取當前 時
time.setMinutes(0); //   獲取當前 分
time.setSeconds(0);
var endTime = time.getTime();

// 倒數計時: 差值
var offsetTime = (endTime - nowTime) / 1000; // ** 以秒為單位
var sec = parseInt(offsetTime % 60); // 秒
var min = parseInt((offsetTime / 60) % 60); // 分 ex: 90秒
var hr = parseInt(offsetTime / 60 / 60); // 時

aI[0].textContent = hr + "時";
aI[1].textContent = min + "分";
aI[2].textContent = sec + "秒";
}, 1000);

//=====會員編輯按鈕程式=====


function $id(id){
return document.getElementById(id);
}

//點擊編輯會員按鈕,memDataBtn會出現編輯燈箱
function showMemberForm(){
$id("memberData").style.display = "block";//編輯視窗show出來
} 

//點擊取消按鈕,提醒使用者是否確定取消,叫出alert視窗
function cancelMemData(){
$id("alertWindowWrap").style.display = "block";
document.querySelector(".alertContent").innerText = "確定要取消目前變更的會員資料嗎?";
$id("alertButton").style.display = "inline-block";//當點擊會員資料更改取消按鈕，叫出alert把alertButton按鈕叫出
$id("alertEqui").style.display = "none";//當點擊會員資料更改取消按鈕，叫出alert把alertEqui按鈕隱藏
$id("alertEquiHand").style.display = "none";
$id("alertHomeShop").style.display = "none";

}


//點擊alert視窗_確認_取消修改
function alertCancelMemData(){
$id("alertWindowWrap").style.display = "none";
$id("memberData").style.display = "none";


}
//點擊alert視窗_取消_取消修改
function alertMemData(){
$id("alertWindowWrap").style.display = "none";

}


//設定解除帽子道具alert跳出
function removeEqui(){
$id("alertWindowWrap").style.display = "block"; //alert視窗跳出
document.querySelector(".alertContent").innerText = "確定要解除外觀道具嗎?";//改變div文字內容 => .innerText = "自己要呈現的文字內容"  ,querySelector可抓任何一個class id img...
$id("alertButton").style.display = "none";//當解除道具，叫出alert把alertButton按鈕隱藏
$id("alertEquiHand").style.display = "none";
$id("alertHomeShop").style.display = "none";
$id("alertEqui").style.display = "inline-block";//當解除道具，叫出alert把alertEqui按鈕叫出
}
function alertRemoveEqui(){
$id("Equi").style.display = "none";//解除帽子外觀道具
$id("alertWindowWrap").style.display = "none";
document.querySelector(".EquiClose1").style.display = "none";
}

//設定解除手上道具alert跳出
function removeEquiHand(){
$id("alertWindowWrap").style.display = "block"; //alert視窗跳出
document.querySelector(".alertContent").innerText = "確定要解除外觀道具嗎?";//改變div文字內容 => .innerText = "自己要呈現的文字內容"  ,querySelector可抓任何一個class id img...
$id("alertButton").style.display = "none";//當解除道具，叫出alert把alertButton按鈕隱藏
$id("alertEqui").style.display = "none";
$id("alertHomeShop").style.display = "none";
$id("alertEquiHand").style.display = "inline-block";//當解除道具，叫出alert把alertEqui按鈕叫出
}
function alertRemoveEquiHand(){
$id("EquiHand").style.display = "none";//解除帽子外觀道具
$id("alertWindowWrap").style.display = "none";
document.querySelector(".EquiClose2").style.display = "none";
}

//購買限時道具跳窗homeShopAlert
function homeShopAlert(){
$id("alertWindowWrap").style.display = "block"; //alert視窗跳出
document.querySelector(".alertContent").innerText = "確定要購買此道具嗎?";
$id("alertButton").style.display = "none";
$id("alertEqui").style.display = "none";
$id("alertEquiHand").style.display = "none";
$id("alertHomeShop").style.display = "inline-block";


}
function alertRemoveHomeShop(){
$id("alertWindowWrap").style.display = "none";
$id("today").remove();

}



function init(){
//===設定memDataBtn/memNameBox.onclick 事件理程序是 showMemberForm ,編輯會員資料按鈕
$id("memDataBtn").onclick = showMemberForm;
// $id("memNameBox").onclick = showMemberForm;

//===設定btnLoginCancel.onclick 事件處理程序是 cancelLogin ,取消按鈕-跳出視窗
$id("memDataCancel").onclick = cancelMemData;

//===設定alertWindowWrap確認取消
$id("alertButton").onclick = alertCancelMemData;

//===設定alertWindowWrap不要取消
$id("cancelButton").onclick = alertMemData;

//===解除帽子道具
$id("Equi").onclick = removeEqui;
$id("alertEqui").onclick = alertRemoveEqui;


//===解除手上道具
$id("EquiHand").onclick = removeEquiHand;
$id("alertEquiHand").onclick = alertRemoveEquiHand;

//===購買限時道具
document.querySelector(".citizenShop").onclick = homeShopAlert;
$id("alertHomeShop").onclick = alertRemoveHomeShop;

}; 

window.onload=init;	


//AJAX
//抓取稱號資料
         
myTitle();
function myTitle(){
    var xhr = new XMLHttpRequest();
    xhr.onload=function (){
        if( xhr.status == 200 ){
            titleName = JSON.parse(xhr.responseText);
            document.getElementById('titleName').innerText=titleName[0]['titleName'];
            // titleName.selected=true;
        }else{
            alert( xhr.status );
        }
    }
    var url = "php/myTitle.php";
    xhr.open("Get", url, true);
    xhr.send( null );
}



//個人編輯會員資料撈取
function getMember(){
var xhr = new XMLHttpRequest();
xhr.onload=function (){
   if( xhr.status == 200 ){
    member = JSON.parse(xhr.responseText);
        HTMLstr = "";
        for(var i=0; i<1; i++ ){
            HTMLstr += `
            <h2>編輯會員資料</h2>
                <div class="col-12 col-md-12 wrapDataItem" id="wrapDataItem">
                    <label class="col-5 col-md-5 col-lg-5 col-xl-5">會員編號 :</label>
                        <span class="col-md-5 memNo" id="memNo">${member[i].memNo}</span>
                    </div>
                <div class="col-12 col-md-12 wrapDataItem wrapEditIcon">
                    <label class="col-5 col-md-5 col-lg-5 col-xl-5">角色稱號 :</label>
                    <select name="titleName" id="memDataLock1" class="memDataLock1">
                       
                    </select>
                    <img src="img/pencil.png" id="memDataEdit1" alt="editIcon">
                </div>
                <div class="col-12 col-md-12 wrapDataItem wrapEditIcon">
                    <label class="col-5 col-md-5 col-lg-5 col-xl-5">角色暱稱 :
                    </label>
                    <span class="col-md-5 memName" id="memName">${member[i].memName}</span>  
                </div>
                <div class="col-12 col-md-12 wrapDataItem">
                    <label class="col-5 col-md-5 col-lg-5 col-xl-5">會員帳號 : </label>
                    <span class="col-md-5 memId">${member[i].memId}</span>
                </div>
                <div class="col-12 col-md-12 wrapDataItem wrapEditIcon">
                    <label class="col-5 col-md-5 col-lg-5 col-xl-5">會員密碼 :
                    </label>
                    <input id="memDataLock2" class="col-5 col-md-5 col-lg-5 col-xl-5 memPsw memDataLock" type="password" value="${member[i].memPsw}">
                    <img src="img/pencil.png" id="memDataEdit2" alt="editIcon">
                </div>
                <div class="col-12 col-md-12 wrapDataItem wrapEditIcon">
                    <label class="col-5 col-md-5 col-lg-5 col-xl-5">會員信箱 :
                    </label>
                    <input id="memDataLock3" class="col-5 col-md-5 col-lg-5 col-xl-5 email memDataLock" type="email" value="${member[i].email}">
                    <img src="img/pencil.png" id="memDataEdit3" alt="editIcon">
                </div>
            `;
        }
        document.getElementById('memDataBox').innerHTML =HTMLstr;
   }else{
    alert( xhr.status );
   }
}

var url = "php/homeCitizen.php?";
xhr.open("Get", url, true);
xhr.send( null );
}
getMember();

// 個人貢獻支持度
function citizenPopularity(){
var xhr = new XMLHttpRequest();
xhr.onload=function (){
   if( xhr.status == 200 ){
    popularity = JSON.parse(xhr.responseText);
    new CountUp("popularity",0,popularity[0].popularity).start();
   }else{
    alert( xhr.status );
   }
}

var url = "php/citizenPopularity.php?";
xhr.open("Get", url, true);
xhr.send( null );
}
citizenPopularity();


// 個人暱稱
function memNameBox(){
var xhr = new XMLHttpRequest();
xhr.onload=function (){
   if( xhr.status == 200 ){
    memNameBox = JSON.parse(xhr.responseText);
    document.getElementById('citizenMemName').innerText =memNameBox[0].memName;
   }else{
    alert( xhr.status );
   }
}

var url = "php/memNameBox.php?";
xhr.open("Get", url, true);
xhr.send( null );
}
memNameBox();

// 個人徽章
function memBadge(){

var xhr = new XMLHttpRequest();
xhr.onload=function (){
    if( xhr.status == 200 ){
    badge = JSON.parse(xhr.responseText);
    var img=badge['badgeImg'];
    document.getElementById('badgeImg').src=`img/${img}`;
    
    // console.log(badge['badgeImg']);
    }
}

var url = "php/getBadge.php?";
xhr.open("Get", url, true);
xhr.send( null );
}
memBadge();

// 候選人
function memRole(){
var xhr = new XMLHttpRequest();
xhr.onload=function (){
   if( xhr.status == 200 ){
    StarsRole = JSON.parse(xhr.responseText);
    console.log(StarsRole[0].starNo);
            if(StarsRole[0].starNo==1){ 
                $(".EquiImg").append(`
                <img class="citizenOneEye" src="${StarsRole[0].starsRole}" alt=""> 
                <div id="EquiBox" class="oneEyeBox">
                    
                </div>
                <div id="EquiBoxHand" class="oneEyeHandBox">
                    
                </div>  `);

            }else if(StarsRole[0].starNo==2){
                $(".EquiImg").append(` 
                <img class="citizenFat" src="${StarsRole[0].starsRole}" alt=""> 
                <div id="EquiBox" class="fatBox">
                    
                </div>
                <div id="EquiBoxHand" class="fatHandBox">
                   
                </div>`
                );

            }else if(StarsRole[0].starNo==3){
                $(".EquiImg").append(`
                    <img class="citizenRabbit" src="${StarsRole[0].starsRole}" alt=""> 
                <div id="EquiBox" class="rabbitBox">
                    
                </div>
                <div id="EquiBoxHand" class="rabbitHandBox">
                    
                </div>`
                );

            };

                    //hover帽子道具img出現叉叉
            $("#EquiBox img").mouseover(function(){
                $(".EquiClose1").css("display","block");
            }); 
            $("#EquiBox img").mouseout(function(){
                $(".EquiClose1").css("display","none");
            });
            // moveEquiIn1
            $(".EquiClose1").mouseover(function(){
                $(".EquiClose1").css("display","block");
            });

            $(".EquiClose1").mouseout(function(){
                $(".EquiClose1").css("display","none");
            });
            //hover手上道具img出現叉叉
            $("#EquiBoxHand img").mouseover(function(){
                $(".EquiClose2").css("display","block");
            });
            $("#EquiBoxHand img").mouseout(function(){
                $(".EquiClose2").css("display","none");
            });
            // moveEquiIn2
            $(".EquiClose2").mouseover(function(){
                $(".EquiClose2").css("display","block");
            });

            $(".EquiClose2").mouseout(function(){
                $(".EquiClose2").css("display","none");
            });
   }else{
    alert( xhr.status );
   }
}

var url = "php/memRole.php?";
xhr.open("Get", url, true);
xhr.send( null );
}
memRole();

// 今日商品上架
function todayEqui(){
var xhr = new XMLHttpRequest();
xhr.onload=function (){
   if( xhr.status == 200 ){
    todayEqui= JSON.parse(xhr.responseText);
    // console.log(todayEqui.clothimg);
        $("#today").append(`
        <img class="hat" src="${todayEqui.clothimg}" alt="">
            <div class="citizenClothNameBox"> 
                <button class="citizenShop" >${todayEqui.clothPrice}</button>
                <span><p class="citizenClothName">${todayEqui.clothName}<p></span>
                <span class="popularityAdd" style="visibility:hidden">${todayEqui.popularAmount}</span> 
                
                <span class="clothNo" style="visibility:hidden">${todayEqui.clothNo}</span>
                <span class="clothClass" style="visibility:hidden">${todayEqui.clothClass}</span>
               
            </div> 
        `)
           
    }

}

var url = "php/todayEqui.php?";
xhr.open("Get", url, true);
xhr.send( null );
}//setInterval(todayEqui ,10000);
todayEqui();

//買道具增加聲量 及 買道具扣錢
$("#alertHomeShop").click(function(e){
    //--買道具增加聲量 及 買道具扣錢
    let memNo = $('.memNo').text();                 //個人編號
    let popularity = $('#popularity').text();       //個人支持度
    let popularityAdd = $('.popularityAdd').text(); //商品支持度
    let starCoin =$('#coin').text();                //個人金幣
    let citizenShop = $('.citizenShop').text();     //商品價格

    let popularityAll = parseInt(popularity)+parseInt(popularityAdd); //買道具增加聲量
    
    //==增加裝備庫欄位抓值
    let clothImg = $('.hat').attr('src');           //商品路徑
    let clothNo = $('.clothNo').text();             //商品編號
    let clothName = $('.citizenClothName').text();  //裝備類型
    let clothClass = $('.clothClass').text();       //裝備類型
    
    
    // console.log(clothClass);
    // console.log(clothNo);
    // console.log(clothimg);
    // console.log(memNo);
    // console.log(starCoin);
    // console.log(citizenShop);
    // console.log(balance);
    // console.log(popularity);
    // console.log(popularityAdd);
    // console.log(popularityAll);
    

    if(starCoin>=citizenShop){
        let balance = starCoin - citizenShop; //買道具扣錢
    //--買道具增加聲量 及 買道具扣錢    
    sessionStorage.setItem('clothNo', clothNo);
    sessionStorage.setItem('memNo', memNo);
    sessionStorage.setItem('starCoin', starCoin);
    sessionStorage.setItem('balance', balance);
    sessionStorage.setItem('citizenShop', citizenShop);
    sessionStorage.setItem('balance', popularityAll);

    //==增加裝備庫欄位抓值
   
    sessionStorage.setItem('clothImg', clothImg);
    sessionStorage.setItem('clothClass', clothClass);
    sessionStorage.setItem('clothName', clothName);
    $.ajax({    
        url: `php/citizenShop.php`,
        data: {
            memNo:memNo,
            starCoin:starCoin,
            balance:balance,
            citizenShop:citizenShop,
            popularityAll:popularityAll,
        },
        type: 'GET',
        success: function(data){
            // alert(1111)
           console.log(data);
           $('#coin').text(balance);
           sessionStorage.setItem('starCoin',balance);
           $('#popularity').text(popularityAll);
           sessionStorage.setItem('popularity',popularityAll);
        },
        
    })
    
    $.ajax({    
        url: `php/citizenShopInsert.php`,
        data: {
            clothNo:clothNo,
            clothImg:clothImg,
            memNo:memNo,
            clothClass:clothClass,
            clothName:clothName,
           
        },
        type: 'GET',
        success: function(){
            // alert(2222);
    
         
        },
        
    })
}else{
        alert("宇宙幣不足，請至公民學堂賺取宇宙幣");
    };
    
});

//------今日商品結束  

// 現有商品撈出
$id("tabBtn2").onclick=memberCloth;
function memberCloth(){
var xhr = new XMLHttpRequest();
xhr.onload=function (){
   if( xhr.status == 200 ){
    $('#tab02').empty();  
    memberCloth= JSON.parse(xhr.responseText);
   for (let i = 0; i < memberCloth.length; i++) {
    //    console.log(memberCloth[i].memClothNo);
       $('#tab02').append(`
        <div class="propBox" data-range="${memberCloth[i].clothClass}" data-memClothNo="${memberCloth[i].memClothNo}"> 
            <img class="hat" src="${memberCloth[i].clothimg}" alt="">
            <div class="citizenClothNameBox2" >
                <span><p class="clothName">${memberCloth[i].clothName}</p></span>
               
            </div>
        </div>`);

    }   
        //====換外觀道具
        //設定帽子換道具
        function showEqui( e ){
            var range=e.target.parentNode.getAttribute("data-range");

            if(range=="Equi"){
                document.getElementById("Equi").src=e.target.src;
                document.getElementById("Equi").style.display="";
            }else if(range=="EquiHand"){
                document.getElementById("EquiHand").src=e.target.src;
                document.getElementById("EquiHand").style.display="";
            }
             
                // console.log("您點擊到的是:",e.target.parentNode.getAttribute("data-memClothNo"));
                //  console.log (e.target.parentNode.getAttribute("data-range"));
                //  console.log (e.target.parentNode.getAttribute("data-memClothNo"));
                // console.log (memberCloth[0]['clothClass']);
                // console.log (memberCloth[1]['clothClass']);
            // }
            let equiClothClass = e.target.parentNode.getAttribute("data-range");
            let equiMemClothNo = e.target.parentNode.getAttribute("data-memClothNo");
            // alert(equiClothClass);
            // alert(equiMemClothNo);
            sessionStorage.setItem('equiClothClass', equiClothClass); 
            sessionStorage.setItem('equiMemClothNo', equiMemClothNo); 
            $.ajax({
                url: `php/equiOnDuty.php`,
                data: {
                    equiClothClass:equiClothClass,
                    equiMemClothNo:equiMemClothNo,
    
                },
                type: 'GET',
                success: function(){
                    // alert("成功");
    
         
                },
        
            })

        }
        // console.log(memberCloth[i]['clothClass']);
            
            
        //===換帽子道具
        let imgs = document.querySelectorAll(".hat");
        for(let j=0; j<imgs.length; j++){
            imgs[j].onclick = showEqui;
            // console.log(imgs[j]); 
            
        };   
       
   };
            

};

var url = "php/memberCloth.php?";
xhr.open("Get", url, true);
xhr.send( null );
}//setInterval(todayEqui ,10000);
memberCloth();

//-----現有商品撈出  結束

//撈出候選人身上裝備
function roleEquiBox(){
var xhr = new XMLHttpRequest();
xhr.onload=function (){
   if( xhr.status == 200 ){
    roleEquiBox= JSON.parse(xhr.responseText);    
            $("#EquiBox").append(`
                <img id="Equi" src="${roleEquiBox[0][0].clothimg}" alt="">
                <div class="EquiClose1" style="display: none;" onclick="removeEqui()"></div>
            `),
            
             $("#EquiBoxHand").append(`
                <img id="EquiHand" src="${roleEquiBox[1][0].clothimg}" alt="">
                <div class="EquiClose2" style="display: none;" onclick="removeEquiHand()"></div>
             `)
        //hover帽子道具img出現叉叉
        $("#EquiBox img").mouseover(function(){
            $(".EquiClose1").css("display","block");
        }); 
        $("#EquiBox img").mouseout(function(){
            $(".EquiClose1").css("display","none");
        });
        // moveEquiIn1
        $(".EquiClose1").mouseover(function(){
            $(".EquiClose1").css("display","block");
        });

        $(".EquiClose1").mouseout(function(){
            $(".EquiClose1").css("display","none");
        });     
        //hover手上道具img出現叉叉
        $("#EquiBoxHand img").mouseover(function(){
            $(".EquiClose2").css("display","block");
        });
        $("#EquiBoxHand img").mouseout(function(){
            $(".EquiClose2").css("display","none");
        });
        // moveEquiIn2
        $(".EquiClose2").mouseover(function(){
            $(".EquiClose2").css("display","block");
        });

        $(".EquiClose2").mouseout(function(){
            $(".EquiClose2").css("display","none");
        });            
        
        
    };

};

var url = "php/roleEquiBox.php?";
xhr.open("Get", url, true);
xhr.send( null );
}//setInterval(todayEqui ,10000);
roleEquiBox();


//解除候選人身上裝備
$('body').on('click', '#alertEqui', function () {

    $.ajax({
    url: `php/removeRoleEqui.php`,
    type: 'GET',
    success: function (memEditRows) {
        // var afterEdit = JSON.parse(memEditRows);
        // console.log(afterEdit);
        // alert("解除成功");
        },
    });

});

$('body').on('click', '#alertEquiHand', function () {

    $.ajax({
    url: `php/removeRoleEquiHand.php`,
    type: 'GET',
    success: function (memEditRows) {
        // var afterEdit = JSON.parse(memEditRows);
        // console.log(afterEdit);
        // alert("解除成功");
        },
    });

});
        

//星球圖
function StarsBall(){
    var xhr = new XMLHttpRequest();
    xhr.onload=function (){
        if( xhr.status == 200 ){
        StarsBall= JSON.parse(xhr.responseText);
        // alert(StarsBall);
        if(StarsBall[0].starsBall=StarsBall[0].starsBall){
            $('.redBall').css('background-image',`url(${StarsBall[0].starsBall})`)
        }else if(StarsBall[1].starsBall=StarsBall[1].starsBall){
            $('.redBall').css('background-image',`url(${StarsBall[1].starsBall})`)
        }else{
            $('.redBall').css('background-image',`url(${StarsBall[2].starsBall})`)
        }
        //  alert(StarsBall[0].starsBall);
        }else{
        alert( xhr.status );
        }
    };


    var url = "php/homeCitizenStars.php?";
    xhr.open("Get", url, true);
    xhr.send( null );
};
StarsBall();

//==修改會員資料
$('body').on('click', '#memDataButton', function () {

    let titleName= document.getElementById('titleName').innerText=$('#memDataLock1').val();

    let memNo = $('.memNo').text();
    let memName = $('.memName').text();
    let memPsw = $('.memPsw').val();
    let email = $('.email').val();
    // console.log(titleName);
    // console.log(memNo);
    // console.log(memName);
    // console.log(memPsw);
    // console.log(email);
    sessionStorage.setItem('memNo', memNo);
    sessionStorage.setItem('titleName', titleName);
    sessionStorage.setItem('memPsw', memPsw);
    sessionStorage.setItem('email', email);
    $.ajax({
        url: `php/homeCitizenModify.php`,
        data: {
            titleName,
            memNo,
            memName: memName,
            memPsw,
            email,
        },
        type: 'POST',
        success: function () {
        },
    })
    $("#memberData").css("display","none");
    $("#memDataLock3").attr("disabled","false");
    //==修改會員資料 結束


    // 稱號寫入資料庫 開始
    saveTitle();
    function saveTitle(){
        let titleName = document.getElementById('titleName').innerText;
        $.ajax({
            url: `php/saveTitle.php`,
            data: {
                titleName,
            },
            type: 'GET',
            success: function () {
            },
        });
    };

});
