//---------- 備用函式 ----------//
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
//[進行中]產生卡片
function showRunCards(jsonStr) {
    let voteRunData = JSON.parse(jsonStr);
    let voteRunCards = "";
    for (var i = 0; i < voteRunData.length; i++) {
        voteRunCards +=
            `<div class="voteCard col-6 col-md-4 col-lg-4">
                <div class="voteWrapper">
                    <div class="voteChart">
                        <img src="img/vote/unvoted.png" alt="未投票" class="unVoted I-${voteRunData[i].votNo}">
                        <canvas class="votePie"></canvas>
                    </div>
                    <div class="voteText" data-votNo="${voteRunData[i].votNo}">
                        <button class="report">檢舉</button>
                        <small>發起：${voteRunData[i].memName}</small>
                        <h3><b>${voteRunData[i].votQ}</b></h3>
                        <p>${voteRunData[i].votDeadline}截止</p>
                        <div class="voteSelectGroup" data-votNo="${voteRunData[i].votNo}">
                            <button class="voteA A-${voteRunData[i].votNo}">${voteRunData[i].votA}</button>
                            <button class="voteB B-${voteRunData[i].votNo}">${voteRunData[i].votB}</button>
                        </div>
                    </div>
                </div>
            </div>`;
    }
    $id("voteGroupRun").innerHTML = voteRunCards;
    pieProduce();
    voting();
    BTNs();
}

//---------- AJAX: PHP載入 ----------//
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
    xhr.open("GET", "php/vote/getIndexCards.php", true);
    //送出資料
    xhr.send(null);
}

//[Session]檢查使用者是否為已投票
function getVoted() {
    let xhr = new XMLHttpRequest();
    //設定好所要連結的程式
    xhr.open("GET", "php/vote/getVoted.php", true);
    //送出資料
    xhr.send(null);
    xhr.onload = function () {
        // 伺服器回應成功
        if (xhr.status === 200) {
            //檢查session
            let voted = JSON.parse(xhr.responseText);
            let voteSelectGroup = $classes(".voteSelectGroup");
            for (var i = 0; i < voted.length; i++) {
                for (var j = 0; j < voteSelectGroup.length; j++) {
                    if(voted[i].votNo == voteSelectGroup[j].getAttribute("data-votNo")){
                        // alert(voted[i].votNo+"已投過票囉~");
                        var Aclass=`A-${voted[i].votNo}`;
                        var Bclass=`B-${voted[i].votNo}`;
                        var Iclass=`I-${voted[i].votNo}`;
                        // alert(Aclass);
                        $(`.${Aclass}`).attr("disabled","disabled");
                        $(`.${Bclass}`).attr("disabled","disabled");
                        $(`.${Iclass}`).css("display","none");
                    }else{
                        // alert(`發生錯誤: ${xhr.responseText}`);
                    }
                }
            }
        } else {
            // alert(`發生錯誤: ${xhr.status}`);
        }
    }
}


//---------- load ----------//
function init() {
    getRunCards();
    getVoted();
    BTNs();
}
window.addEventListener("load", init, false);

