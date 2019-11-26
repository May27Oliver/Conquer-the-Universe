// import { get } from "http";

function $id(id) {
    return document.getElementById(id);
}

function $class(className) {
    return document.querySelector(className);
}

function $classes(classNames) {
    return document.querySelectorAll(classNames);
}


// 跳窗
function showDiscuss(e) {
    $id("newsWindowWrap").style.display = "block";
    // console.log("您點擊到的是:",e.target.parentNode.getAttribute("data-news"));
}

function newsClose() {
    $id("newsWindowWrap").style.display = "none";
}

function CheckForm() {
    // newsAlertGroup.style.display="block";
    $id("newsAlertGroup").style.display = "block";

}



$class(".newsReportSubmit").onclick = function () {
    //[驗證]是否有選擇檢舉原因
    if ($class(".newsReportMessage").selectedIndex === 0) {
        alert("請選擇檢舉原因");
        // newsDidNotice.innerText="請選擇檢舉原因";
        // newsAlertDid.style.display="block";
    } else {
        //[隱藏]進行檢舉確認視窗-確認-(next:通知已完成檢舉)
        $class(".newsDidNotice").innerText = "已檢舉該議題";
        $class(".newsOkay").style.display = ""
        $class(".newsAlertDoing").style.display = "none";
        $class(".newsAlertDid").style.display = "block";
        $class(".newsReportMessage").selectedIndex = "";
    }
}
// <!-- // 此check()函式在最後的「傳送」案鈕會用到 -->
function check() {
    if (!MakeNews.Planet[0].checked && !MakeNews.Planet[1].checked && !MakeNews.Planet[2].checked) {
        alert("請選擇星球");
    } else if (MakeNews.content.value == "") {
        alert("請輸入新聞內容");
    } else if (MakeNews.title.value == "") {
        alert("請輸入標題");
    } else reg.submit();
}
// 時間---
function GetRTime() {
    var EndTime = new Date('2019/11/26 00:00:00');
    var NowTime = new Date();
    var t = EndTime.getTime() - NowTime.getTime();
    var d = 0;
    var h = 0;
    var m = 0;
    var s = 0;
    if (t >= 0) {
        d = Math.floor(t / 1000 / 60 / 60 / 24);
        h = Math.floor(t / 1000 / 60 / 60 % 24);
        m = Math.floor(t / 1000 / 60 % 60);
        s = Math.floor(t / 1000 % 60);
    } else {
        clearTimeout(timer);
        return;
    }
    document.getElementById("t_d").innerHTML = d + "天";
    document.getElementById("t_h").innerHTML = h + "時";
    document.getElementById("t_m").innerHTML = m + "分";
    document.getElementById("t_s").innerHTML = s + "秒";
    var timer = setTimeout(GetRTime, 1000);
}



function BTNs() {
    // 檢舉燈箱
    //######### 進行檢舉 #########//
    for (var i = 0; i < $classes(".report").length; i++) {
        //[顯示]檢舉原因選擇視窗
        $classes(".report")[i].onclick = function (e) {
            //[驗證]是否為會員
            if (loginBtn.innerText == "登出") {
                $class(".newsDoingNotice").innerText = "檢舉原因：";
                $class(".newsReportMessage").style.display = "block";
                $class(".newsAlertGroup").style.display = "block";
                $class(".newsAlertDoing").style.display = "block";
                $class(".newsAddingSubmit").style.display = "none";
                $class(".newsReportSubmit").style.display = "";
                // $class(".newsVotingA").style.display = "none";
                // $class(".newsVotingB").style.display = "none";
                //[點擊]送出檢舉
                $class(".newsReportSubmit").onclick = function () {
                    var xhr = new XMLHttpRequest();
                    xhr.onload = function () {
                        if (xhr.status === 200) {
                            //[驗證]是否有選擇檢舉原因
                            if ($class(".newsReportMessage").selectedIndex === 0) {
                                alert("請選擇檢舉原因");
                                // newsDidNotice.innerText="請選擇檢舉原因";
                                // newsAlertDid.style.display="block";
                            } else {
                                //[隱藏]進行檢舉確認視窗-確認-(next:通知已完成檢舉)
                                $class(".newsDidNotice").innerText = "已檢舉該議題";
                                $class(".newsOkay").style.display = ""
                                $class(".newsAlertDoing").style.display = "none";
                                $class(".newsAlertDid").style.display = "block";
                                $class(".newsReportMessage").selectedIndex = "";
                            }
                        } else {
                            alert(`發生錯誤:${xhr.status} | ${xhr.responseText}`);
                        }
                    }
                    //設定好所要連結的程式
                    xhr.open("post", "php/newsReport.php", true);
                    //要設定在發起連結之後,發送請求之前
                    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                    //POST的參數，這裡要增加發布時間
                    let data = `newsNo=${e.target.getAttribute("data-newsNo")}&reportMsg=${$class(".newsReportMessage").selectedIndex}`;
                    //送出資料
                    xhr.send(data);
                }
            } else {
                alert("請登入再檢舉喔！");
                loginWrap.style.display = "";
                loginPage.style.display = "";
                registerPage.style.display = "none";
                loginBtn.backgroundImage = "none";
            }
        }
    }

    //---[隱藏] 發起投票確認視窗-確認-(next:通知已新增投票) ---//
    $class(".newsAddingSubmit").onclick = function () {
        $class(".newsDidNotice").innerHTML = "已新增投票議題，<br>恭喜您獲得100宇宙幣！";
        $class(".newsOkay").style.display = ""
        $class(".newsAlertDoing").style.display = "none";
        $class(".newsAlertDid").style.display = "block";
    }

    //---[隱藏] 發起投票確認視窗-取消 ---//
    //---[隱藏] 進行投票確認視窗-取消 ---//
    //---[隱藏] 檢舉投票議題-取消 ---//

    let newsCancel = $classes(".newsCancel");
    for (var i = 0; i < newsCancel.length; i++) {
        newsCancel[i].onclick = function () {
            $class(".newsAlertGroup").style.display = "none";
            $class(".newsAlertDoing").style.display = "none";
            $class(".newsAlertDid").style.display = "none";
        }
    }

    //---[隱藏] 通知已新增投票-確認 ---//
    //---[隱藏] 通知已完成檢舉-確認 ---//
    //---[隱藏] 通知已完成投票-確認 ---//
    $class(".newsOkay").onclick = function () {
        $class(".newsAlertGroup").style.display = "none";
        $class(".newsAlertDid").style.display = "none";
    }
    $class(".newsKnow").onclick = function () {
        $class(".newsAlertGroup").style.display = "none";
        $class(".newsAlertDid").style.display = "none";
    }
}

