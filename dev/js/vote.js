//---------- 與HTML做連結 ----------//
function $id(id) {
    return document.getElementById(id);
}

function $class(className) {
    return document.querySelector(className);
}

function $classes(classNames) {
    return document.querySelectorAll(classNames);
}

//---------- 頁面載入 ----------//
let voteRunData;
//[進行中]產生卡片
function showRunCards(jsonStr) {
    voteRunData = JSON.parse(jsonStr);
    let voteRunCards = "";
    for (var i = 0; i < voteRunData.length; i++) {
        voteRunCards +=
            `<div class="voteCard col-6 col-md-4 col-lg-3">
            <div class="voteWrapper">
                <div class="voteChart">
                    <canvas class="votePie"></canvas>
                </div>
                <div class="voteText">
                    <button class="report">檢舉</button>
                    <small>發起人：${voteRunData[i].memName}</small>
                    <h3>${voteRunData[i].votQ}</h3>
                    <p>${voteRunData[i].votDeadline}截止</p>
                    <div class="voteSelectGroup" data-votNo="${voteRunData[i].votNo}">
                        <button class="voteA">${voteRunData[i].votA}</button>
                        <button class="voteB">${voteRunData[i].votB}</button>
                    </div>
                </div>
            </div>
        </div>`;
    }
    $id("voteGroupRun").innerHTML =
        `<div class="voteCard col-12 col-md-4 col-lg-3">
        <div class="voteWrapper voteArea">
            <div class="voteAdd"></div>
            <div class="voteAdding">
                <form method="POST" name="voteForm" id="voteForm">
                    <h3>發起公民投票</h3>
                    <p>姓名：<input type="hidden" name="voter" class="voter" size="20" maxlength="10" placeholder="最多10個中文字" value="4" required>$_SESSION['memName']</p>
                    <p>題目：<input type="text" name="voteTitle" class="voteTitle" size="20" maxlength="10"
                            placeholder="最多10個中文字" required></p>
                    <p>時間： <time id="afterWeek">2019/12/06</time></p>
                    <div class="voteSelectGroup">
                        <p>選項：<input type="text" name="voteSelectorA" id="voteSelectorA" size="20"
                                maxlength="6" placeholder="最多6個中文字" required></p>
                        <p>選項：<input type="text" name="voteSelectorB" id="voteSelectorB" size="20"
                                maxlength="6" placeholder="最多6個中文字" required></p>
                    </div>
                </form>
                <button class="voteLaunch">發起</button>
                <button type="reset" form="voteForm" class="voteLaunchCancel">取消</button>
            </div>
        </div>
    </div>` + voteRunCards;

    pieProduce();

    //[點擊]翻出新增公民投票議題表單
    $class(".voteAdd").onclick = function () {
        $class(".voteAdd").classList.toggle("flip");
        $class(".voteAdding").classList.toggle("flip");
    }
    $class(".voteLaunchCancel").onclick = function () {
        $class(".voteAdd").classList.toggle("flip");
        $class(".voteAdding").classList.toggle("flip");
    }

    //[AUTO]自動產生截止日期
    voteDeadline();

    //[點擊]發起投票議題
    $class(".voteLaunch").onclick = function () {
        //[驗證]是否為會員

        //[驗證]是否完整填寫表單
        if (document.voteForm.voteTitle.value == "" || document.voteForm.voteTitle.value == " ") {
            alert("請輸入題目");
        } else if (document.voteForm.voteSelectorA.value == "" | document.voteForm.voteSelectorA.value == " ") {
            alert("請輸入選項");
        } else if (document.voteForm.voteSelectorB.value == "" | document.voteForm.voteSelectorB.value == " ") {
            alert("請輸入選項");
        } else if (document.voteForm.voteSelectorA.value == document.voteForm.voteSelectorB.value) {
            alert("選項不可重複");
        } else {
            //[顯示]確認視窗跳出
            $class(".voteDoingNotice").innerText = "確定要發起此公投議題嗎？";
            $class(".voteReportMessage").style.display = "none";
            $class(".voteAddingSubmit").style.display = "";
            $class(".voteVotingA").style.display = "none";
            $class(".voteVotingB").style.display = "none";
            $class(".voteReportSubmit").style.display = "none";
            $class(".voteAlertDoing").style.display = "block";
            $class(".voteAlertGroup").style.display = "block";
        }
    }

    let voteTitle = $class(".voteTitle");
    let voteSelectorA = $id("voteSelectorA");
    let voteSelectorB = $id("voteSelectorB");
    let voteA = $classes(".voteA");
    let voteB = $classes(".voteB");
    let voteCard = $classes(".voteCard");       //投票
    let voter = $class(".voter");               //發起人
    let countDown = $classes(".deadline");      //截止日期
    let votNo=$classes(".votNo");
    
    //[點擊]新增公民投票議題出現，事件聆聽功能
    $class(".voteAddingSubmit").addEventListener('click', issueProduce);
    voting();
    BTNs();
}

