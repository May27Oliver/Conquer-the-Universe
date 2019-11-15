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
    let voteVotingSubmit = $classes(".voteVotingSubmit");
    let voteReportSubmit = $class(".voteReportSubmit");
    let voteVotingYes = $class(".voteVotingYes");
    let voteVotingNo = $class(".voteVotingNo");
    let voteCard = $classes(".voteCard");
    let voter = $class(".voter");


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
        return ctx,context;
    }
   
    pieProduce();  

    //變動數據
    function changeData(a,b){
        // 隨機資料
        for(var i=0;i<ctx.length;i++){
            // var randomNum=Math.floor(Math.random() *100) + 1;
            
        //將隨機資料載入至圖表中
        // pieChart[i].data.datasets[0].data=[randomNum,100-randomNum];
        pieChart[i].data.datasets[0].data=[prosNum,consNum];
        //物件.prosNum  物件.consNum
        //更新
        pieChart[i].update();
        }
    }
    setInterval(changeData,500);

    
    // var voteObj={
    //     name:"",
    //     title:"",
    //     deadline:"",
    //     prosNum:0,
    //     consNum:0,
    // };
    function insertAfter(newEl, targetEl){//將element元素插到node後面
      var parentEl = targetEl.parentNode;
      if(parentEl.lastChild == targetEl)
      {
           parentEl.appendChild(newEl);
      }else{
           parentEl.insertBefore(newEl,targetEl.nextSibling);
      }           
    }

    //設立一個物件把一格投票所會用到的所有方法屬性都包裝起來
    function voteObj(name,title,deadline,prosNum,consNum){//
        this.name =name;
        this.title =voteTitle.value;
        this.deadline =deadline;
        this.prosTitle=voteSelectorA.value;
        this.consTitle=voteSelectorB.value;
        this.prosNum=0;
        this.consNum=0;
    }
    var voteArr=[];
    // for(var i=0;i<5;i++){
    // voteArr[i]=voteKey;
    // }
    console.log(voteArr);
    // 新增公民投票議題出現，事件聆聽功能
    voteAddingSubmit.addEventListener('click',function(){
        var name="You";//這邊要記錄發起人的會員Id
        var title=voteTitle.value;
        var deadline=2019-11-14;
        var prosNum=0;
        var consNum=0;
        voteArr.push(new voteObj(name,title,deadline,prosNum,consNum));
        //把新的物件放進陣列裡
        for(var i=0;i<voteArr.length;i++){
            console.log(voteArr[i]);
        }
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
        deadline.innerText="2019/11/05號截止";
        insertAfter(wrapeDiv5,deadline);
        wrapeDiv5.appendChild(yesBtn);
        yesBtn.innerText=voteSelectorA.value;
        insertAfter(noBtn,yesBtn);
        noBtn.innerText=voteSelectorB.value;
        
        yesBtn.onclick=function(){
            voteDoingNotice.innerHTML="確認後將無法更改，<br>您要選擇此投票項目嗎？";
            voteAlertGroup.style.display="block";
            voteAlertDoing.style.display="block";
            voteReportSubmit.style.display="none";
            voteReportMessage.style.display="none";
            voteAddingSubmit.style.display="none";
            voteVotingYes.style.display="inline-block";
            voteVotingNo.style.display="none";
        }
        
        noBtn.onclick=function(){
            voteAlertGroup.style.display="block";
            voteAlertDoing.style.display="block";
            voteReportSubmit.style.display="none";
            voteReportMessage.style.display="none";
            voteDoingNotice.innerHTML="確認後將無法更改，<br>您要選擇此投票項目嗎？";
            voteAddingSubmit.style.display="none";
            voteVotingYes.style.display="none";
            voteVotingNo.style.display="inline-block";
        }//增加yesBtn function和noBtn function

        pieProduce();
        // voting();        
        voteYes = $classes(".voteYes");
        voteNo = $classes(".voteNo");
        return voteYes,voteNo,voteArr;
    });
    
    // 宣告一個陣列，把一個投票欄位會用到的所有方法屬性都包裝成物件丟進陣列裡
    
    /*__________ 跳窗提示 __________*/
    
    //######### 進行投票 #########//
    function voting(){
        // voteYes = $classes(".voteYes");
        // voteNo = $classes(".voteNo");
        for(var i=0; i<voteNo.length; i++){
            //------[驗證] 是否為會員 ------//
        
            //------[驗證] 是否已投過票 ------//

            //------[顯示] 確認視窗跳出 ------//
            voteNo[i].onclick = function(){
                voteDoingNotice.innerHTML="確認後將無法更改，<br>您要選擇此投票項目嗎？";
                voteAddingSubmit.style.display="none";
                voteVotingYes.style.display="none";
                voteVotingNo.style.display="";
                voteReportSubmit.style.display="none";
                voteReportMessage.style.display="none";
                voteAlertGroup.style.display="block";
                voteAlertDoing.style.display="block";
            }

            voteYes[i].onclick = function(){
                voteDoingNotice.innerHTML="確認後將無法更改，<br>您要選擇此投票項目嗎？";
                voteAddingSubmit.style.display="none";
                voteVotingYes.style.display="";
                voteVotingNo.style.display="none";
                voteReportSubmit.style.display="none";
                voteReportMessage.style.display="none";
                voteAlertGroup.style.display="block";
                voteAlertDoing.style.display="block";
            }
        }
        console.log("不支持按鈕數",voteNo.length);
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
        voteAlertDoing.style.display="none";
        voteAlertDid.style.display="block";
    }

    //------[隱藏] 進行投票確認視窗-確認-(next:通知已完成投票) ------//
    var prosNum=0; //支持
    var consNum=0; //不支持
    // console.log("物件裡的prosNum",voteArr[0].prosNum);

    for(var i=0;i<voteYes.length;i++){
        voteVotingYes.onclick = function(){
            prosNum++;
            voteDidNotice.innerText="已完成投票";
            voteAlertDoing.style.display="none";
            voteAlertDid.style.display="block";
            // console.log("支持數:",voteArr[i].prosNum);
            return prosNum;
        }  

        voteVotingNo.onclick = function(){
            voteDidNotice.innerText="已完成投票";
            voteAlertDoing.style.display="none";
            voteAlertDid.style.display="block";
            consNum++; 
            console.log("不支持數:",voteArr[i].consNum);
            return consNum;
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