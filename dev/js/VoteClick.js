window.addEventListener("load",function(){
    function $id(id){
        return document.getElementById(id);
    }
    function $class(className){
        return document.querySelector(className);
    }
    function $classes(classNames){
        return document.querySelectorAll(classNames);
    }

    //__________ 新增投票的Click事件 __________//
    let voteAlertGroup = $class(".voteAlertGroup");
    let voteAlertDoing = $class(".voteAlertDoing");
    let voteAlertDid = $class(".voteAlertDid");
    let voteAdd = $class(".voteAdd");
    let voteAdding = $class(".voteAdding");
    let voteLaunchCancel = $class(".voteLaunchCancel");

    //------[翻轉] 點選卡片翻出或取消表單 ------//
    voteAdd.onclick = function(e){
        e.target.classList.toggle("flip");
        voteAdding.classList.toggle("flip");
    }
    voteLaunchCancel.onclick = function(){
        voteAdd.classList.toggle("flip");
        voteAdding.classList.toggle("flip");
    }


    //__________ 跳窗提示控制 __________//
    let voteLaunch = $class(".voteLaunch");
    let voteSelect = $classes(".voteSelect"); //All
    let voteCancel = $classes(".voteCancel"); //All
    let voteOkay = $classes(".voteOkay"); //All
    let report = $classes(".report"); //All
    let voteDoingNotice = $class(".voteDoingNotice");
    let voteDidNotice = $class(".voteDidNotice");
    let voteReportMessage = $class(".voteReportMessage");
    let voteAddingSubmit = $class(".voteAddingSubmit");
    let voteVotingSubmit = $class(".voteVotingSubmit");
    let voteReportSubmit = $class(".voteReportSubmit");
    let voteAlertReport = $class(".voteAlertReport");

    //######### 發起投票議題 #########//
    voteLaunch.onclick = function(){
        //------[驗證] 是否為會員 ------//
    
        //------[驗證] 是否完整填寫表單 ------//
        let voteTitle = $id("#voteTitle");
        let regExp = /^([\u4e00-\u9fa5])+\d|([\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341])/;
        
        //------[顯示] 確認視窗跳出 ------//
        voteDoingNotice.innerText="確定要發起此公投議題嗎？";
        voteAddingSubmit.style.display="inline-block";
        voteVotingSubmit.style.display="none";
        voteReportSubmit.style.display="none";
        voteReportMessage.style.display="none";
        voteAlertGroup.style.display="block";
        voteAlertDoing.style.display="block";
    }

    //######### 進行投票 #########//
    for(var i=0; i<voteSelect.length; i++){
        //------[驗證] 是否為會員 ------//
    
        //------[驗證] 是否已投過票 ------//

        //------[顯示] 確認視窗跳出 ------//
        voteSelect[i].onclick = function(){
            voteDoingNotice.innerHTML="確認後將無法更改，<br>您要選擇此投票項目嗎？";
            voteAddingSubmit.style.display="none";
            voteVotingSubmit.style.display="inline-block";
            voteReportSubmit.style.display="none";
            voteReportMessage.style.display="none";
            voteAlertGroup.style.display="block";
            voteAlertDoing.style.display="block";
            
        }
    }

    //######### 進行檢舉 #########//
    for(var i=0; i<report.length; i++){
        //------[驗證] 是否為會員 ------//

        //------[驗證] 是否有選擇檢舉原因 ------//

        //------[顯示] 檢舉原因選擇視窗 ------//
        report[i].onclick = function(){
            voteDoingNotice.innerText="檢舉原因：";
            voteAddingSubmit.style.display="none";
            voteVotingSubmit.style.display="none";
            voteReportSubmit.style.display="inline-block";
            voteReportMessage.style.display="block";
            voteAlertGroup.style.display="block";
            voteAlertDoing.style.display="block";
        }
    }

    //------[隱藏] 發起投票確認視窗-確認-(next:通知已新增投票) ------//
    voteAddingSubmit.onclick = function(){
        voteDidNotice.innerText="已新增投票議題";
        voteAlertDoing.style.display="none";
        voteAlertDid.style.display="block";
    }

    //------[隱藏] 進行投票確認視窗-確認-(next:通知已完成投票) ------//
    voteVotingSubmit.onclick = function(){
        voteDidNotice.innerText="已完成投票";
        voteAlertDoing.style.display="none";
        voteAlertDid.style.display="block";
    }
    //------[隱藏] 進行檢舉確認視窗-確認-(next:通知已完成檢舉) ------//
    voteReportSubmit.onclick = function(){
        voteDidNotice.innerText="已檢舉該議題";
        voteAlertDoing.style.display="none";
        voteAlertDid.style.display="block";
    }

    //------[隱藏] 發起投票確認視窗-取消 ------//
    //------[隱藏] 進行投票確認視窗-取消 ------//
    //------[隱藏] 檢舉投票議題-取消 ------//
    for(var i=0; i<voteCancel.length; i++){
        voteCancel[i].onclick = function(){
            voteAlertGroup.style.display="none";
            voteAlertDoing.style.display="none";
            voteAlertDid.style.display="none";
        }
    }

    //------[隱藏] 通知已新增投票-確認 ------//
    //------[隱藏] 通知已完成投票-確認 ------//
    //------[隱藏] 通知已完成檢舉-確認 ------//
    for(var i=0; i<voteOkay.length; i++){
        voteOkay[i].onclick = function(){
            voteAlertGroup.style.display="none";
            voteAlertDid.style.display="none";
        }
    }
});