function init() {
    rep
    let getNewsNO;
            function showAllproduct(jsonStr){
            var newsdata = JSON.parse(jsonStr);
            let htmlStr = "";
            console.log( "=============",newsdata.length);
            for (var i = 0; i < newsdata.length; i++) {
                // console.log(newsdata[i].newsNo);
                htmlStr += `
                <div class="newsitem" >

                    <div class="newsPic">
                        <img src="images/${newsdata[i].image}" alt="">
                    </div>
                    <div class="newsText" data-news="${newsdata[i].newsNo}"> 
                        <div class="newsTOP" id="app" data-news="${newsdata[i].newsNo}">
                            
                                <h2 data-news="${newsdata[i].newsNo}">${newsdata[i].newsTitle}</h2>
                             
                                <h3 data-news="${newsdata[i].newsNo}">截止時間: <span>${newsdata[i].newsDeadline}</span></br></span></h3>
                        </div>
                        <p onclick="showDiscuss()" data-news="${newsdata[i].newsNo}">${newsdata[i].newsContent}</p>
                        <div class="newsBtnAll">
                            <div class="newsBtn" data-news="${newsdata[i].newsNo}">

                                <button class="goodBTN"><i class="fa fa-thumbs-o-up fa-2x" aria-hidden="true"></i><span class="up">${newsdata[i].newsUP}</span></button>
                        
                                <button class="LessBTN"><i class="fa fa-thumbs-o-down fa-2x" aria-hidden="true"></i><span class="down">${newsdata[i].newsDown}</span></button>
                                <button class="msgBTN"><i class="fa fa-comments fa-2x" aria-hidden="true"></i><span>留言</span></button>
                            </div>
                            <button class="report" data-newsNo=${newsdata[i].newsNo}>檢舉</button>
                        </div>
                    </div>   
              </div>
              
              `;

                       
            }//for
            //-------------------------
                        //   $('.newsBoxAll').append(htmlStr);
                        document.querySelector(".newsBoxAll").innerHTML = htmlStr;

                        //---------------------------------btn.addEventListener
                        let newsBtns = document.getElementsByClassName("newsBtn");
                        let goodBTNs = document.getElementsByClassName("goodBTN");
                        let LessBTNs = document.getElementsByClassName("LessBTN");
                        let msgBTNs = document.getElementsByClassName("msgBTN");
                        for( let i=0; i<newsBtns.length; i++){
                            
                            let newsNo = newsBtns[i].getAttribute("data-news");  
                            goodBTNs[i].addEventListener("click",pressGood);
                            goodBTNs[i].newsNo = newsNo;
                            LessBTNs[i].addEventListener("click",pressLess);
                            LessBTNs[i].newsNo = newsNo;
                            msgBTNs[i].addEventListener("click",pressMsg);
                            msgBTNs[i].newsNo = newsNo;
                        }  

          
          
                        function pressGood(e){
                          let button = e.currentTarget;
                          button.querySelector("span").innerHTML = parseInt(button.querySelector("span").innerHTML)+ 1;
                          let newsNo = e.currentTarget.newsNo;
                          console.log("=======",newsNo);
                          let xhr = new XMLHttpRequest();
                          xhr.onload = function(){
                            if(xhr.status==200){
                                console.log("=======",xhr.responseText);
                            }else{
                                alert(xhr.status);
                            }
                          }
                          xhr.open("get", "php/updateNewsUpDown.php?action=up&newsNo="+ newsNo);
                          xhr.send(null)
                        }
          
                        function pressLess(e){
                            let button = e.currentTarget;
                            button.querySelector("span").innerHTML = parseInt(button.querySelector("span").innerHTML)+ 1;
                            let newsNo = e.currentTarget.newsNo;
                            console.log("=======",newsNo);
                            let xhr = new XMLHttpRequest();
                            xhr.onload = function(){
                              if(xhr.status==200){
                                  console.log("=======",xhr.responseText);
                              }else{
                                  alert(xhr.status);
                              }
                            }
                            xhr.open("get", "php/updateNewsUpDown.php?action=down&newsNo="+ newsNo);
                            xhr.send(null)
                        }
          //........................................................
                        function pressMsg(e){
                            let button = e.currentTarget;
                            getNewsNO = e.currentTarget.newsNo;
                            let xhr = new XMLHttpRequest();
                            xhr.onload = function (){
                                if(xhr.status == 200){
                                    var newsMSG = JSON.parse(xhr.responseText);
                                    showNewsMSG(newsMSG);
                                    leftnews();
                                    $id("newsWindowWrap").style.display = "block";
                                }else{
                                    alert(xhr.status);
                                }

                            }
                            xhr.open("get", "php/NewsMSGShow.php?getNewsNO="+getNewsNO, false);
                            xhr.send(null);

                            // $.ajax({
                            //     url: `php/NewsMSGShow.php`,
                            //     dataType: "json",
                            //     data: {
                            //         "getNewsNO": getNewsNO
                            //     },
                            //     type: 'get',
                            //     success: function(data){
                            //         // alert("成功GET新聞編號");
                            //         // console.log(data);
                            //         // alert(testAjax.responseText);
                            //         showNewsMSG(data);
                            //         leftnews();
                                               
                            //     },           
                            // })
                        }
            //-------------------------
            // console.log("您點擊到的是:",e.target.parentNode.getAttribute("data-news")); 

            // newsCard.innerHTML = allprodHTML;
            BTNs();
          
        // showDiscuss();
           // 跳窗
           
            $('.newsTOP').click(function(e){
                $id("newsWindowWrap").style.display = "block";
                // console.log("您點擊到的是:",e.target.parentNode.getAttribute("data-news"));
                // console.log(e.target.getAttribute("data-news"));
                getNewsNO = e.target.parentNode.getAttribute("data-news");
                // alert(getNewsNO);
                //------------------------------
                // testAjax = 
                // console.log(getNewsNO);
                $.ajax({
                    url: `php/NewsMSGShow.php`,
                    dataType: "json",
                    data: {
                        "getNewsNO": getNewsNO
                    },
                    type: 'get',
                    success: function(data){
                        // alert("成功GET新聞編號");
                        // console.log(data);
                        // alert(testAjax.responseText);
                        showNewsMSG(data);
                        leftnews();
                                   
                    },           
                })

                // $.ajax({
                //     url: `php/NewsShow2.php`,
                //     dataType: "json",
                //     data: {
                //         "getNewsNO": getNewsNO
                //     },
                //     type: 'get',
                //     success: function(d){
                //         alert("成功GET新聞編號");
                //         // console.log(data);
                //         // alert(testAjax.responseText);
                //        ;             
                //     },           
                // })
            });
            // $("#bt").click(function (e) {
            //     let newsADD = $('#add').text();
            //     let UPtotal = parseInt(newsADD) + 1;
            //     alert(UPtotal);
            //     $.ajax({
            //         url: `php/newsMember.php`,
            //         data: {
                        
            //             balance: balance,
            //         },
            //         type: 'GET',
            //         success: function () {
                     
            //         },
            //     })
            // });

            
        } //產生新聞End
  
   //   SHOWnews 黑色板子
    function showNews() {

        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            if (xhr.status == 200) {
                showAllproduct(xhr.responseText);
            } else {
                alert(xhr.status);
            }
        }
        xhr.open("get", "php/NewsShow.php", true);
        xhr.send(null);
    }
    showNews();

