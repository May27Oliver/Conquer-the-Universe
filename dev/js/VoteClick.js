window.addEventListener("load",function(){
    function $query(num){
        return document.querySelector(num);
    }
    var voteAdd = $query(".voteAdd");
    var voteAdding = $query(".voteAdding");
    var voteLaunch = $query(".voteLaunch");
    var voteLaunchCancel = $query(".voteLaunchCancel");
    var voteAlertGroup = $query(".voteAlertGroup");
    var voteAlertAdding = $query(".voteAlertAdding");
    var voteAlertAdded = $query(".voteAlertAdded");
    var voteSelect = $query(".voteSelect"); //All
    var voteAlertVoting = $query(".voteAlertVoting"); //All
    var voteAlertVoted = $query(".voteAlertVoted");
    var voteSubmit = $query(".voteSubmit"); //All
    var voteOkay = $query(".voteOkay"); //All
    var voteCancel = $query(".voteCancel"); //All
    var report = $query(".report"); //All
    var voteAlertReport = $query(".voteAlertReport");
    var voteReportSubmit = $query(".voteReportSubmit");

    //__________ 新增投票的Click事件 __________//
    voteAdd.onclick = function(e){
        e.target.classList.toggle("flip");
        voteAdding.classList.toggle("flip");
    }
    voteLaunchCancel.onclick = function(){
        voteAdd.classList.toggle("flip");
        voteAdding.classList.toggle("flip");
    }

    //__________ 新增投票的前台表單驗證 __________//



    //__________ 跳窗提示控制 __________//

    //------[顯示] 發起投票確認視窗 ------//
    voteLaunch.onclick = function(){
        voteAlertGroup.style.display="block";
        voteAlertAdding.style.display="block";
    }
    //------[顯示] 進行投票確認視窗 ------//
    voteSelect.onclick = function(){
        voteAlertGroup.style.display="block";
        voteAlertVoting.style.display="block";
    }
    //------[顯示] 檢舉投票議題 ------//
    report.onclick = function(){
        voteAlertGroup.style.display="block";
        voteAlertReport.style.display="block";
    }
    //------[隱藏] 發起投票確認視窗-取消 ------//
    //------[隱藏] 進行投票確認視窗-取消 ------//
    //------[隱藏] 檢舉投票議題-取消 ------//
    voteCancel.onclick = function(){
        voteAlertGroup.style.display="none";
        voteAlertAdding.style.display="none";
    }
    //------[隱藏] 發起投票確認視窗-確認-通知已新增投票 ------//
    voteSubmit.onclick = function(){
        voteAlertAdding.style.display="none";
        voteAlertAdded.style.display="block";
    }
    //------[隱藏] 進行投票確認視窗-確認-通知已完成投票 ------//
    voteSubmit.onclick = function(){
        voteAlertVoting.style.display="none";
        voteAlertVoted.style.display="block";
    }
    //------[隱藏] 通知已新增投票-確認 ------//
    //------[隱藏] 通知已完成投票-確認 ------//
    voteOkay.onclick = function(){
        voteAlertGroup.style.display="none";
        voteAlertAdded.style.display="none";
    }
    //------[隱藏] 點選背景也會關閉視窗 ------//
   /* voteAlertGroup.onclick = function(){
        voteAlertGroup.style.display="none";
        voteAlertAdding.style.display="none";
        voteAlertAdded.style.display="none";
        voteAlertVoting.style.display="none";
        voteAlertVoted.style.display="none";
        voteAlertReport.style.display="none";
    }*/

});