//[已結束]產生卡片
function showEndCards(jsonStr) {
    let voteEndData = JSON.parse(jsonStr);
    let voteEndCards = "";
    for (var i = 0; i < voteEndData.length; i++) {
        voteEndCards +=
            `<div class="voteCard col-6 col-md-4 col-lg-3">
            <div class="voteWrapper">
                <div class="voteChart">
                    <canvas class="endVotePie"></canvas>
                </div>
                <div class="voteText">
                    <button class="report">檢舉</button>
                    <small>發起人：${voteEndData[i].memName}</small>
                    <h3>${voteEndData[i].votQ}</h3>
                    <p>${voteEndData[i].votDeadline}截止</p>
                    <div class="voteSelectGroup">
                        <button disabled="disabled">已結束</button>
                    </div>
                </div>
            </div>
        </div>`;
    }
    $id("voteGroupEnd").innerHTML = voteEndCards;
    endPieProduce();
    BTNs();
}

//---------- PHP載入 ----------//
//[進行中]接卡片資料
function getRunCards() {
    //產生XMLHttpRequest物件
    var xhr = new XMLHttpRequest();
    //註冊callback function
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            // 伺服器回應成功
            if (xhr.status === 200) {
                showRunCards(xhr.responseText);
            } else {
                alert("發生錯誤: " + xhr.status);
            }
        }
    }
    //設定好所要連結的程式
    xhr.open("GET", "php/vote/getRunCards.php", true);
    //送出資料
    xhr.send(null);
}

//[已結束]接卡片資料
function getEndCards() {
    //產生XMLHttpRequest物件
    var xhr = new XMLHttpRequest();
    //註冊callback function
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            // 伺服器回應成功
            if (xhr.status === 200) {
                showEndCards(xhr.responseText);
            } else {
                alert("發生錯誤: " + xhr.status);
            }
        }
    }
    //設定好所要連結的程式
    xhr.open("GET", "php/vote/getEndCards.php", true);
    //送出資料
    xhr.send(null);
}
//[新增議題]存進資料庫
function voteLaunch() {
    //產生XMLHttpRequest物件
    var xhr = new XMLHttpRequest();
    //註冊callback function
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            // 伺服器回應成功
            if (xhr.status === 200) {
                //[點擊]發起投票確認視窗-確認-(next:通知已新增投票)
                getRunCards();
                $class(".voteDidNotice").innerHTML = "已新增投票議題，<br>恭喜您獲得100宇宙幣！";
                $class(".voteOkay").style.display = ""
                $class(".voteAlertDoing").style.display = "none";
                $class(".voteAlertDid").style.display = "block";
            } else {
                alert("發生錯誤: " + xhr.status);
            }
        }
    }
    //設定好所要連結的程式
    xhr.open("POST", "php/vote/voteLaunch.php", true);
    //要設定在發起連結之後,發送請求之前
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    //POST的參數，這裡要增加發布時間
    var data = `memNo=${$class(".voter").value} & votQ=${$class(".voteTitle").value} & votA=${$id("voteSelectorA").value} & votB=${$id("voteSelectorB").value}`;
    //送出資料
    xhr.send(data);

}

//---------- load ----------//
function init() {
    getRunCards();
    getEndCards();
    BTNs();
}
window.addEventListener("load", init, false);

 //[點擊]進行投票 (給demo的那幾個投票選項建立事件聆聽功能)
