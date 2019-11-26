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

//檢舉按鈕 
function BTNs() {
    // 檢舉燈箱
    //######### 進行檢舉 #########//
    for (var i = 0; i < $classes(".report").length; i++) {
        //[顯示]檢舉原因選擇視窗
        $classes(".report")[i].onclick = function (e) {
            //[驗證]是否為會員
            if (loginBtn.innerText == "登出") {
                $class(".newsDoingNotice").innerText = "檢舉原因：";
                $class(".newsAlertGroup").style.display = "block";
                $class(".newsReportMessage").style.display = "block";
                
                $class(".newsAlertDoing").style.display = "block";
                $class(".newsAddingSubmit").style.display = "none";
                $class(".newsReportSubmit").style.display = "";
                $class(".newsVotingA").style.display = "none";
                $class(".newsVotingB").style.display = "none";
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
                    let data = `newsNo=${e.target.parentNode.getAttribute("data-newsNo")}&reportMsg=${$class(".newsReportMessage").selectedIndex}`;
                    //送出資料
                    xhr.send(data);
                }
            } 
        }
    }

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
                $class(".newsVotingA").style.display = "none";
                $class(".newsVotingB").style.display = "none";
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
                    let data = `newsNo=${e.target.parentNode.getAttribute("data-newsNo")}&reportMsg=${$class(".newsReportMessage").selectedIndex}`;
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

    let getNewsNO;
  