// 發新聞--$$$
$("#sendnews").click(function (e) {

    let balance = 100; //買道具扣錢
    // alert(balance);
    $.ajax({
        url: `php/NEWSshop.php`,
        data: {
            // memNo,
            balance,
        },
        type: 'GET',
        success: function () {
            // alert(balance);
            // $('#coin').text(balance);
        },
    })
});


// 留言寫入
// $(document).ready(function (e) {
//     $("#sendMsg").click(function () {
//         $.ajax({
//             url: "php/NEWSinsertMSG.php",
//             type: 'POST',
//             data: {
//                 "newsMSG": $('#newsMSG input').val(),
//                  getNewsNO, 
//             },
//             success: function (data) {
//                 showNewsMSG(data);
//                 // renewNewsMsg(data);
//             },
//             complete: function (data) {
//                 $("#newsMSG")[0].reset();
//             }
//         });
//     });
// });

//---------------------------------------------------------------- 留言寫入
$(document).ready(function (e) {
    $("#sendMsg").click(function () {
        let xhr = new XMLHttpRequest();
        xhr.onload = function (){

            renewNewsMsg(xhr.responseText);
        }
        let newsMSG = document.getElementsByName("newsMSG")[0].value;
        let url = `php/NEWSinsertMSG.php?newsMSG=${newsMSG}&getNewsNO=${getNewsNO}`;
        xhr.open("get", url, true);
        xhr.send(null);
    });
});