function voting() {
    for (var i = 0; i < $classes(".voteA").length; i++) {
        //[跳窗]選項一
        $classes(".voteA")[i].onclick = function (e) {
            var yesIndex = getIndex(this) - 1;
            $class(".voteDoingNotice").innerHTML = "確認後將無法更改，<br>您要選擇此投票選項嗎？";
            $class(".voteAlertGroup").style.display = "block";
            $class(".voteAlertDoing").style.display = "block";
            $class(".voteAddingSubmit").style.display = "none";
            $class(".voteReportMessage").style.display = "none";
            $class(".voteReportSubmit").style.display = "none";
            $class(".voteVotingB").style.display = "none";
            $class(".voteVotingA").style.display = "inline-block";
            $class(".voteVotingA").onclick = function () {
                $class(".voteDidNotice").innerHTML = "已完成投票，<br>恭喜您獲得30宇宙幣！";
                $class(".voteOkay").style.display = ""
                $class(".voteAlertDoing").style.display = "none";
                $class(".voteAlertDid").style.display = "block";
                // console.log(e.target.parentNode.getAttribute("data-votNo"));
                var xhr=new XMLHttpRequest();

                xhr.onload=function(){
                    if(xhr.status==200){
                        alert("投票成功！");
                    }else{
                        alert(xhr.responseText);
                    }   
                }
    
                let url="php/vote/gainYesTicket.php";
                xhr.open("post",url,true);
                let query_string=`votNo=${e.target.parentNode.getAttribute("data-votNo")}`;
                //memId,memPsw跟登入一樣
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                xhr.send(query_string);
            };
        }
        //[跳窗]選項二
        $classes(".voteB")[i].onclick = function (e) {
            var noIndex = getIndex(this) - 1;
            $class(".voteDoingNotice").innerHTML = "確認後將無法更改，<br>您要選擇此投票選項嗎？";
            $class(".voteAlertGroup").style.display = "block";
            $class(".voteAlertDoing").style.display = "block";
            $class(".voteAddingSubmit").style.display = "none";
            $class(".voteReportMessage").style.display = "none";
            $class(".voteReportSubmit").style.display = "none";
            $class(".voteVotingA").style.display = "none";
            $class(".voteVotingB").style.display = "inline-block";
            $class(".voteVotingB").onclick = function () {
                $class(".voteDidNotice").innerHTML = "已完成投票，<br>恭喜您獲得30宇宙幣！";
                $class(".voteOkay").style.display = ""
                $class(".voteAlertDoing").style.display = "none";
                $class(".voteAlertDid").style.display = "block";
                var xhr=new XMLHttpRequest();

                xhr.onload=function(){
                    if(xhr.status==200){
                        alert("投票成功！");
                    }else{
                        alert(xhr.responseText);
                    }   
                }
    
                let url="php/vote/gainNoTicket.php";
                xhr.open("post",url,true);
                let query_string=`votNo=${e.target.parentNode.getAttribute("data-votNo")}`;
                //memId,memPsw跟登入一樣
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                xhr.send(query_string);
            };
        }
    }
}

//insertAfter，在標籤後新增標籤
function insertAfter(newEl, targetEl) {
    var parentEl = targetEl.parentNode;
    if (parentEl.lastChild == targetEl) {
        parentEl.appendChild(newEl);
    } else {
        parentEl.insertBefore(newEl, targetEl.nextSibling);
    }
}

//取button的index值
function getIndex(child) {
    var parent = child.parentNode.parentNode.parentNode.parentNode.parentNode;
    var child = child.parentNode.parentNode.parentNode.parentNode;
    var children = parent.children;
    var i = children.length - 1;
    for (; i >= 0; i--) {
        if (child == children[i]) {
            break;
        }
    }
    return i;
};


//倒數計時截止生產器
let countDown = $classes(".deadline");
var countDownDate = new Date().getTime() + 86400000; //改成24hour
var rightnow = new Date().getTime();

var x = setInterval(function () {
    //Get today's date and time
    var now = new Date().getTime();
    //Find the distance between now and the count down date
    var distance = countDownDate - now;
    //Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    for (var i = 0; i < countDown.length; i++) {
        //Display the result in the element with id="demo"
        countDown[i].innerHTML = "投票時間剩 " + hours + "時" +
            minutes + "分 " + seconds + "秒";
        //If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            countDown[i].innerHTML = "EXPIRED";
        }
    }
}, 1000);


//設立一個物件把一格投票欄的贊成票與反對票統統包起來
function voteObj(name, title, deadline,prosTitle,consTitle, prosNum, consNum) { //
    this.name = voter.value;
    this.title = voteTitle.value;
    this.deadline = deadline;
    this.prosTitle = voteSelectorA.value;
    this.consTitle = voteSelectorB.value;
    this.prosNum = 0;
    this.consNum = 0;
}

// 圓餅圖變數
// var labels = ["贊成", "反對"];
var context;
var ctx = [];
var pieChart = [];
ctx=[];
//圓餅圖製作
function pieProduce() {
    var xhr=new XMLHttpRequest(); //新建個ajax讓去後端拉票出來
    xhr.onload=function(){
        if(xhr.status==200){
            let votes = JSON.parse(xhr.responseText);
            //產生餅圖
            context = $classes('.votePie');
            var j=context.length-1;//餅圖要逆著放回去。
            for (var i = 0 ; i < context.length ; i++) {
                ctx[i] = context[i].getContext('2d');  
                //把pieChart丟進for迴圈裡，並在context後面加上[i]即可
                pieChart[i] = new Chart(ctx[i], {
                    type: 'pie',
                    data: {
                        labels: [votes[j].votA,votes[j].votB],//init時就要有labels
                        datasets: [{
                            //預設資料
                            data: [votes[j].votACount, votes[j].votBCount],
                            borderColor: "transparent",
                            backgroundColor: [
                                //資料顏色
                                "#e24f90",
                                "#644498",
                            ],
                        }],
                    },
                });
                j--;
            };
            // for(var i = context.length;i>0;i--){

            // }

        }else{
            alert(xhr.responseText);
        }   
    }

    let url="php/vote/checkNum.php";
    xhr.open("Get", url, true);
    xhr.send( null );
}