//[點擊]進行投票
function voting() {
    for (var i = 0; i < $classes(".voteA").length; i++) {
        //[跳窗]選項一
        $classes(".voteA")[i].onclick = function (e) {
            var yesIndex = getIndex(this) - 1;
            if (loginBtn.innerText == "登出") {
                $class(".voteDoingNotice").innerHTML = "確認後將無法更改，<br>您要選擇此投票選項嗎？";
                $class(".voteAlertGroup").style.display = "block";
                $class(".voteAlertDoing").style.display = "block";
                $class(".voteAddingSubmit").style.display = "none";
                $class(".voteReportMessage").style.display = "none";
                $class(".voteReportSubmit").style.display = "none";
                $class(".voteVotingB").style.display = "none";
                $class(".voteVotingA").style.display = "inline-block";
                $class(".voteVotingA").onclick = function () {
                    var xhr = new XMLHttpRequest();
                    xhr.onload = function () {
                        if (xhr.status == 200) {
                            let starCoin =xhr.responseText;
                            pieProduce();
                            $class(".voteDidNotice").innerHTML = "已完成投票，<br>恭喜您獲得宇宙幣10元！";
                            $class(".voteOkay").style.display = ""
                            $class(".voteAlertDoing").style.display = "none";
                            $class(".voteAlertDid").style.display = "block";
                            $id("coin").innerText = starCoin;
                            // $classes(".unVoted")[j].style.display = "none";
                            // e.target.classList.add("voteSelected");
                            // e.target.setAttribute("disabled");
                            getVoted();
                        } else {
                            alert(xhr.responseText);
                        }
                    }
                    let url = "php/vote/gainYesTicket.php";
                    xhr.open("post", url, true);
                    let query_string = `votNo=${e.target.parentNode.getAttribute("data-votNo")}`;
                    //memId,memPsw跟登入一樣
                    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                    xhr.send(query_string);
                };
            } else {
                alert("請登入再投票喔！");
                loginWrap.style.display = "";
                loginPage.style.display = "";
                registerPage.style.display = "none";
                loginBtn.backgroundImage = "none";
            }
        }
        //[跳窗]選項二
        $classes(".voteB")[i].onclick = function (e) {
            var noIndex = getIndex(this) - 1;
            if (loginBtn.innerText == "登出") {
                $class(".voteDoingNotice").innerHTML = "確認後將無法更改，<br>您要選擇此投票選項嗎？";
                $class(".voteAlertGroup").style.display = "block";
                $class(".voteAlertDoing").style.display = "block";
                $class(".voteAddingSubmit").style.display = "none";
                $class(".voteReportMessage").style.display = "none";
                $class(".voteReportSubmit").style.display = "none";
                $class(".voteVotingA").style.display = "none";
                $class(".voteVotingB").style.display = "inline-block";
                $class(".voteVotingB").onclick = function () {
                    var xhr = new XMLHttpRequest();
                    xhr.onload = function () {
                        if (xhr.status == 200) {
                            let starCoin =xhr.responseText;
                            pieProduce();
                            $class(".voteDidNotice").innerHTML = "已完成投票，<br>恭喜您獲得宇宙幣10元！";
                            $class(".voteOkay").style.display = ""
                            $class(".voteAlertDoing").style.display = "none";
                            $class(".voteAlertDid").style.display = "block";
                            $id("coin").innerText = starCoin;
                            // $classes(".unVoted")[j].style.display = "none";
                            // e.target.classList.add("voteSelected");
                            // e.target.setAttribute("disabled");
                            getVoted();
                            //////////////////////////////////////////////
                        } else {
                            alert(xhr.responseText);
                        }
                    }
                    let url = "php/vote/gainNoTicket.php";
                    xhr.open("post", url, true);
                    let query_string = `votNo=${e.target.parentNode.getAttribute("data-votNo")}`;
                    //memId,memPsw跟登入一樣
                    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                    xhr.send(query_string);
                };
            } else {
                alert("請登入再投票喔！");
                loginWrap.style.display = "";
                loginPage.style.display = "";
                registerPage.style.display = "none";
                loginBtn.backgroundImage = "none";
            }
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
function voteObj(name, title, deadline, prosTitle, consTitle, prosNum, consNum) { //
    this.name = voter;
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
ctx = [];
//圓餅圖製作
function pieProduce() {
    var xhr = new XMLHttpRequest(); //新建個ajax讓去後端拉票出來
    xhr.onload = function () {
        if (xhr.status == 200) {
            let votes = JSON.parse(xhr.responseText);
            //產生餅圖
            context = $classes('.votePie');
            var j = context.length - 1; //餅圖要逆著放回去。
            for (var i = 0; i < context.length; i++) {
                ctx[i] = context[i].getContext('2d');
                //把pieChart丟進for迴圈裡，並在context後面加上[i]即可
                pieChart[i] = new Chart(ctx[i], {
                    type: 'pie',
                    data: {
                        labels: [votes[j].votA, votes[j].votB], //init時就要有labels
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

        } else {
            alert(xhr.responseText);
        }
    }

    let url = "php/vote/checkNum.php";
    xhr.open("Get", url, true);
    xhr.send(null);
}

setInterval(pieProduce, 5000);

//[buttons]按鈕寶寶們
function BTNs() {
    //[點擊]進行檢舉
    for (var i = 0; i < $classes(".report").length; i++) {
        //[顯示]檢舉原因選擇視窗
        $classes(".report")[i].onclick = function (e) {
            //[驗證]是否為會員
            if (loginBtn.innerText == "登出") {
                $class(".voteDoingNotice").innerText = "檢舉原因：";
                $class(".voteAlertGroup").style.display = "block";
                $class(".voteAlertDoing").style.display = "block";
                $class(".voteAddingSubmit").style.display = "none";
                $class(".voteReportSubmit").style.display = "";
                $class(".voteVotingA").style.display = "none";
                $class(".voteVotingB").style.display = "none";
                $class(".voteReportMessage").style.display = "block";
                //[點擊]送出檢舉
                $class(".voteReportSubmit").onclick = function () {
                    var xhr = new XMLHttpRequest();
                    xhr.onload = function () {
                        if (xhr.status === 200) {
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
                        } else {
                            alert(`發生錯誤:${xhr.status}`);
                        }
                    }
                    //設定好所要連結的程式
                    xhr.open("post", "php/vote/voteReport.php", true);
                    //要設定在發起連結之後,發送請求之前
                    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                    //POST的參數，這裡要增加發布時間
                    let data = `votNo=${e.target.parentNode.getAttribute("data-votNo")}&reportMsg=${$class(".voteReportMessage").selectedIndex}`;
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
    // console.log("事件要發布了哦！");
    voteLaunch();
    getRunCards();
}