window.addEventListener("load",function(){
    //__________ 與HTML做連結 __________//
    function $id(id){
        return document.getElementById(id);
    }
    function $class(className){
        return document.querySelector(className);
    }
    function $classes(classNames){
        return document.querySelectorAll(classNames);
    }
    let voteAlertGroup = $class(".voteAlertGroup");
    let voteAlertDoing = $classes(".voteAlertDoing");
    let voteAlertDid = $class(".voteAlertDid");
    let voteAdd = $class(".voteAdd");
    let voteAdding = $class(".voteAdding");
    let voteTitle = $id("#voteTitle");
    let voteSelectorA = $id("#voteSelectorA");
    let voteSelectorB = $id("#voteSelectorB");
    let voteLaunchCancel = $class(".voteLaunchCancel");
    let voteWrapper= $classes(".voteWrapper");
    let voteLaunch = $class(".voteLaunch");
    let voteSelect = $classes(".voteSelect");
    let voteYes = $classes(".voteYes");
    let voteNo = $classes(".voteNo");
    let voteCancel = $classes(".voteCancel");
    let voteOkay = $classes(".voteOkay");
    let report = $classes(".report");
    let voteDoingNotice = $classes(".voteDoingNotice");
    let voteDidNotice = $class(".voteDidNotice");
    let voteReportMessage = $class(".voteReportMessage");
    let voteAddingSubmit = $class(".voteAddingSubmit");
    let voteVotingSubmit = $classes(".voteVotingSubmit");
    let voteReportSubmit = $class(".voteReportSubmit");
    let voteVotingYes = $classes(".voteVotingYes");
    let voteVotingNo = $classes(".voteVotingNo");


/*__________ 圓餅圖製作 __________*/
    var labels = ['贊同','不贊同'];
    var context = $classes('.votePie');
    var ctx=[];
    var pieChart=[];
    // console.log(context.length);
    //console.log("抓到",context.length,"張照片");
        for(var i=0; i<context.length; i++){
            ctx[i] = context[i].getContext('2d');
            
            /*如果未投過票，圓餅圖要呈現灰色
            if(ctx.style.opacity == 0){
                ctx.style.backgroundImage = "";
            }else{
                ctx.style.backgroundImage = "";
            }*/
            
            //要放入new Chart中data的值
            // var x= 0 + Math.floor(Math.random() *100);
            // var y= 0 + Math.floor(Math.random() *100);
            // var x=2;
            // var y=2;

            //把pieChart丟進for迴圈裡，並在context後面加上[i]即可
            pieChart[i] = new Chart(ctx[i], {
                type: 'pie',
                data : {
                    labels: labels,
                    datasets: [{
                        //預設資料
                        data: [5,5],
                        borderColor: "transparent",
                        backgroundColor: [
                        //資料顏色
                            "#e24f90",
                            "#644498",
                        ],
                    }],
                },
            });
        };
        

    //變動數據
    function changeData(a,b){
        // 隨機資料
        for(var i=0;i<ctx.length;i++){
            // var randomNum=Math.floor(Math.random() *100) + 1;
            
        //將隨機資料載入至圖表中
        // pieChart[i].data.datasets[0].data=[randomNum,100-randomNum];
        pieChart[i].data.datasets[0].data=[prosNum,consNum];
        
        //更新
        pieChart[i].update();
        }
    }
    setInterval(changeData,500);

    //這個function中下列三行最重要
    // var randomNum=Math.floor(Math.random() *100) + 1;
    // pieChart.data.datasets[0].data=[randomNum,100-randomNum];
    // pieChart.update();
    
    // voteVotingSubmit[0].addEventListener('click',function(){
    //     prosNum++;
    // });
    // voteVotingSubmit[1].addEventListener('click',function(){
    //     consNum++;
    // });


/*__________ 跳窗提示 __________*/
    
    
    //######### 進行投票 #########//
    for(var i=0; i<voteNo.length; i++){
        //------[驗證] 是否為會員 ------//
    
        //------[驗證] 是否已投過票 ------//

        //------[顯示] 確認視窗跳出 ------//
        voteNo[i].onclick = function(){
            voteDoingNotice[i].innerHTML="確認後將無法更改，<br>您要選擇此投票項目嗎？";
            voteAddingSubmit.style.display="none";
            voteVotingYes[i].style.display="none";
            voteVotingNo[i].style.display="";
            voteReportSubmit.style.display="none";
            voteReportMessage.style.display="none";
            voteAlertGroup.style.display="block";
            voteAlertDoing[i].style.display="block";
        }

        voteYes[i].onclick = function(){
            voteDoingNotice[i].innerHTML="確認後將無法更改，<br>您要選擇此投票項目嗎？";
            voteAddingSubmit.style.display="none";
            voteVotingYes[i].style.display="";
            voteVotingNo[i].style.display="none";
            voteReportSubmit.style.display="none";
            voteReportMessage.style.display="none";
            voteAlertGroup.style.display="block";
            voteAlertDoing[i].style.display="block";
        }
    }

    //######### 進行檢舉 #########//
    for(var i=0; i<report.length; i++){
        //------[驗證] 是否為會員 ------//

        //------[驗證] 是否有選擇檢舉原因 ------//

        //------[顯示] 檢舉原因選擇視窗 ------//
        report[i].onclick = function(){
            voteDoingNotice[i].innerText="檢舉原因：";
            voteAddingSubmit.style.display="none";
            voteVotingSubmit[0].style.display="none";
            voteReportSubmit.style.display="inline-block";
            voteReportMessage.style.display="block";
            voteAlertGroup.style.display="block";
            voteAlertDoing.style.display="block";
        }
    }

    //------[隱藏] 發起投票確認視窗-確認-(next:通知已新增投票) ------//
    voteAddingSubmit.onclick = function(){
        voteDidNotice.innerText="已新增投票議題";
        voteAlertDoing[i].style.display="none";
        voteAlertDid.style.display="block";
    }

    //------[隱藏] 進行投票確認視窗-確認-(next:通知已完成投票) ------//
    var prosNum=0; //支持
    var consNum=0; //不支持

    for(var i=0;i<voteYes.length;i++){
        voteVotingYes[i].onclick = function(){
        prosNum++;
        voteDidNotice.innerText="已完成投票";
        voteAlertDoing[i].style.display="none";
        voteAlertDid.style.display="block";
        console.log("支持數:",prosNum);
        return prosNum[i];
    }  

    voteVotingNo[i].onclick = function(){
        voteDidNotice.innerText="已完成投票";
        voteAlertDoing[i].style.display="none";
        voteAlertDid.style.display="block";
        consNum++; 
        console.log("不支持數:",consNum);
        return consNum[i];
    }
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
            voteAlertDoing[i].style.display="none";
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