// 發新聞--$$$
$("#sendnews").click(function (e) {
    let storage = sessionStorage;
    let memMoney = $('#coin').text();
    let balance = memMoney - 100; //買道具扣錢
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

//NEWless-------
$(document).ready(function () {
    $(".LessBTN").click(function (e) {
    getNewsNO = e.target.parentNode.getAttribute("data-news");
    let newsless =1;
    console.log(getNewsNO);
    console.log(newsless);
        alert("黑爆你！！");
        
        $.ajax({
            url: "php/NEWSless.php",
            type: 'POST',
            data: {
                "newsless":newsless,
                 getNewsNO, 
                 
            },
            success: function (data) {
                // alert(UPtotal);
                // showNews()
            
            },
           
        });
    });
});

//NEWUP+++++
$(document).ready(function () {
    $(".AddBTN").click(function (e) {
    getNewsNO = e.target.parentNode.getAttribute("data-news");
    let newsADD =1;
    console.log(newsADD);
        alert("不錯喔！！");
        
        $.ajax({
            url: "php/NEWSup.php",
            type: 'POST',
            data: {
                "newsUP": newsADD,
                 getNewsNO, 
                 
            },
            success: function (data) {
                // alert(UPtotal);
                // showNews()
           
            },
           
        });
    });
});

    // 留言寫入
$(document).ready(function () {
    $("#sendMsg").click(function (e) {
        $.ajax({
            url: "php/NEWSinsertMSG.php",
            type: 'POST',
            data: {
                "news": $('#newsMSG input').val(),
                 getNewsNO, 
            },
            success: function (data) {
                showNewsMSG(); 
            },
            complete: function (data) {
                $("#newsMSG")[0].reset();
            }
        });
    });
});

// 按讚++暫時版
$(".AddBTN").click(function (e) {
    let newsADD = $('#add').text();
    let UPtotal = parseInt(newsADD) + 1;
    alert("不錯喔！！");
    $.ajax({
        url: `php/newsMember.php`,
        data: {
            UPtotal,
        },
        type: 'GET',
        success: function () {
            alert(UPtotal);
            $('#add').text(UPtotal);
        },
    })
});

//NEWless-------
$(document).ready(function () {
    $(".LessBTN").click(function (e) {
    getNewsNO = e.target.parentNode.getAttribute("data-news");
    let newsless =1;
    console.log(getNewsNO);
    console.log(newsless);
        alert("黑爆你！！");
        
        $.ajax({
            url: "php/NEWSless.php",
            type: 'POST',
            data: {
                "newsless":newsless,
                 getNewsNO, 
                 
            },
            success: function (data) {
                // alert(UPtotal);
                // showNews()
            
            },
           
        });
    });
});


    //   SHOWnews 黑色板子
    function showNews() {
        function showAllproduct(jsonStr) {
            var newsdata = JSON.parse(jsonStr);
            // console.log(newsdata.length);
            // console.log(newsdata);
            // let allprodHTML = "";
            // let newsCard = document.querySelector('.newsBoxAll');
            // console.log(newsCard);
            //新聞卡片
            for (var i = 0; i < newsdata.length; i++) {
                // console.log(newsdata[i].newsNo);
                $('.newsBoxAll').append(`
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
                            <div class="newsBtn">

                                <button id="bt"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i><span id="add">${newsdata[i].newsUP}</span></button>
                        
                                <button><i class="fa fa-thumbs-o-down" aria-hidden="true"></i><SPan>${newsdata[i].newsDown}</SPan></button>
                                <button id="msgBTN"><i class="fa fa-comments" aria-hidden="true"></i><SPan>${newsdata[i].pointRaise}</SPan></button>
                            </div>
                            <button class="report">檢舉</button>
                        </div>
                    </div>   
              </div>
              
              `);
                       
            }
            
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
                //         // alert("成功GET新聞編號");
                //         // console.log(data);
                //         // alert(testAjax.responseText);
                //         showNews2(d);             
                //     },           
                // })
            });
            $("#bt").click(function (e) {
                let newsADD = $('#add').text();
                let UPtotal = parseInt(newsADD) + 1;
                alert(UPtotal);
                $.ajax({
                    url: `php/newsMember.php`,
                    data: {
                        
                        balance: balance,
                    },
                    type: 'GET',
                    success: function () {
                     
                    },
                })
            });

            
        } //產生新聞End
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
  

     // 跳窗的NEWS
     function showNews2(d) {
        // function showAllproduct2(jsonStr) {
        //     var newsdataB = JSON.parse(jsonStr);
        let newsMsgAA = "";
        let msgCarda = document.querySelector('.newsWindowLeft');
        for (var i = 0; i < newsMSG.length; i++) {
            newsMsgAA += `<div class="newsTOP" id="newsTOP">
            <h2>這裡是標題</h2>
            <h3>剩餘時間: <span></span> </h3>
          </div>  
          <img src="img/trueNews.png" alt="">
          <div class="newsText"> 
        <p>這裡是新聞內容，不知道會有幾個字，不知道會有幾個字，不知道會有幾個字，不知道會有幾個字，不知道會有幾個字，不知道會有幾個字，不知道會有幾個字，不知道會有幾個字，不知道會有幾個字，不知道會有幾個字
            </p>
          </div>`;
        };
        msgCarda.innerHTML = newsMsgAA;
        BTNs();  
        } //產生新聞End
    showNews2();








    //   SHOWnews 抓MSG資料

    function showNewsMSG(newsMSG) {
        // function showAllmsg(jsonStr) {
            // var newsMSG = JSON.parse(jsonStr);
            
            let newsMsgHTML = "";
            let msgCard = document.querySelector('.newsMsgAll');
            // console.log(newsCard);
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
           <button class="report">檢舉</button>
         </div>
          `;
            };
            msgCard.innerHTML = newsMsgHTML;
            BTNs();
    }

// // 跳窗左邊內容
// function leftnews(){
//     var xhr = new XMLHttpRequest();
//     xhr.onload=function (){
//          if( xhr.status == 200 ){
//           left = JSON.parse(xhr.responseText);
//           console.log(badge);
//               HTMLstr = "";
//               for(var i=0; i<1; i++ ){
//                   HTMLstr += `
//                   <div class="newsTOP" id="newsTOP">
//                   <h2>${left[i].newsTitle}</h2>
//                   <h3>剩餘時間: <span>${left[i].image}</span> </h3>
//                 </div>
//                 <img src="img/${left[i].image}" alt="">
//                 <div class="newsText">
//                   <p>${left[i].newsContent}
//                   </p>
//                 </div>
//                   `;
//               }
//               document.getElementsByClassName('.newsWindowLeft').innerHTML =HTMLstr;
//          }else{
//           alert( xhr.status );
//          }
//     }
    
//     var url = "php/NewsShow.php?";
//     xhr.open("Get", url, true);
//     xhr.send( null );
//   }
// leftnews()
    



  
  



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
    $id("newsDiscuss").onclick = showDiscuss;
    
//================================


}
window.addEventListener("load", init, false);