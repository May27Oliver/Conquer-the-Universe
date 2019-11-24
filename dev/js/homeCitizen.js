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

//點擊會員編輯鉛筆按鈕可修改資料
function showMemDataEdit1(){
document.getElementById("memDataLock1").disabled=false;
}
function showMemDataEdit2(){
$id("memDataLock2").disabled=false;
} 
function showMemDataEdit3(){
$id("memDataLock3").disabled=false;
}

//點擊alert視窗_確認_取消修改
function alertCancelMemData(){
$id("alertWindowWrap").style.display = "none";
$id("memberData").style.display = "none";
$id("memDataLock1").disabled=true;
$id("memDataLock2").disabled=true;
$id("memDataLock3").disabled=true;

}
//點擊alert視窗_取消_取消修改
function alertMemData(){
$id("alertWindowWrap").style.display = "none";

}

//====換外觀道具
//設定帽子換道具
// function showEqui( e ){
// let tagSrc =e.target.src;
// console.log(tagSrc);
// document.getElementById("Equi").src = tagSrc.replace("","");
// document.getElementById("Equi").style.display = "block";
// }

// function showEquiHand(e){
// let HadSrc =e.target.src;
// console.log(HadSrc);
// document.getElementById("EquiHand").src = HadSrc.replace("","");
// document.getElementById("EquiHand").style.display = "block";
// }

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
// $id("today").style.display ="none";
// $id("hat2").style.display = "block";
$id("today").remove();

}



function init(){
//===設定memDataBtn/memNameBox.onclick 事件理程序是 showMemberForm ,編輯會員資料按鈕
$id("memDataBtn").onclick = showMemberForm;
// $id("memNameBox").onclick = showMemberForm;

//===設定btnLogin.onclick 事件處理程序是 sendForm ,確認按鈕-送去後端資料
// $id("memDataButton").onclick = sendForm;

//===設定btnLoginCancel.onclick 事件處理程序是 cancelLogin ,取消按鈕-跳出視窗
$id("memDataCancel").onclick = cancelMemData;

//===設定memDataEdit.onclick 事件理程序是  showMemDataEdit ,會員資料編輯鉛筆按鈕
document.getElementById("memDataEdit1").onclick = showMemDataEdit1;
$id("memDataEdit2").onclick = showMemDataEdit2;
$id("memDataEdit3").onclick = showMemDataEdit3;

//===設定alertWindowWrap確認取消
$id("alertButton").onclick = alertCancelMemData;

//===設定alertWindowWrap不要取消
$id("cancelButton").onclick = alertMemData;

//===換帽子道具
// let imgs = document.querySelectorAll(".propBox .hat");
// for(let i=0; i<imgs.length; i++){
//     imgs[i].onclick = showEqui;
//     console.log(imgs[i]);
// }

//===解除帽子道具
$id("Equi").onclick = removeEqui;
$id("alertEqui").onclick = alertRemoveEqui;

//===換手上道具
// let handImgs = document.querySelectorAll(".propBox .hand");
// for(let i=0; i<handImgs.length; i++){
//     handImgs[i].onclick = showEquiHand;
//     console.log(handImgs[i]);
// }

//===解除手上道具
$id("EquiHand").onclick = removeEquiHand;
$id("alertEquiHand").onclick = alertRemoveEquiHand;

//===購買限時道具
document.querySelector(".citizenShop").onclick = homeShopAlert;
$id("alertHomeShop").onclick = alertRemoveHomeShop;

}; //window.onload

window.onload=init;	
