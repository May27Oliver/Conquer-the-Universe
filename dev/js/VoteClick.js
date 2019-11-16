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
    let voteAlertDoing = $class(".voteAlertDoing");
    let voteAlertDid = $class(".voteAlertDid");
    let voteAdd = $class(".voteAdd");
    let voteAdding = $class(".voteAdding");
    let voteTitle = $class(".voteTitle");
    let voteSelectorA = $id("voteSelectorA");
    let voteSelectorB = $id("voteSelectorB");
    let voteLaunchCancel = $class(".voteLaunchCancel");
    let voteWrapper= $classes(".voteWrapper");
    let voteLaunch = $class(".voteLaunch");
    let voteSelect = $classes(".voteSelect");
    let voteYes = $classes(".voteYes");
    let voteNo = $classes(".voteNo");
    let voteCancel = $classes(".voteCancel");
    let voteOkay = $class(".voteOkay");
    let report = $classes(".report");
    let voteDoingNotice = $class(".voteDoingNotice");
    let voteDidNotice = $class(".voteDidNotice");
    let voteReportMessage = $class(".voteReportMessage");
    let voteAddingSubmit = $class(".voteAddingSubmit");
    // let voteVotingSubmit = $class(".voteVotingSubmit");
    let voteReportSubmit = $class(".voteReportSubmit");
    let voteVotingYes = $class(".voteVotingYes");
    let voteVotingNo = $class(".voteVotingNo");
    let voteCard = $classes(".voteCard");
    let voter = $class(".voter");
    let countDown= $classes(".deadline");


    /*__________ 圓餅圖製作 __________*/
    var labels = ['贊同','不贊同'];
    var context;
    var ctx=[];
    var pieChart=[];
    function pieProduce(){
        context = $classes('.votePie');
        for(var i=0; i<context.length; i++){
            ctx[i] = context[i].getContext('2d');
            
            /*如果未投過票，圓餅圖要呈現灰色
            if(ctx.style.opacity == 0){
                ctx.style.backgroundImage = "";
            }else{
                ctx.style.backgroundImage = "";
            }*/

            //把pieChart丟進for迴圈裡，並在context後面加上[i]即可
            pieChart[i] = new Chart(ctx[i], {
                type: 'pie',
                data : {
                    labels: labels,
                    datasets: [{
                        //預設資料
                        data: [0,0],
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
        return ctx,context;
    }
   
    pieProduce();  

    //變動數據
    function changeData(){
        for(var i=0;i<voteArr.length;i++){
            var prosNum=voteArr[i].prosNum;
            var consNum=voteArr[i].consNum;
            pieChart[i].data.datasets[0].data=[prosNum,consNum];
        //更新
        pieChart[i].update();
        }
    }
    setInterval(changeData,1000);//

    function insertAfter(newEl, targetEl){//將element元素插到node後面
      var parentEl = targetEl.parentNode;
      if(parentEl.lastChild == targetEl)
      {
           parentEl.appendChild(newEl);
      }else{
           parentEl.insertBefore(newEl,targetEl.nextSibling);
      }           
    }

    //設立一個物件把一格投票欄的贊成票與反對票統統包起來。
    function voteObj(name,title,deadline,prosNum,consNum){//
        this.name =voter.value;
        this.title =voteTitle.value;
        this.deadline =deadline;
        this.prosTitle=voteSelectorA.value;
        this.consTitle=voteSelectorB.value;
        this.prosNum=0;
        this.consNum=0;
    }
    var voteArr=[];
    
    voteArr=[{prosNum:5,consNum:8},{prosNum:2,consNum:1},{prosNum:1,consNum:2},{prosNum:3,consNum:2},{prosNum:2,consNum:3}];
    
    function getIndex(child){//取button的index值
        var parent = child.parentNode.parentNode.parentNode.parentNode.parentNode;
        var child = child.parentNode.parentNode.parentNode.parentNode;
        var children = parent.children;
        var i = children.length- 1;
        for (; i >= 0; i--){
            if (child == children[i]){
                break;
            }
        }
        return i;
    }; 

    // 倒數計時截止生產器
    var countDownDate = new Date().getTime()+ 86400000;//改成24hour
    var rightnow = new Date().getTime();
    console.log(countDownDate);
    console.log(rightnow);
    console.log(countDownDate-rightnow);

    // Update the count down every 1 second
    var x = setInterval(function() { 
        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        for(var i=0;i<countDown.length;i++){    
        // Display the result in the element with id="demo"
            countDown[i].innerHTML = "投票時間剩："+hours + "時"
            + minutes + "分 " + seconds + "秒";

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                countDown[i].innerHTML = "EXPIRED";
            }
        }
    }, 1000);



    // 新增公民投票議題出現，事件聆聽功能
    voteAddingSubmit.addEventListener('click',function(){
        var name=voter.value;//這邊要記錄發起人的會員Id
        var title=voteTitle.value;
        var deadline=x;
        var prosNum=0;
        var consNum=0;
        voteArr.unshift(new voteObj(name,title,deadline,prosNum,consNum));
        //把新的物件放進陣列裡
        for(var i=0;i<voteArr.length;i++){
            console.log("prosNum:",voteArr[i]);
        }
        voting();
        var wrapeDiv1 = document.createElement('div');
        var wrapeDiv2 = document.createElement('div');
        var wrapeDiv3 = document.createElement('div');
        var wrapeDiv4 = document.createElement('div');
        var wrapeDiv5 = document.createElement('div');
        var pieCanvas = document.createElement('canvas');
        var reportBtn = document.createElement('button');
        var voteIssue = document.createElement('h3');
        var deadline = document.createElement('p');
        var yesBtn = document.createElement('button');
        var noBtn = document.createElement('button');
        var issuePerson = document.createElement('small');
        var issuePersonName = document.createElement('span');

        wrapeDiv1.className = "voteCard col-6 col-md-4 col-lg-3";
        wrapeDiv2.className = "voteWrapper";
        wrapeDiv3.className = "voteChart";
        wrapeDiv4.className = "voteText";
        wrapeDiv5.className = "voteSelectGroup";
        pieCanvas.className = "votePie";
        deadline.className="deadline";
        reportBtn.className = "report";
        yesBtn.className = "voteYes";
        noBtn.className = "voteNo";
    
        insertAfter(wrapeDiv1,voteCard[0]);
        wrapeDiv1.appendChild(wrapeDiv2);
        wrapeDiv2.appendChild(wrapeDiv3);
        wrapeDiv3.appendChild(pieCanvas);
        insertAfter(wrapeDiv4,wrapeDiv3);
        wrapeDiv4.appendChild(reportBtn);
        reportBtn.innerText="檢舉";
        insertAfter(issuePerson,reportBtn);
        issuePerson.innerText="發起人：";
        issuePerson.appendChild(issuePersonName);
        issuePersonName.innerText=voter.value;
        insertAfter(voteIssue,issuePerson);
        voteIssue.innerText=voteTitle.value;
        insertAfter(deadline,voteIssue);
        // deadline.innerText="2019/11/05號截止";
        insertAfter(wrapeDiv5,deadline);
        wrapeDiv5.appendChild(yesBtn);
        yesBtn.innerText=voteSelectorA.value;
        insertAfter(noBtn,yesBtn);
        noBtn.innerText=voteSelectorB.value;
        
        deadline.onload=setInterval(function() { 
            // Get today's date and time
            var now = new Date().getTime();
            // Find the distance between now and the count down date
            var distance = countDownDate - now;
    
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000); 
            // Display the result in the element with id="demo"
                deadline.innerHTML = "投票時間剩："+hours + "時"
                + minutes + "分" + seconds + "秒";
                // If the count down is finished, write some text
                if (distance < 0) {
                    clearInterval(x);
                    deadline.innerHTML = "EXPIRED";
                }
        }, 1000);//新增的投票倒數器

        yesBtn.onclick=function(){
            var yesIndex=getIndex(this)-1;
            voteDoingNotice.innerHTML="確認後將無法更改，<br>您要選擇此投票項目嗎？";
            voteAlertGroup.style.display="block";
            voteAlertDoing.style.display="block";
            voteReportSubmit.style.display="none";
            voteReportMessage.style.display="none";
            voteAddingSubmit.style.display="none";
            voteVotingYes.style.display="inline-block";
            voteVotingNo.style.display="none";
            voteVotingYes.onclick=function(){
                voteDidNotice.innerText="已完成投票";
                voteAlertDoing.style.display="none";
                voteAlertDid.style.display="block";
                voteArr[yesIndex].prosNum++;
                console.log(voteArr[yesIndex].prosNum);
            };
        }
        
        noBtn.onclick=function(){
            var noIndex=getIndex(this)-1;
            voteAlertGroup.style.display="block";
            voteAlertDoing.style.display="block";
            voteReportSubmit.style.display="none";
            voteReportMessage.style.display="none";
            voteDoingNotice.innerHTML="確認後將無法更改，<br>您要選擇此投票項目嗎？";
            voteAddingSubmit.style.display="none";
            voteVotingYes.style.display="none";
            voteVotingNo.style.display="inline-block";
            voteVotingNo.onclick=function(){
                voteArr[noIndex].consNum++;
                voteDidNotice.innerText="已完成投票";
                voteAlertDoing.style.display="none";
                voteAlertDid.style.display="block";
                console.log(voteArr[noIndex].consNum);
            };
        }//增加yesBtn function和noBtn function

        reportBtn.onclick = function(){
            voteDoingNotice.innerText="檢舉原因：";
            voteAddingSubmit.style.display="none";
            // voteVotingSubmit.style.display="none";
            voteReportSubmit.style.display="inline-block";
            voteReportMessage.style.display="block";
            voteVotingYes.style.display="none";
            voteVotingNo.style.display="none";
            voteAlertGroup.style.display="block";
            voteAlertDoing.style.display="block";
        }

        pieProduce();
        // voting();        
        voteYes = $classes(".voteYes");
        voteNo = $classes(".voteNo");
        return voteYes,voteNo,voteArr;
    });
    
    // 宣告一個陣列，把一個投票欄位會用到的所有方法屬性都包裝成物件丟進陣列裡
    
    /*__________ 跳窗提示 __________*/
    
    //######### 進行投票 #########//

    function voting(){//給demo的那幾個投票項目建立事件聆聽功能
        for(var i=0; i<voteNo.length; i++){  
            voteNo[i].onclick = function(){
                var noIndex=getIndex(this)-1;
                voteDoingNotice.innerHTML="確認後將無法更改，<br>您要選擇此投票項目嗎？";
                voteAddingSubmit.style.display="none";
                voteVotingYes.style.display="none";
                voteVotingNo.style.display="";
                voteVotingNo.onclick=function(){
                    voteArr[noIndex].consNum++;
                    voteDidNotice.innerText="已完成投票";
                    voteAlertDoing.style.display="none";
                    voteAlertDid.style.display="block";
                    console.log(voteArr[noIndex].consNum);
                };
                voteReportSubmit.style.display="none";
                voteReportMessage.style.display="none";
                voteAlertGroup.style.display="block";
                voteAlertDoing.style.display="block";
            }

            voteYes[i].onclick = function(){
                var yesIndex=getIndex(this)-1;
                voteDoingNotice.innerHTML="確認後將無法更改，<br>您要選擇此投票項目嗎？";
                voteAddingSubmit.style.display="none";
                voteVotingYes.style.display="";
                voteVotingNo.style.display="none";
                voteReportSubmit.style.display="none";
                voteReportMessage.style.display="none";
                voteAlertGroup.style.display="block";
                voteAlertDoing.style.display="block";
                voteVotingYes.onclick=function(){
                    voteDidNotice.innerText="已完成投票";
                    voteAlertDoing.style.display="none";
                    voteAlertDid.style.display="block";
                    voteArr[yesIndex].prosNum++;
                    console.log(voteArr[yesIndex].prosNum);
                };
            }
        }
    }

    voting();

    //######### 進行檢舉 #########//
    for(var i=0; i<report.length; i++){
        //------[驗證] 是否為會員 ------//

        //------[驗證] 是否有選擇檢舉原因 ------//

        //------[顯示] 檢舉原因選擇視窗 ------//
        report[i].onclick = function(){
            voteDoingNotice.innerText="檢舉原因：";
            voteAddingSubmit.style.display="none";
            // voteVotingSubmit.style.display="none";
            voteReportSubmit.style.display="inline-block";
            voteReportMessage.style.display="block";
            voteVotingYes.style.display="none";
            voteVotingNo.style.display="none";
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
        voteOkay.onclick = function(){
            voteAlertGroup.style.display="none";
            voteAlertDid.style.display="none";
        }
});