function renewNewsMsg(jsonStr){
    news = JSON.parse(jsonStr);

    console.log(news);
    let newsMsgHTML = "";
    
    newsMsgHTML += `
           <div class="newsMsgitem">
           <div class="newsMsgID">
             <h3>${news.memName}</h3>
             <p>${news.newsMsgDate} </p>
           </div>
           <div class="newsMsgBox">
             <p>${news.newsMSG}</p>
           </div>
           <button class="report" data-newsNo=${news.newsNo}>檢舉</button>
         </div>
          `;
    newsMsgHTML = newsMsgHTML + document.querySelector('.newsMsgAll').innerHTML ;
    // alert(newsMsgHTML);    
    document.querySelector('.newsMsgAll').innerHTML = newsMsgHTML;
   
    
             
}
//----------------------------------------------------------------  

// 跳窗左邊內容
function leftnews(){
    // var left = JSON.parse(jsonStr);
    var xhr = new XMLHttpRequest();
    xhr.onload=function (){
         if( xhr.status == 200 ){
             console.log(xhr.responseText);
          news = JSON.parse(xhr.responseText);
        //   console.log(news);
          
         HTMLstr= `<div class="newsTOP" id="newsTOP">
          <h2>${news.newsTitle}</h2>
          <h3>截止時間: <span>${news.newsDeadline}</span> </h3>
        </div>
        <img src="images/${news.image}" alt="">
        <div class="newsText">
          <p>${news.newsContent}
          </p>
        </div>`;
        document.getElementsByClassName('newsWindowLeft')[0].innerHTML =HTMLstr;
         }else{
          alert( xhr.status );
         }
    }
    xhr.open("get", `php/NewsShow2.php?getNewsNO=${getNewsNO}`); 
    console.log(`php/NewsShow2.php?getNewsNO=${getNewsNO}`);
    xhr.send( null );
  }
 


 //   跳窗右邊MSG資料

function showNewsMSG(newsMSG) {
        // function showAllmsg(jsonStr) {
            // var newsMSG = JSON.parse(jsonStr);
            
            let newsMsgHTML = "";
            let msgCard = document.querySelector('.newsMsgAll');
             console.log(newsMSG);
            //新聞留言
            for (var i = 0; i < newsMSG.length; i++) {
                newsMsgHTML += `
           <div class="newsMsgitem">
           <div class="newsMsgID">
             <h3>${newsMSG[i].memName}</h3>
             <p>${newsMSG[i].newsMsgDate} </p>
           </div>
           <div class="newsMsgBox">
             <p>${newsMSG[i].newsMsgContent}</p>
           </div>
           <button class="report" data-newsNo=${newsMSG[i].newsNo}>檢舉</button>
         </div>
          `;
            };
            msgCard.innerHTML = newsMsgHTML;
            BTNs();
            
    }

   
  // =========================================
    // 顯示上傳圖片
    document.getElementById("upFile").onchange = function (e) {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("imgPreview").src = reader.result;
        }
        reader.readAsDataURL(file);
    };

    // SHOW 留言板燈箱
    $class(".newsWindoClose").onclick = newsClose;
    // $class(".fa-comments").onclick = showDiscuss;
    // $id("newsDiscuss").onclick = showDiscuss;
    

    
 
	//...upFile.onchange
    document.getElementById("upFile").onchange = function(e){
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.onload = function(e){
            document.getElementById("imgPreview").src= reader.result;
        }
        reader.readAsDataURL( file );
    };
		     
//================================

}
window.addEventListener("load", init, false);