// 產生結束的餅圖
function endPieProduce() {
    var xhr=new XMLHttpRequest(); //新建個ajax讓去後端拉票出來
    xhr.onload=function(){
        if(xhr.status==200){
            let votes = JSON.parse(xhr.responseText);
            //產生餅圖
            context = $classes('.endVotePie');
            var j=context.length-1;//餅圖要逆著放回去。
            for (var i = 0 ; i < context.length ; i++) {
                ctx[i] = context[i].getContext('2d');  
                //把pieChart丟進for迴圈裡，並在context後面加上[i]即可
                pieChart[i] = new Chart(ctx[i], {
                    type: 'pie',
                    data: {
                        labels: [votes[j].votA,votes[j].votB],//init時就要有labels
                        datasets: [{
                            //預設資料
                            data: [votes[j].votACount, votes[j].votBCount],
                            borderColor: "transparent",
                            backgroundColor: [
                                //資料顏色
                                "#e24f90",
                                "#644498",
                            ],
                        }],
                    },
                });
                j--;
            };
            // for(var i = context.length;i>0;i--){

            // }

        }else{
            alert(xhr.responseText);
        }   
    }

    let url="php/vote/checkEndNum.php";
    xhr.open("Get", url, true);
    xhr.send( null );
}


//[AUTO]自動產生截止日期
function voteDeadline() {
    var today = new Date();
    $id("afterWeek").innerText =
        today.getFullYear() + "/" +
        parseInt(today.getMonth() + 1) + "/" +
        parseInt(today.getDate() + 7) + "截止";
}

setInterval(pieProduce, 5000);

//[buttons]按鈕寶寶們
function BTNs() {
    //[點擊]進行檢舉
    for (var i = 0; i < $classes(".report").length; i++) {
        //[驗證]是否為會員

        //[顯示]檢舉原因選擇視窗
        $classes(".report")[i].onclick = function () {
            $class(".voteDoingNotice").innerText = "檢舉原因：";
            $class(".voteAlertGroup").style.display = "block";
            $class(".voteAlertDoing").style.display = "block";
            $class(".voteAddingSubmit").style.display = "none";
            $class(".voteReportSubmit").style.display = "";
            $class(".voteVotingA").style.display = "none";
            $class(".voteVotingB").style.display = "none";
            $class(".voteReportMessage").style.display = "block";
        }
    }

    //[點擊]送出檢舉
    $class(".voteReportSubmit").onclick = function () {
        //[驗證]是否有選擇檢舉原因
        if ($class(".voteReportMessage").selectedIndex === 0) {
            alert("請選擇檢舉原因");
            // voteDidNotice.innerText="請選擇檢舉原因";
            // voteAlertDid.style.display="block";
        } else {
            //[隱藏]進行檢舉確認視窗-確認-(next:通知已完成檢舉)
            $class(".voteDidNotice").innerText = "已檢舉該議題";
            $class(".voteOkay").style.display = ""
            $class(".voteAlertDoing").style.display = "none";
            $class(".voteAlertDid").style.display = "block";
            $class(".voteReportMessage").selectedIndex = "";
        }
    }

    //[點擊]發起投票確認視窗-取消
    //[點擊]進行投票確認視窗-取消
    //[點擊]檢舉投票議題-取消
    for (var i = 0; i < $classes(".voteCancel").length; i++) {
        $classes(".voteCancel")[i].onclick = function () {
            $class(".voteAlertGroup").style.display = "none";
            $class(".voteAlertDoing").style.display = "none";
            $class(".voteAlertDid").style.display = "none";
            $class(".voteReportMessage").selectedIndex = "";
        }
    }

    //[點擊]通知已新增投票-確認
    //[點擊]通知已完成檢舉-確認
    //[點擊]通知已完成投票-確認
    $class(".voteOkay").onclick = function () {
        $class(".voteAlertGroup").style.display = "none";
        $class(".voteAlertDid").style.display = "none";
    }
    $class(".voteKnow").onclick = function () {
        $class(".voteAlertGroup").style.display = "none";
        $class(".voteAlertDid").style.display = "none";
    }
}

function issueProduce() {
    console.log("事件要發布了哦！");
    voteLaunch();
    getRunCards();
}