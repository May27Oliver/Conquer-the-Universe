window.addEventListener('load',function(){
    function $id(id){
        return document.getElementById(id);
     }//簡寫getElementById()，記得要把id加上""
 
     function $class(classname){
         return document.getElementsByClassName(classname);
      }//簡寫getElementsByClassName，記得要把classname加上""
     
     function $query(cssname){
         return document.querySelector(cssname);
     }

     function $queryAll(cssname){
        return document.querySelectorAll(cssname);
    }
    //按鈕事件觸發後才引入各slider的影片畫面，增加網頁效能
     let fnVideoAddress=$queryAll(".fn-video iframe");
     var videoAddress=$queryAll(".fn-video span");
     for(var i=0;i<videoAddress.length;i++){
        fnVideoAddress[i].src=videoAddress[i].getAttribute("data-source");
    }//財經題
    
    let JtVideoAddress=$queryAll(".Jt-video iframe");
    let AsVideoAddress=$queryAll(".As-video iframe");

     let fnProblems1 = $class("fnVideo1-problem");//抓影片一題庫所有的題目
     let fnProblems2 = $class("fnVideo2-problem");//抓影片二題庫所有的題目
     let fnProblems3 = $class("fnVideo3-problem");//抓影片三題庫所有的題目
     let fnProblems4 = $class("fnVideo4-problem");//抓影片四題庫所有的題目
     let fnProblems5 = $class("fnVideo5-problem");//抓影片五題庫所有的題目    
 
     let JtProblems1 = $class("JtVideo1-problem");//抓影片一題庫所有的題目
     let JtProblems2 = $class("JtVideo2-problem");//抓影片二題庫所有的題目
     let JtProblems3 = $class("JtVideo3-problem");//抓影片三題庫所有的題目
     let JtProblems4 = $class("JtVideo4-problem");//抓影片四題庫所有的題目
     let JtProblems5 = $class("JtVideo5-problem");//抓影片五題庫所有的題目 
 
     let AsProblems1 = $class("AsVideo1-problem");//抓影片一題庫所有的題目
     let AsProblems2 = $class("AsVideo2-problem");//抓影片二題庫所有的題目
     let AsProblems3 = $class("AsVideo3-problem");//抓影片三題庫所有的題目
     let AsProblems4 = $class("AsVideo4-problem");//抓影片四題庫所有的題目
     let AsProblems5 = $class("AsVideo5-problem");//抓影片五題庫所有的題目 
    
     // 影片
     var fnVideo1=$id("fnVideo1");
     var fnVideo2=$id("fnVideo2");
     var fnVideo3=$id("fnVideo3");
     var fnVideo4=$id("fnVideo4");
     var fnVideo5=$id("fnVideo5");

     var JtVideo1=$id("JtVideo1");
     var JtVideo2=$id("JtVideo2");
     var JtVideo3=$id("JtVideo3");
     var JtVideo4=$id("JtVideo4");
     var JtVideo5=$id("JtVideo5");

     var AsVideo1=$id("AsVideo1");
     var AsVideo2=$id("AsVideo2");
     var AsVideo3=$id("AsVideo3");
     var AsVideo4=$id("AsVideo4");
     var AsVideo5=$id("AsVideo5");

    //類型影片
    let fnVideos=document.querySelectorAll(".fn-video");
    let JtVideos=document.querySelectorAll(".Jt-video");
    let AsVideos=document.querySelectorAll(".As-video");
    
    //題型
    let justiceProblem=$id("justiceProblem");
    let financeProblem=$id("financeProblem");
    let aestheticeProblem=$id("aestheticeProblem");
    
    // 轉換影片類型按鈕
    if($id("fn-video-button")){//加一個判斷式適應首頁畫面
        let fnButton = $id("fn-video-button");
        let JtButton = $id("Jt-video-button");
        let AsButton = $id("As-video-button");
        let fn=$id("fn");
        let Jt=$id("Jt");
        let As=$id("As");
        let bigVideo=$id("big-video");
        console.log(financeProblem.style.display);
        fnButton.addEventListener('click',function(){
            bigVideo.src="https://www.youtube.com/embed/JelWsim7MjU";
            fn.style.display="";
            Jt.style.display="none";
            As.style.display="none";
            financeProblem.style.display="";
            justiceProblem.style.display="none";
            aestheticeProblem.style.display="none";
            fnProblems1[0].style.display="block";
            fnProblems1[1].style.display="none";
            award.style.display="none";
            wrongAns.style.display="none";
            var videoAddress=$queryAll(".fn-video span");
            for(var i=0;i<videoAddress.length;i++){
                fnVideoAddress[i].src=videoAddress[i].getAttribute("data-source");
            }//財經題
            var wrap=document.querySelectorAll(".video-slider ul");
            var turnLeft=document.querySelector(".slider-forward");
            var turnRight=document.querySelector(".slider-back");
            turnRight.disabled=true; //一開始右鍵不能按
            turnRight.style.opacity=0;
            turnLeft.disabled=false;
            turnLeft.style.opacity=1;
            oneVideo=0;
            for(var i=0;i<3;i++){
            wrap[i].style.left= 25*oneVideo+"%";
            }
            if( oneVideo == 0){
                turnRight.disabled = true;
                turnRight.style.opacity=0;
            } 
        });
        JtButton.addEventListener('click',function(){
            bigVideo.src="https://www.youtube.com/embed/sHHa4ETr2jE";
            fn.style.display="none";
            Jt.style.display="";
            As.style.display="none";
            financeProblem.style.display="none";
            justiceProblem.style.display="";
            aestheticeProblem.style.display="none";
            JtProblems1[0].style.display="block";
            JtProblems1[1].style.display="none";
            award.style.display="none";
            wrongAns.style.display="none";
            var videoAddress=$queryAll(".Jt-video span");
            for(var i=0;i<videoAddress.length;i++){
            JtVideoAddress[i].src=videoAddress[i].getAttribute("data-source");
            }//思辨題
            var wrap=document.querySelectorAll(".video-slider ul");
            var turnLeft=document.querySelector(".slider-forward");
            var turnRight=document.querySelector(".slider-back");
            turnRight.disabled=true; //一開始右鍵不能按
            turnRight.style.opacity=0;
            turnLeft.disabled=false;
            turnLeft.style.opacity=1;
            oneVideo=0;
            for(var i=0;i<3;i++){
            wrap[i].style.left= 25*oneVideo+"%";
            }
            if( oneVideo == 0){
                turnRight.disabled = true;
                turnRight.style.opacity=0;
            } 
        });
        AsButton.addEventListener('click',function(){
            bigVideo.src="https://www.youtube.com/embed/-Kg1FNo11r0";
            fn.style.display="none";
            Jt.style.display="none";
            As.style.display="";
            financeProblem.style.display="none";
            justiceProblem.style.display="none";
            aestheticeProblem.style.display="";
            AsProblems1[0].style.display="block";
            AsProblems1[1].style.display="none";
            award.style.display="none";
            wrongAns.style.display="none";
            var videoAddress=$queryAll(".As-video span");
            for(var i=0;i<videoAddress.length;i++){
            AsVideoAddress[i].src=videoAddress[i].getAttribute("data-source");
            }//美學題
            var wrap=document.querySelectorAll(".video-slider ul");
            var turnLeft=document.querySelector(".slider-forward");
            var turnRight=document.querySelector(".slider-back");
            turnRight.disabled=true; //一開始右鍵不能按
            turnRight.style.opacity=0;
            turnLeft.disabled=false;
            turnLeft.style.opacity=1;
            oneVideo=0;
            for(var i=0;i<3;i++){
            wrap[i].style.left= 25*oneVideo+"%";
            }
            if( oneVideo == 0){
                turnRight.disabled = true;
                turnRight.style.opacity=0;
            } 
        });

        // video slider功能，點下去出現大video
        for(var i=0;i<fnVideos.length;i++){
            fnVideos[i].addEventListener('click',function(e){
                var source = e.target.getAttribute("data-source");// 回傳 "src"
                var videoNum=parseInt(e.target.getAttribute("data-num"));
                console.log(videoNum);
                document.getElementById("big-video").src=source;
                // 底下題目跟著換
                // 先回第一題
            award.style.display="none";
            wrongAns.style.display="none";
            fnProblems1[0].style.display="block";
            fnProblems1[1].style.display="none";
            fnProblems2[0].style.display="block";
            fnProblems2[1].style.display="none";
            fnProblems3[0].style.display="block";
            fnProblems3[1].style.display="none";
            fnProblems4[0].style.display="block";
            fnProblems4[1].style.display="none";
            fnProblems5[0].style.display="block";
            fnProblems5[1].style.display="none";

                switch(videoNum){
                    case 1:
                        fnVideo1.style.display="";
                        fnVideo2.style.display="none";
                        fnVideo3.style.display="none";
                        fnVideo4.style.display="none";
                        fnVideo5.style.display="none";
                        console.log(fnVideo1.style.display);
                        break;
                    case 2:
                        fnVideo1.style.display="none";
                        fnVideo2.style.display="";
                        fnVideo3.style.display="none";
                        fnVideo4.style.display="none";
                        fnVideo5.style.display="none";
                        console.log(fnVideo2.style.display);
                        break;
                    case 3:
                        fnVideo1.style.display="none";
                        fnVideo2.style.display="none";
                        fnVideo3.style.display="";
                        fnVideo4.style.display="none";
                        fnVideo5.style.display="none";
                        console.log(fnVideo3.style.display);
                        break;
                    case 4:
                        fnVideo1.style.display="none";
                        fnVideo2.style.display="none";
                        fnVideo3.style.display="none";
                        fnVideo4.style.display="";
                        fnVideo5.style.display="none";
                        console.log(fnVideo4.style.display);
                        break;
                    case 5:
                        fnVideo1.style.display="none";
                        fnVideo2.style.display="none";
                        fnVideo3.style.display="none";
                        fnVideo4.style.display="none";
                        fnVideo5.style.display="";
                        console.log(fnVideo5.style.display);
                        break;
                }
            });

            JtVideos[i].addEventListener('click',function(e){
                award.style.display="none";
                wrongAns.style.display="none";
                JtProblems1[0].style.display="block";
                JtProblems1[1].style.display="none";
                JtProblems2[0].style.display="block";
                JtProblems2[1].style.display="none";
                JtProblems3[0].style.display="block";
                JtProblems3[1].style.display="none";
                JtProblems4[0].style.display="block";
                JtProblems4[1].style.display="none";
                JtProblems5[0].style.display="block";
                JtProblems5[1].style.display="none";
                
                var source = e.target.getAttribute("data-source");// 回傳 "src"
                var videoNum=parseInt(e.target.getAttribute("data-num"));
                console.log(videoNum);
                document.getElementById("big-video").src=source;
                switch(videoNum){
                    case 1:
                        JtVideo1.style.display="";
                        JtVideo2.style.display="none";
                        JtVideo3.style.display="none";
                        JtVideo4.style.display="none";
                        JtVideo5.style.display="none";
                        console.log(JtVideo1.style.display);
                        break;
                    case 2:
                        JtVideo1.style.display="none";
                        JtVideo2.style.display="";
                        JtVideo3.style.display="none";
                        JtVideo4.style.display="none";
                        JtVideo5.style.display="none";
                        console.log(JtVideo2.style.display);
                        break;
                    case 3:
                        JtVideo1.style.display="none";
                        JtVideo2.style.display="none";
                        JtVideo3.style.display="";
                        JtVideo4.style.display="none";
                        JtVideo5.style.display="none";
                        console.log(JtVideo3.style.display);
                        break;
                    case 4:
                        JtVideo1.style.display="none";
                        JtVideo2.style.display="none";
                        JtVideo3.style.display="none";
                        JtVideo4.style.display="";
                        JtVideo5.style.display="none";
                        console.log(JtVideo4.style.display);
                        break;
                    case 5:
                        JtVideo1.style.display="none";
                        JtVideo2.style.display="none";
                        JtVideo3.style.display="none";
                        JtVideo4.style.display="none";
                        JtVideo5.style.display="";
                        console.log(JtVideo5.style.display);
                        break;
                }
            });

            AsVideos[i].addEventListener('click',function(e){
                award.style.display="none";
                wrongAns.style.display="none";
                AsProblems1[0].style.display="block";
                AsProblems1[1].style.display="none";
                AsProblems2[0].style.display="block";
                AsProblems2[1].style.display="none";
                AsProblems3[0].style.display="block";
                AsProblems3[1].style.display="none";
                AsProblems4[0].style.display="block";
                AsProblems4[1].style.display="none";
                AsProblems5[0].style.display="block";
                AsProblems5[1].style.display="none";

                var source = e.target.getAttribute("data-source");// 回傳 "src"
                var videoNum=parseInt(e.target.getAttribute("data-num"));
                console.log(videoNum);
                document.getElementById("big-video").src=source;
                switch(videoNum){
                    case 1:
                        AsVideo1.style.display="";
                        AsVideo2.style.display="none";
                        AsVideo3.style.display="none";
                        AsVideo4.style.display="none";
                        AsVideo5.style.display="none";
                        console.log(AsVideo1.style.display);
                        break;
                    case 2:
                        AsVideo1.style.display="none";
                        AsVideo2.style.display="";
                        AsVideo3.style.display="none";
                        AsVideo4.style.display="none";
                        AsVideo5.style.display="none";
                        console.log(AsVideo2.style.display);
                        break;
                    case 3:
                        AsVideo1.style.display="none";
                        AsVideo2.style.display="none";
                        AsVideo3.style.display="";
                        AsVideo4.style.display="none";
                        AsVideo5.style.display="none";
                        console.log(AsVideo3.style.display);
                        break;
                    case 4:
                        AsVideo1.style.display="none";
                        AsVideo2.style.display="none";
                        AsVideo3.style.display="none";
                        AsVideo4.style.display="";
                        AsVideo5.style.display="none";
                        console.log(AsVideo4.style.display);
                        break;
                    case 5:
                        AsVideo1.style.display="none";
                        AsVideo2.style.display="none";
                        AsVideo3.style.display="none";
                        AsVideo4.style.display="none";
                        AsVideo5.style.display="";
                        console.log(AsVideo5.style.display);
                        break;
                }
            });

                /*slider左右移動影片*/ 
            let oneVideo=0;
            var wrap=document.querySelectorAll(".video-slider ul");
            var turnLeft=document.querySelector(".slider-forward");
            var turnRight=document.querySelector(".slider-back");
            turnRight.disabled=true; //一開始右鍵不能按
            turnRight.style.opacity=0;

            // video slider左邊按鈕按下去功能
            document.querySelector(".slider-forward").addEventListener('click',function(e){
                oneVideo--;
                for(var i=0;i<3;i++){
                wrap[i].style.left= 25*oneVideo+"%";
                }
                // console.log(oneVideo);
                turnRight.disabled=false;
                turnRight.style.opacity=1;
                if( oneVideo == -1){
                    turnLeft.disabled = true;
                    turnLeft.style.opacity=0;
                }
            });
            // video slider右邊按鈕按下去功能
            document.querySelector(".slider-back").addEventListener('click',function(e){
                oneVideo++;
                for(var i=0;i<3;i++){
                wrap[i].style.left= 25*oneVideo+"%";
                }
                // console.log(oneVideo);
                turnLeft.disabled = false;
                turnLeft.style.opacity=1;
                if( oneVideo == 0){
                    turnRight.disabled = true;
                    turnRight.style.opacity=0;
                } 
            });
            // 問答題點下去出現答案
            
        }

        

        let lastOne=$id("lastProblem");//抓上一題的button
        let nextOne=$id("nextProblem");//抓下一提的button
        //上一題下一題button點按出現
        lastOne.addEventListener('click',function(){
            award.style.display="none";
            wrongAns.style.display="none";
            fnProblems1[0].style.display="block";
            fnProblems1[1].style.display="none";
            fnProblems2[0].style.display="block";
            fnProblems2[1].style.display="none";
            fnProblems3[0].style.display="block";
            fnProblems3[1].style.display="none";
            fnProblems4[0].style.display="block";
            fnProblems4[1].style.display="none";
            fnProblems5[0].style.display="block";
            fnProblems5[1].style.display="none";
        
            JtProblems1[0].style.display="block";
            JtProblems1[1].style.display="none";
            JtProblems2[0].style.display="block";
            JtProblems2[1].style.display="none";
            JtProblems3[0].style.display="block";
            JtProblems3[1].style.display="none";
            JtProblems4[0].style.display="block";
            JtProblems4[1].style.display="none";
            JtProblems5[0].style.display="block";
            JtProblems5[1].style.display="none";

            AsProblems1[0].style.display="block";
            AsProblems1[1].style.display="none";
            AsProblems2[0].style.display="block";
            AsProblems2[1].style.display="none";
            AsProblems3[0].style.display="block";
            AsProblems3[1].style.display="none";
            AsProblems4[0].style.display="block";
            AsProblems4[1].style.display="none";
            AsProblems5[0].style.display="block";
            AsProblems5[1].style.display="none";
        });

        nextOne.addEventListener('click',function(){
            award.style.display="none";
            wrongAns.style.display="none";
            fnProblems1[0].style.display="none";
            fnProblems1[1].style.display="block";
            fnProblems2[0].style.display="none";
            fnProblems2[1].style.display="block";
            fnProblems3[0].style.display="none";
            fnProblems3[1].style.display="block";
            fnProblems4[0].style.display="none";
            fnProblems4[1].style.display="block";
            fnProblems5[0].style.display="none";
            fnProblems5[1].style.display="block";

            JtProblems1[0].style.display="none";
            JtProblems1[1].style.display="block";
            JtProblems2[0].style.display="none";
            JtProblems2[1].style.display="block";
            JtProblems3[0].style.display="none";
            JtProblems3[1].style.display="block";
            JtProblems4[0].style.display="none";
            JtProblems4[1].style.display="block";
            JtProblems5[0].style.display="none";
            JtProblems5[1].style.display="block";

            AsProblems1[0].style.display="none";
            AsProblems1[1].style.display="block";
            AsProblems2[0].style.display="none";
            AsProblems2[1].style.display="block";
            AsProblems3[0].style.display="none";
            AsProblems3[1].style.display="block";
            AsProblems4[0].style.display="none";
            AsProblems4[1].style.display="block";
            AsProblems5[0].style.display="none";
            AsProblems5[1].style.display="block";
        });
        

        let fnV1P1Ans1=$id("fnVideo1-problem1Ans1");
        let fnV1P1Ans2=$id("fnVideo1-problem1Ans2");
        let fnV1P1Ans3=$id("fnVideo1-problem1Ans3");
        let fnV1P1Ans4=$id("fnVideo1-problem1Ans4");

        let fnV1P2Ans1=$id("fnVideo1-problem2Ans1");
        let fnV1P2Ans2=$id("fnVideo1-problem2Ans2");
        let fnV1P2Ans3=$id("fnVideo1-problem2Ans3");
        let fnV1P2Ans4=$id("fnVideo1-problem2Ans4");

        let fnV2P1Ans1=$id("fnVideo2-problem1Ans1");
        let fnV2P1Ans2=$id("fnVideo2-problem1Ans2");
        let fnV2P1Ans3=$id("fnVideo2-problem1Ans3");
        let fnV2P1Ans4=$id("fnVideo2-problem1Ans4");

        let fnV2P2Ans1=$id("fnVideo2-problem2Ans1");
        let fnV2P2Ans2=$id("fnVideo2-problem2Ans2");
        let fnV2P2Ans3=$id("fnVideo2-problem2Ans3");
        let fnV2P2Ans4=$id("fnVideo2-problem2Ans4");

        let fnV3P1Ans1=$id("fnVideo3-problem1Ans1");
        let fnV3P1Ans2=$id("fnVideo3-problem1Ans2");
        let fnV3P1Ans3=$id("fnVideo3-problem1Ans3");
        let fnV3P1Ans4=$id("fnVideo3-problem1Ans4");

        let fnV3P2Ans1=$id("fnVideo3-problem2Ans1");
        let fnV3P2Ans2=$id("fnVideo3-problem2Ans2");
        let fnV3P2Ans3=$id("fnVideo3-problem2Ans3");
        let fnV3P2Ans4=$id("fnVideo3-problem2Ans4");

        let fnV4P1Ans1=$id("fnVideo4-problem1Ans1");
        let fnV4P1Ans2=$id("fnVideo4-problem1Ans2");
        let fnV4P1Ans3=$id("fnVideo4-problem1Ans3");
        let fnV4P1Ans4=$id("fnVideo4-problem1Ans4");

        let fnV4P2Ans1=$id("fnVideo4-problem2Ans1");
        let fnV4P2Ans2=$id("fnVideo4-problem2Ans2");
        let fnV4P2Ans3=$id("fnVideo4-problem2Ans3");
        let fnV4P2Ans4=$id("fnVideo4-problem2Ans4");

        let fnV5P1Ans1=$id("fnVideo5-problem1Ans1");
        let fnV5P1Ans2=$id("fnVideo5-problem1Ans2");
        let fnV5P1Ans3=$id("fnVideo5-problem1Ans3");
        let fnV5P1Ans4=$id("fnVideo5-problem1Ans4");

        let fnV5P2Ans1=$id("fnVideo5-problem2Ans1");
        let fnV5P2Ans2=$id("fnVideo5-problem2Ans2");
        let fnV5P2Ans3=$id("fnVideo5-problem2Ans3");
        let fnV5P2Ans4=$id("fnVideo5-problem2Ans4");

        let JtV1P1Ans1=$id("JtVideo1-problem1Ans1");
        let JtV1P1Ans2=$id("JtVideo1-problem1Ans2");
        let JtV1P1Ans3=$id("JtVideo1-problem1Ans3");
        let JtV1P1Ans4=$id("JtVideo1-problem1Ans4");

        let JtV1P2Ans1=$id("JtVideo1-problem2Ans1");
        let JtV1P2Ans2=$id("JtVideo1-problem2Ans2");
        let JtV1P2Ans3=$id("JtVideo1-problem2Ans3");
        let JtV1P2Ans4=$id("JtVideo1-problem2Ans4");

        let JtV2P1Ans1=$id("JtVideo2-problem1Ans1");
        let JtV2P1Ans2=$id("JtVideo2-problem1Ans2");
        let JtV2P1Ans3=$id("JtVideo2-problem1Ans3");
        let JtV2P1Ans4=$id("JtVideo2-problem1Ans4");

        let JtV2P2Ans1=$id("JtVideo2-problem2Ans1");
        let JtV2P2Ans2=$id("JtVideo2-problem2Ans2");
        let JtV2P2Ans3=$id("JtVideo2-problem2Ans3");
        let JtV2P2Ans4=$id("JtVideo2-problem2Ans4");

        let JtV3P1Ans1=$id("JtVideo3-problem1Ans1");
        let JtV3P1Ans2=$id("JtVideo3-problem1Ans2");
        let JtV3P1Ans3=$id("JtVideo3-problem1Ans3");
        let JtV3P1Ans4=$id("JtVideo3-problem1Ans4");

        let JtV3P2Ans1=$id("JtVideo3-problem2Ans1");
        let JtV3P2Ans2=$id("JtVideo3-problem2Ans2");
        let JtV3P2Ans3=$id("JtVideo3-problem2Ans3");
        let JtV3P2Ans4=$id("JtVideo3-problem2Ans4");

        let JtV4P1Ans1=$id("JtVideo4-problem1Ans1");
        let JtV4P1Ans2=$id("JtVideo4-problem1Ans2");
        let JtV4P1Ans3=$id("JtVideo4-problem1Ans3");
        let JtV4P1Ans4=$id("JtVideo4-problem1Ans4");

        let JtV4P2Ans1=$id("JtVideo4-problem2Ans1");
        let JtV4P2Ans2=$id("JtVideo4-problem2Ans2");
        let JtV4P2Ans3=$id("JtVideo4-problem2Ans3");
        let JtV4P2Ans4=$id("JtVideo4-problem2Ans4");

        let JtV5P1Ans1=$id("JtVideo5-problem1Ans1");
        let JtV5P1Ans2=$id("JtVideo5-problem1Ans2");
        let JtV5P1Ans3=$id("JtVideo5-problem1Ans3");
        let JtV5P1Ans4=$id("JtVideo5-problem1Ans4");

        let JtV5P2Ans1=$id("JtVideo5-problem2Ans1");
        let JtV5P2Ans2=$id("JtVideo5-problem2Ans2");
        let JtV5P2Ans3=$id("JtVideo5-problem2Ans3");
        let JtV5P2Ans4=$id("JtVideo5-problem2Ans4");

        let AsV1P1Ans1=$id("AsVideo1-problem1Ans1");
        let AsV1P1Ans2=$id("AsVideo1-problem1Ans2");
        let AsV1P1Ans3=$id("AsVideo1-problem1Ans3");
        let AsV1P1Ans4=$id("AsVideo1-problem1Ans4");

        let AsV1P2Ans1=$id("AsVideo1-problem2Ans1");
        let AsV1P2Ans2=$id("AsVideo1-problem2Ans2");
        let AsV1P2Ans3=$id("AsVideo1-problem2Ans3");
        let AsV1P2Ans4=$id("AsVideo1-problem2Ans4");

        let AsV2P1Ans1=$id("AsVideo2-problem1Ans1");
        let AsV2P1Ans2=$id("AsVideo2-problem1Ans2");
        let AsV2P1Ans3=$id("AsVideo2-problem1Ans3");
        let AsV2P1Ans4=$id("AsVideo2-problem1Ans4");

        let AsV2P2Ans1=$id("AsVideo2-problem2Ans1");
        let AsV2P2Ans2=$id("AsVideo2-problem2Ans2");
        let AsV2P2Ans3=$id("AsVideo2-problem2Ans3");
        let AsV2P2Ans4=$id("AsVideo2-problem2Ans4");

        let AsV3P1Ans1=$id("AsVideo3-problem1Ans1");
        let AsV3P1Ans2=$id("AsVideo3-problem1Ans2");
        let AsV3P1Ans3=$id("AsVideo3-problem1Ans3");
        let AsV3P1Ans4=$id("AsVideo3-problem1Ans4");
        
        let AsV3P2Ans1=$id("AsVideo3-problem2Ans1");
        let AsV3P2Ans2=$id("AsVideo3-problem2Ans2");
        let AsV3P2Ans3=$id("AsVideo3-problem2Ans3");
        let AsV3P2Ans4=$id("AsVideo3-problem2Ans4");

        let AsV4P1Ans1=$id("AsVideo4-problem1Ans1");
        let AsV4P1Ans2=$id("AsVideo4-problem1Ans2");
        let AsV4P1Ans3=$id("AsVideo4-problem1Ans3");
        let AsV4P1Ans4=$id("AsVideo4-problem1Ans4");

        let AsV4P2Ans1=$id("AsVideo4-problem2Ans1");
        let AsV4P2Ans2=$id("AsVideo4-problem2Ans2");
        let AsV4P2Ans3=$id("AsVideo4-problem2Ans3");
        let AsV4P2Ans4=$id("AsVideo4-problem2Ans4");

        let AsV5P1Ans1=$id("AsVideo5-problem1Ans1");
        let AsV5P1Ans2=$id("AsVideo5-problem1Ans2");
        let AsV5P1Ans3=$id("AsVideo5-problem1Ans3");
        let AsV5P1Ans4=$id("AsVideo5-problem1Ans4");

        let AsV5P2Ans1=$id("AsVideo5-problem2Ans1");
        let AsV5P2Ans2=$id("AsVideo5-problem2Ans2");
        let AsV5P2Ans3=$id("AsVideo5-problem2Ans3");
        let AsV5P2Ans4=$id("AsVideo5-problem2Ans4");

        let award=$id("award");
        let wrongAns=$id("wrongAns");
        let fnV1P1A = $class("fnV1P1A");//抓每個題目的四個選項
        let fnV1P2A = $class("fnV1P2A");//抓每個題目的四個選項
        let fnV2P1A = $class("fnV2P1A");//抓每個題目的四個選項
        let fnV2P2A = $class("fnV2P2A");//抓每個題目的四個選項
        let fnV3P1A = $class("fnV3P1A");//抓每個題目的四個選項
        let fnV3P2A = $class("fnV3P2A");//抓每個題目的四個選項
        let fnV4P1A = $class("fnV4P1A");//抓每個題目的四個選項
        let fnV4P2A = $class("fnV4P2A");//抓每個題目的四個選項
        let fnV5P1A = $class("fnV5P1A");//抓每個題目的四個選項
        let fnV5P2A = $class("fnV5P2A");//抓每個題目的四個選項
        
    // 財經影片一第一題解答
        fnV1P1Ans1.addEventListener('click',function(){
                var formData = $("input[name='fnV1P1']:checked").serialize();
                if(formData=="fnV1P1=1"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            
            for(var i=0;i<fnV1P1A.length;i++){
                fnV1P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            fnV1P1A[0].style.backgroundColor="#C4E1FF";
        },false);

        fnV1P1Ans2.addEventListener('click',function(){
                var formData = $("input[name='fnV1P1']:checked").serialize();
                if(formData=="fnV1P1=1"){
                    console.log('Posting the following: ', formData);
                    $.ajax({
                        url: 'php/video.php',
                        data: formData,
                        type: 'post',
                        success: function(response) {
                            $id('coin').innerText=response;
                        }
                    });
                }
            for(var i=0;i<fnV1P1A.length;i++){
                fnV1P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            fnV1P1A[1].style.backgroundColor="#C4E1FF";
        });

        fnV1P1Ans3.addEventListener('click',function(){
            var formData = $("input[name='fnV1P1']:checked").serialize();
            console.log(formData);
            if(formData=="fnV1P1=3"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<fnV1P1A.length;i++){
                fnV1P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="block";
            wrongAns.style.display="none";
            fnV1P1A[2].style.backgroundColor="#C4E1FF";
        });

        fnV1P1Ans4.addEventListener('click',function(){
            if($id("memberName").innerText!=""){
                var formData = $("input[name='fnV1P1']:checked").serialize();
                if(formData=="fnV1P1=1"){
                    console.log('Posting the following: ', formData);
                    $.ajax({
                        url: 'php/video.php',
                        data: formData,
                        type: 'post',
                        success: function(response) {
                            $id('coin').innerText=response;
                        }
                    });
                }
            }
            
            for(var i=0;i<fnV1P1A.length;i++){
                fnV1P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            fnV1P1A[3].style.backgroundColor="#C4E1FF";
        });

        // 財經影片一第二題解答
        fnV1P2Ans1.addEventListener('click',function(){
            var formData = $("input[name='fnV1P2']:checked").serialize();
            console.log(formData);
            if(formData=="fnV1P2=1"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<fnV1P2A.length;i++){
                fnV1P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            fnV1P2A[0].style.backgroundColor="#C4E1FF";
        });

        fnV1P2Ans2.addEventListener('click',function(){
            var formData = $("input[name='fnV1P2']:checked").serialize();
            if(formData=="fnV1P2=2"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<fnV1P2A.length;i++){
                fnV1P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            fnV1P2A[1].style.backgroundColor="#C4E1FF";
        });

        fnV1P2Ans3.addEventListener('click',function(){
            var formData = $("input[name='fnV1P2']:checked").serialize();
            if(formData=="fnV1P2=3"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<fnV1P2A.length;i++){
                fnV1P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            fnV1P2A[2].style.backgroundColor="#C4E1FF";
        });

        fnV1P2Ans4.addEventListener('click',function(){
            var formData = $("input[name='fnV1P2']:checked").serialize();
            if(formData=="fnV1P2=4"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<fnV1P2A.length;i++){
                fnV1P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="block";
            wrongAns.style.display="none";
            fnV1P2A[3].style.backgroundColor="#C4E1FF";
        });

        //財經影片二第一題解答
        fnV2P1Ans1.addEventListener('click',function(){
            var formData = $("input[name='fnV2P1']:checked").serialize();
            if(formData=="fnV2P1=1"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<fnV2P1A.length;i++){
                fnV2P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="block";
            wrongAns.style.display="none";
            fnV2P1A[0].style.backgroundColor="#C4E1FF";
        });

        fnV2P1Ans2.addEventListener('click',function(){
            var formData = $("input[name='fnV2P1']:checked").serialize();
            if(formData=="fnV2P1=2"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<fnV2P1A.length;i++){
                fnV2P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            fnV2P1A[1].style.backgroundColor="#C4E1FF";
        });

        fnV2P1Ans3.addEventListener('click',function(){
            var formData = $("input[name='fnV2P1']:checked").serialize();
            if(formData=="fnV2P1=3"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<fnV2P1A.length;i++){
                fnV2P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            fnV2P1A[2].style.backgroundColor="#C4E1FF";
        });

        fnV2P1Ans4.addEventListener('click',function(){
            var formData = $("input[name='fnV2P1']:checked").serialize();
            if(formData=="fnV2P1=4"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<fnV2P1A.length;i++){
                fnV2P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            fnV2P1A[3].style.backgroundColor="#C4E1FF";
        });

        //影片二第二題答案
        fnV2P2Ans1.addEventListener('click',function(){
            var formData = $("input[name='fnV2P2']:checked").serialize();
            if(formData=="fnV2P2=1"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<fnV2P2A.length;i++){
                fnV2P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="block";
            wrongAns.style.display="none";
            fnV2P2A[0].style.backgroundColor="#C4E1FF";
        });

        fnV2P2Ans2.addEventListener('click',function(){
            var formData = $("input[name='fnV2P2']:checked").serialize();
            if(formData=="fnV2P2=2"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<fnV2P2A.length;i++){
                fnV2P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            fnV2P2A[1].style.backgroundColor="#C4E1FF";
        });

        fnV2P2Ans3.addEventListener('click',function(){
            var formData = $("input[name='fnV2P2']:checked").serialize();
            if(formData=="fnV2P2=3"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<fnV2P2A.length;i++){
                fnV2P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            fnV2P2A[2].style.backgroundColor="#C4E1FF";
        });

        fnV2P2Ans4.addEventListener('click',function(){
            var formData = $("input[name='fnV2P2']:checked").serialize();
            if(formData=="fnV2P2=4"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<fnV2P2A.length;i++){
                fnV2P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            fnV2P2A[3].style.backgroundColor="#C4E1FF";
        });

        //影片三題目一答案
        fnV3P1Ans1.addEventListener('click',function(){
            var formData = $("input[name='fnV3P1']:checked").serialize();
            if(formData=="fnV3P1=1"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<fnV3P1A.length;i++){
                fnV3P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            fnV3P1A[0].style.backgroundColor="#C4E1FF";
        });

        fnV3P1Ans2.addEventListener('click',function(){
            var formData = $("input[name='fnV3P1']:checked").serialize();
            if(formData=="fnV3P1=2"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<fnV3P1A.length;i++){
                fnV3P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            fnV3P1A[1].style.backgroundColor="#C4E1FF";
        });

        fnV3P1Ans3.addEventListener('click',function(){
            var formData = $("input[name='fnV3P1']:checked").serialize();
            if(formData=="fnV3P1=3"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<fnV3P1A.length;i++){
                fnV3P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="block";
            wrongAns.style.display="none";
            fnV3P1A[2].style.backgroundColor="#C4E1FF";
        });

        fnV3P1Ans4.addEventListener('click',function(){
            var formData = $("input[name='fnV3P1']:checked").serialize();
            if(formData=="fnV3P1=4"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<fnV3P1A.length;i++){
                fnV3P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            fnV3P1A[3].style.backgroundColor="#C4E1FF";
        });

        //影片三題目二答案
        fnV3P2Ans1.addEventListener('click',function(){
            var formData = $("input[name='fnV3P2']:checked").serialize();
            if(formData=="fnV3P2=1"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<fnV3P2A.length;i++){
                fnV3P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            fnV3P2A[0].style.backgroundColor="#C4E1FF";
        });

        fnV3P2Ans2.addEventListener('click',function(){
            var formData = $("input[name='fnV3P2']:checked").serialize();
            if(formData=="fnV3P2=2"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<fnV3P2A.length;i++){
                fnV3P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="block";
            wrongAns.style.display="none";
            fnV3P2A[1].style.backgroundColor="#C4E1FF";
        });

        fnV3P2Ans3.addEventListener('click',function(){
            var formData = $("input[name='fnV3P2']:checked").serialize();
            if(formData=="fnV3P2=3"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<fnV3P2A.length;i++){
                fnV3P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            fnV3P2A[2].style.backgroundColor="#C4E1FF";
        });

        fnV3P2Ans4.addEventListener('click',function(){
            var formData = $("input[name='fnV3P2']:checked").serialize();
            if(formData=="fnV3P2=4"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<fnV3P2A.length;i++){
                fnV3P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            fnV3P2A[3].style.backgroundColor="#C4E1FF";
        });

        //影片四題目一答案
        fnV4P1Ans1.addEventListener('click',function(){
            var formData = $("input[name='fnV4P1']:checked").serialize();
            if(formData=="fnV4P1=1"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<fnV4P1A.length;i++){
                fnV4P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="block";
            wrongAns.style.display="none";
            fnV4P1A[0].style.backgroundColor="#C4E1FF";
        });

        fnV4P1Ans2.addEventListener('click',function(){
            var formData = $("input[name='fnV4P1']:checked").serialize();
            if(formData=="fnV4P1=2"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<fnV4P1A.length;i++){
                fnV4P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            fnV4P1A[1].style.backgroundColor="#C4E1FF";
        });

        fnV4P1Ans3.addEventListener('click',function(){
            var formData = $("input[name='fnV4P1']:checked").serialize();
            if(formData=="fnV4P1=3"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<fnV4P1A.length;i++){
                fnV4P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            fnV4P1A[2].style.backgroundColor="#C4E1FF";
        });

        fnV4P1Ans4.addEventListener('click',function(){
            var formData = $("input[name='fnV4P1']:checked").serialize();
            if(formData=="fnV4P1=4"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<fnV4P1A.length;i++){
                fnV4P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            fnV4P1A[3].style.backgroundColor="#C4E1FF";
        });

        //影片四第二題答案
        fnV4P2Ans1.addEventListener('click',function(){
            var formData = $("input[name='fnV4P2']:checked").serialize();
            if(formData=="fnV4P2=1"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<fnV4P2A.length;i++){
                fnV4P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            fnV4P2A[0].style.backgroundColor="#C4E1FF";
        });

        fnV4P2Ans2.addEventListener('click',function(){
            var formData = $("input[name='fnV4P2']:checked").serialize();
            if(formData=="fnV4P2=2"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<fnV4P2A.length;i++){
                fnV4P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            fnV4P2A[1].style.backgroundColor="#C4E1FF";
        });

        fnV4P2Ans3.addEventListener('click',function(){
            var formData = $("input[name='fnV4P2']:checked").serialize();
            if(formData=="fnV4P2=3"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<fnV4P2A.length;i++){
                fnV4P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            fnV4P2A[2].style.backgroundColor="#C4E1FF"; 
        });

        fnV4P2Ans4.addEventListener('click',function(){
            var formData = $("input[name='fnV4P2']:checked").serialize();
            if(formData=="fnV4P2=4"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<fnV4P2A.length;i++){
                fnV4P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="block";
            wrongAns.style.display="none";
            fnV4P2A[3].style.backgroundColor="#C4E1FF";
        });

        //影片五第一題答案
        fnV5P1Ans1.addEventListener('click',function(){
            var formData = $("input[name='fnV5P1']:checked").serialize();
            if(formData=="fnV5P1=1"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<fnV5P1A.length;i++){
                fnV5P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            fnV5P1A[0].style.backgroundColor="#C4E1FF";
        });

        fnV5P1Ans2.addEventListener('click',function(){
            var formData = $("input[name='fnV5P1']:checked").serialize();
            if(formData=="fnV5P1=2"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<fnV5P1A.length;i++){
                fnV5P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            fnV5P1A[1].style.backgroundColor="#C4E1FF";
        });

        fnV5P1Ans3.addEventListener('click',function(){
            var formData = $("input[name='fnV5P1']:checked").serialize();
            if(formData=="fnV5P1=3"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<fnV5P1A.length;i++){
                fnV5P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            fnV5P1A[2].style.backgroundColor="#C4E1FF";
        });

        fnV5P1Ans4.addEventListener('click',function(){
            var formData = $("input[name='fnV5P1']:checked").serialize();
            if(formData=="fnV5P1=4"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<fnV5P1A.length;i++){
                fnV5P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="block";
            wrongAns.style.display="none";
            fnV5P1A[3].style.backgroundColor="#C4E1FF";
        });

        //影片五第二題答案
        fnV5P2Ans1.addEventListener('click',function(){
            var formData = $("input[name='fnV5P2']:checked").serialize();
            if(formData=="fnV5P2=1"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<fnV5P2A.length;i++){
                fnV5P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="block";
            wrongAns.style.display="none";
            fnV5P2A[0].style.backgroundColor="#C4E1FF";
        });

        fnV5P2Ans2.addEventListener('click',function(){
            var formData = $("input[name='fnV5P2']:checked").serialize();
            if(formData=="fnV5P2=2"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });     
            }
            for(var i=0;i<fnV5P2A.length;i++){
                fnV5P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            fnV5P2A[1].style.backgroundColor="#C4E1FF";
        });

        fnV5P2Ans3.addEventListener('click',function(){
            var formData = $("input[name='fnV5P2']:checked").serialize();
            if(formData=="fnV5P2=3"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<fnV5P2A.length;i++){
                fnV5P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            fnV5P2A[2].style.backgroundColor="#C4E1FF";
        });

        fnV5P2Ans4.addEventListener('click',function(){
            var formData = $("input[name='fnV5P2']:checked").serialize();
            if(formData=="fnV5P2=4"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<fnV5P2A.length;i++){
                fnV5P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            fnV5P2A[3].style.backgroundColor="#C4E1FF";
        });

        let JtV1P1A=$class("JtV1P1A");
        let JtV1P2A=$class("JtV1P2A");
        let JtV2P1A=$class("JtV2P1A");
        let JtV2P2A=$class("JtV2P2A");
        let JtV3P1A=$class("JtV3P1A");
        let JtV3P2A=$class("JtV3P2A");
        let JtV4P1A=$class("JtV4P1A");
        let JtV4P2A=$class("JtV4P2A");
        let JtV5P1A=$class("JtV5P1A");
        let JtV5P2A=$class("JtV5P2A");

        //思辨區影片一問題一答案
        JtV1P1Ans1.addEventListener('click',function(){
            var formData = $("input[name='JtV1P1']:checked").serialize();
            if(formData=="JtV1P1=1"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<JtV1P1A.length;i++){
                JtV1P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.innerText="了解，您做出不簡單的決定，獲得宇宙幣100元"
            award.style.display="block";
            wrongAns.style.display="none";
            JtV1P1A[0].style.backgroundColor="#C4E1FF";
        });

        JtV1P1Ans2.addEventListener('click',function(){
            var formData = $("input[name='JtV1P1']:checked").serialize();
            if(formData=="JtV1P1=2"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<JtV1P1A.length;i++){
                JtV1P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.innerText="了解，您做出不簡單的決定，獲得宇宙幣100元"
            award.style.display="block";
            wrongAns.style.display="none";
            JtV1P1A[1].style.backgroundColor="#C4E1FF";
        });
        //問題二答案
        JtV1P2Ans1.addEventListener('click',function(){
            var formData = $("input[name='JtV1P1']:checked").serialize();
            if(formData=="JtV1P1=3"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<JtV1P2A.length;i++){
                JtV1P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.innerText="了解，您做出不簡單的決定，獲得宇宙幣100元";
            award.style.display="block";
            wrongAns.style.display="none";
            JtV1P2A[0].style.backgroundColor="#C4E1FF";
        });

        JtV1P2Ans2.addEventListener('click',function(){
            var formData = $("input[name='JtV1P1']:checked").serialize();
            if(formData=="JtV1P1=4"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<JtV1P2A.length;i++){
                JtV1P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.innerText="了解，您做出不簡單的決定，獲得宇宙幣100元";
            award.style.display="block";
            wrongAns.style.display="none";
            JtV1P2A[1].style.backgroundColor="#C4E1FF";
        });

        //思辨區影片二問題一答案
        JtV2P1Ans1.addEventListener('click',function(){
            var formData = $("input[name='JtV2P1']:checked").serialize();
            if(formData=="JtV2P1=1"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<JtV2P1A.length;i++){
                JtV2P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            JtV2P1A[0].style.backgroundColor="#C4E1FF";
        });

        JtV2P1Ans2.addEventListener('click',function(){
            var formData = $("input[name='JtV2P1']:checked").serialize();
            if(formData=="JtV2P1=2"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<JtV2P1A.length;i++){
                JtV2P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            JtV2P1A[1].style.backgroundColor="#C4E1FF";
        });

        JtV2P1Ans3.addEventListener('click',function(){
            var formData = $("input[name='JtV2P1']:checked").serialize();
            if(formData=="JtV2P1=3"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<JtV2P1A.length;i++){
                JtV2P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="block";
            wrongAns.style.display="none";
            JtV2P1A[2].style.backgroundColor="#C4E1FF";
        });

        JtV2P1Ans4.addEventListener('click',function(){
            var formData = $("input[name='JtV2P1']:checked").serialize();
            if(formData=="JtV2P1=4"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<JtV2P1A.length;i++){
                JtV2P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            JtV2P1A[3].style.backgroundColor="#C4E1FF";
        });

        //思辨區影片二問題二答案
        JtV2P2Ans1.addEventListener('click',function(){
            var formData = $("input[name='JtV2P2']:checked").serialize();
            if(formData=="JtV2P2=1"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<JtV2P2A.length;i++){
                JtV2P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="block";
            wrongAns.style.display="none";
            JtV2P2A[0].style.backgroundColor="#C4E1FF";
        });

        JtV2P2Ans2.addEventListener('click',function(){
            var formData = $("input[name='JtV2P2']:checked").serialize();
            if(formData=="JtV2P2=2"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<JtV2P2A.length;i++){
                JtV2P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            JtV2P2A[1].style.backgroundColor="#C4E1FF";
        });

        //思辨區影片三問題一答案
        JtV3P1Ans1.addEventListener('click',function(){
            var formData = $("input[name='JtV3P1']:checked").serialize();
            if(formData=="JtV3P1=1"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<JtV3P1A.length;i++){
                JtV3P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.innerText="感謝您的答覆，這也是個不容易的決定，恭喜您獲得宇宙幣100元";
            award.style.display="block";
            wrongAns.style.display="none";
            JtV3P1A[0].style.backgroundColor="#C4E1FF";
        });

        JtV3P1Ans2.addEventListener('click',function(){
            var formData = $("input[name='JtV3P1']:checked").serialize();
            if(formData=="JtV3P1=2"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<JtV3P1A.length;i++){
                JtV3P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.innerText="感謝您的答覆，這也是個不容易的決定，恭喜您獲得宇宙幣100元";
            award.style.display="block";
            wrongAns.style.display="none";
            JtV3P1A[1].style.backgroundColor="#C4E1FF";
        });

        //思辨區影片三問題二答案
        JtV3P2Ans1.addEventListener('click',function(){
            var formData = $("input[name='JtV3P2']:checked").serialize();
            if(formData=="JtV3P2=1"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<JtV3P2A.length;i++){
                JtV3P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            JtV3P2A[0].style.backgroundColor="#C4E1FF";
        });

        JtV3P2Ans2.addEventListener('click',function(){
            var formData = $("input[name='JtV3P2']:checked").serialize();
            if(formData=="JtV3P2=2"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<JtV3P2A.length;i++){
                JtV3P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="block";
            wrongAns.style.display="none";
            JtV3P2A[1].style.backgroundColor="#C4E1FF";
        });

        JtV3P2Ans3.addEventListener('click',function(){
            var formData = $("input[name='JtV3P2']:checked").serialize();
            if(formData=="JtV3P2=3"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<JtV3P2A.length;i++){
                JtV3P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            JtV3P2A[2].style.backgroundColor="#C4E1FF";
        });

        JtV3P2Ans4.addEventListener('click',function(){
            var formData = $("input[name='JtV3P2']:checked").serialize();
            if(formData=="JtV3P2=4"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<JtV3P2A.length;i++){
                JtV3P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            JtV3P2A[3].style.backgroundColor="#C4E1FF";
        });

        //思辨區影片四問題一答案
        JtV4P1Ans1.addEventListener('click',function(){
            var formData = $("input[name='JtV4P1']:checked").serialize();
            if(formData=="JtV4P1=1"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<JtV4P1A.length;i++){
                JtV4P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            JtV4P1A[0].style.backgroundColor="#C4E1FF";
        });

        JtV4P1Ans2.addEventListener('click',function(){
            var formData = $("input[name='JtV4P1']:checked").serialize();
            if(formData=="JtV4P1=2"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<JtV4P1A.length;i++){
                JtV4P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            JtV4P1A[1].style.backgroundColor="#C4E1FF";
        });

        JtV4P1Ans3.addEventListener('click',function(){
            var formData = $("input[name='JtV4P1']:checked").serialize();
            if(formData=="JtV4P1=3"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<JtV4P1A.length;i++){
                JtV4P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            JtV4P1A[2].style.backgroundColor="#C4E1FF";
        });

        JtV4P1Ans4.addEventListener('click',function(){
            var formData = $("input[name='JtV4P1']:checked").serialize();
            if(formData=="JtV4P1=4"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<JtV4P1A.length;i++){
                JtV4P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="block";
            wrongAns.style.display="none";
            JtV4P1A[3].style.backgroundColor="#C4E1FF";
        });

        //思辨區影片四問題二答案
        JtV4P2Ans1.addEventListener('click',function(){
            var formData = $("input[name='JtV4P2']:checked").serialize();
            if(formData=="JtV4P2=1"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<JtV4P2A.length;i++){
                JtV4P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            JtV4P2A[0].style.backgroundColor="#C4E1FF";
        });

        JtV4P2Ans2.addEventListener('click',function(){
            var formData = $("input[name='JtV4P2']:checked").serialize();
            if(formData=="JtV4P2=2"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<JtV4P2A.length;i++){
                JtV4P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="block";
            wrongAns.style.display="none";
            JtV4P2A[1].style.backgroundColor="#C4E1FF";
        });

        //思辨區影片五問題一答案
        JtV5P1Ans1.addEventListener('click',function(){
            var formData = $("input[name='JtV5P1']:checked").serialize();
            if(formData=="JtV5P1=1"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<JtV5P1A.length;i++){
                JtV5P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            JtV5P1A[0].style.backgroundColor="#C4E1FF";
        });

        JtV5P1Ans2.addEventListener('click',function(){
            var formData = $("input[name='JtV5P1']:checked").serialize();
            if(formData=="JtV5P1=2"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<JtV5P1A.length;i++){
                JtV5P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            JtV5P1A[1].style.backgroundColor="#C4E1FF";
        });

        JtV5P1Ans3.addEventListener('click',function(){
            var formData = $("input[name='JtV5P1']:checked").serialize();
            if(formData=="JtV5P1=3"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<JtV5P1A.length;i++){
                JtV5P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            JtV5P1A[2].style.backgroundColor="#C4E1FF";
        });

        JtV5P1Ans4.addEventListener('click',function(){
            var formData = $("input[name='JtV5P1']:checked").serialize();
            if(formData=="JtV5P1=4"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<JtV5P1A.length;i++){
                JtV5P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="block";
            wrongAns.style.display="none";
            JtV5P1A[3].style.backgroundColor="#C4E1FF";
        });

        //思辨區影片五問題二答案
        JtV5P2Ans1.addEventListener('click',function(){
            var formData = $("input[name='JtV5P2']:checked").serialize();
            if(formData=="JtV5P2=1"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<JtV5P2A.length;i++){
                JtV5P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.innerText="了解，您做出不簡單的決定，獲得宇宙幣100元";
            award.style.display="block";
            wrongAns.style.display="none";
            JtV5P2A[0].style.backgroundColor="#C4E1FF";
        });

        JtV5P2Ans2.addEventListener('click',function(){
            var formData = $("input[name='JtV5P2']:checked").serialize();
            if(formData=="JtV5P2=2"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<JtV5P2A.length;i++){
                JtV5P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.innerText="了解，您做出不簡單的決定，獲得宇宙幣100元";
            award.style.display="block";
            wrongAns.style.display="none";
            JtV5P2A[1].style.backgroundColor="#C4E1FF";
        });

        let AsV1P1A=$class("AsV1P1A");
        let AsV1P2A=$class("AsV1P2A");
        let AsV2P1A=$class("AsV2P1A");
        let AsV2P2A=$class("AsV2P2A");
        let AsV3P1A=$class("AsV3P1A");
        let AsV3P2A=$class("AsV3P2A");
        let AsV4P1A=$class("AsV4P1A");
        let AsV4P2A=$class("AsV4P2A");
        let AsV5P1A=$class("AsV5P1A");
        let AsV5P2A=$class("AsV5P2A");

        //美學區影片一問題一答案
        AsV1P1Ans1.addEventListener('click',function(){
            var formData = $("input[name='AsV1P1']:checked").serialize();
            if(formData=="AsV1P1=1"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<AsV1P1A.length;i++){
                AsV1P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            AsV1P1A[0].style.backgroundColor="#C4E1FF";
        });

        AsV1P1Ans2.addEventListener('click',function(){
            var formData = $("input[name='AsV1P1']:checked").serialize();
            if(formData=="AsV1P1=2"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<AsV1P1A.length;i++){
                AsV1P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            AsV1P1A[1].style.backgroundColor="#C4E1FF";
        });

        AsV1P1Ans3.addEventListener('click',function(){
            var formData = $("input[name='AsV1P1']:checked").serialize();
            if(formData=="AsV1P1=3"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<AsV1P1A.length;i++){
                AsV1P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="block";
            wrongAns.style.display="none";
            AsV1P1A[2].style.backgroundColor="#C4E1FF";
        });

        AsV1P1Ans4.addEventListener('click',function(){
            var formData = $("input[name='AsV1P1']:checked").serialize();
            if(formData=="AsV1P1=4"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<AsV1P1A.length;i++){
                AsV1P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            AsV1P1A[3].style.backgroundColor="#C4E1FF";
        });
        //美學區影片一問題二答案
        AsV1P2Ans1.addEventListener('click',function(){
            var formData = $("input[name='AsV1P2']:checked").serialize();
            if(formData=="AsV1P2=1"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<AsV1P2A.length;i++){
                AsV1P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            AsV1P2A[0].style.backgroundColor="#C4E1FF";
        });

        AsV1P2Ans2.addEventListener('click',function(){
            var formData = $("input[name='AsV1P2']:checked").serialize();
            if(formData=="AsV1P2=2"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<AsV1P2A.length;i++){
                AsV1P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            AsV1P2A[1].style.backgroundColor="#C4E1FF";
        });

        AsV1P2Ans3.addEventListener('click',function(){
            var formData = $("input[name='AsV1P2']:checked").serialize();
            if(formData=="AsV1P2=3"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<AsV1P2A.length;i++){
                AsV1P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="block";
            wrongAns.style.display="none";
            AsV1P2A[2].style.backgroundColor="#C4E1FF";
        });

        AsV1P2Ans4.addEventListener('click',function(){
            var formData = $("input[name='AsV1P2']:checked").serialize();
            if(formData=="AsV1P2=4"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<AsV1P2A.length;i++){
                AsV1P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            AsV1P2A[3].style.backgroundColor="#C4E1FF";
        });
        //美學區影片二問題一答案
        AsV2P1Ans1.addEventListener('click',function(){
            var formData = $("input[name='AsV2P1']:checked").serialize();
            if(formData=="AsV2P1=1"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<AsV2P1A.length;i++){
                AsV2P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            AsV2P1A[0].style.backgroundColor="#C4E1FF";
        });

        AsV2P1Ans2.addEventListener('click',function(){
            var formData = $("input[name='AsV2P1']:checked").serialize();
            if(formData=="AsV2P1=2"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<AsV2P1A.length;i++){
                AsV2P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            AsV2P1A[1].style.backgroundColor="#C4E1FF";
        });

        AsV2P1Ans3.addEventListener('click',function(){
            var formData = $("input[name='AsV2P1']:checked").serialize();
            if(formData=="AsV2P1=3"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<AsV2P1A.length;i++){
                AsV2P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="block";
            wrongAns.style.display="none";
            AsV2P1A[2].style.backgroundColor="#C4E1FF";
        });

        AsV2P1Ans4.addEventListener('click',function(){
            var formData = $("input[name='AsV2P1']:checked").serialize();
            if(formData=="AsV2P1=4"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<AsV2P1A.length;i++){
                AsV2P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            AsV2P1A[3].style.backgroundColor="#C4E1FF";
        });

        //美學區影片二問題二答案
        AsV2P2Ans1.addEventListener('click',function(){
            var formData = $("input[name='AsV2P2']:checked").serialize();
            if(formData=="AsV2P2=1"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<AsV2P2A.length;i++){
                AsV2P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="block";
            wrongAns.style.display="none";
            AsV2P2A[0].style.backgroundColor="#C4E1FF";
        });

        AsV2P2Ans2.addEventListener('click',function(){
            var formData = $("input[name='AsV2P2']:checked").serialize();
            if(formData=="AsV2P2=2"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<AsV2P2A.length;i++){
                AsV2P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            AsV2P2A[1].style.backgroundColor="#C4E1FF";
        });

        AsV2P2Ans3.addEventListener('click',function(){
            var formData = $("input[name='AsV2P2']:checked").serialize();
            if(formData=="AsV2P2=3"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<AsV2P2A.length;i++){
                AsV2P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            AsV2P2A[2].style.backgroundColor="#C4E1FF";
        });

        AsV2P2Ans4.addEventListener('click',function(){
            var formData = $("input[name='AsV2P2']:checked").serialize();
            if(formData=="AsV2P2=4"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<AsV2P2A.length;i++){
                AsV2P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            AsV2P2A[3].style.backgroundColor="#C4E1FF";
        });
        //美學區影片三問題一答案
        AsV3P1Ans1.addEventListener('click',function(){
            var formData = $("input[name='AsV3P1']:checked").serialize();
            if(formData=="AsV3P1=1"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<AsV3P1A.length;i++){
                AsV3P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            AsV3P1A[0].style.backgroundColor="#C4E1FF";
        });

        AsV3P1Ans2.addEventListener('click',function(){
            var formData = $("input[name='AsV3P1']:checked").serialize();
            if(formData=="AsV3P1=2"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<AsV3P1A.length;i++){
                AsV3P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            AsV3P1A[1].style.backgroundColor="#C4E1FF";
        });

        AsV3P1Ans3.addEventListener('click',function(){
            var formData = $("input[name='AsV3P1']:checked").serialize();
            if(formData=="AsV3P1=3"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<AsV3P1A.length;i++){
                AsV3P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="block";
            wrongAns.style.display="none";
            AsV3P1A[2].style.backgroundColor="#C4E1FF";
        });

        AsV3P1Ans4.addEventListener('click',function(){
            var formData = $("input[name='AsV3P1']:checked").serialize();
            if(formData=="AsV3P1=4"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<AsV3P1A.length;i++){
                AsV3P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            AsV3P1A[3].style.backgroundColor="#C4E1FF";
        });
        //美學區影片三問題二答案
        AsV3P2Ans1.addEventListener('click',function(){
            var formData = $("input[name='AsV3P2']:checked").serialize();
            if(formData=="AsV3P2=1"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<AsV3P2A.length;i++){
                AsV3P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            AsV3P2A[0].style.backgroundColor="#C4E1FF";
        });

        AsV3P2Ans2.addEventListener('click',function(){
            var formData = $("input[name='AsV3P2']:checked").serialize();
            if(formData=="AsV3P2=2"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<AsV3P2A.length;i++){
                AsV3P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            AsV3P2A[1].style.backgroundColor="#C4E1FF";
        });

        AsV3P2Ans3.addEventListener('click',function(){
            var formData = $("input[name='AsV3P2']:checked").serialize();
            if(formData=="AsV3P2=3"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<AsV3P2A.length;i++){
                AsV3P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            AsV3P2A[2].style.backgroundColor="#C4E1FF";
        });

        AsV3P2Ans4.addEventListener('click',function(){
            var formData = $("input[name='AsV3P2']:checked").serialize();
            if(formData=="AsV3P2=4"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<AsV3P2A.length;i++){
                AsV3P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="block";
            wrongAns.style.display="none";
            AsV3P2A[3].style.backgroundColor="#C4E1FF";
        });

        //美學區影片四問題一答案
        AsV4P1Ans1.addEventListener('click',function(){
            var formData = $("input[name='AsV4P1']:checked").serialize();
            if(formData=="AsV4P1=1"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<AsV4P1A.length;i++){
                AsV4P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            AsV4P1A[0].style.backgroundColor="#C4E1FF";
        });

        AsV4P1Ans2.addEventListener('click',function(){
            var formData = $("input[name='AsV4P1']:checked").serialize();
            if(formData=="AsV4P1=2"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<AsV4P1A.length;i++){
                AsV4P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            AsV4P1A[1].style.backgroundColor="#C4E1FF";
        });

        AsV4P1Ans3.addEventListener('click',function(){
            var formData = $("input[name='AsV4P1']:checked").serialize();
            if(formData=="AsV4P1=3"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<AsV4P1A.length;i++){
                AsV4P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="block";
            wrongAns.style.display="none";
            AsV4P1A[2].style.backgroundColor="#C4E1FF";
        });

        AsV4P1Ans4.addEventListener('click',function(){
            var formData = $("input[name='AsV4P1']:checked").serialize();
            if(formData=="AsV4P1=4"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<AsV4P1A.length;i++){
                AsV4P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            AsV4P1A[3].style.backgroundColor="#C4E1FF"; 
        });
        //美學區影片四問題二答案
        AsV4P2Ans1.addEventListener('click',function(){
            var formData = $("input[name='AsV4P2']:checked").serialize();
            if(formData=="AsV4P2=1"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<AsV4P2A.length;i++){
                AsV4P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            AsV4P2A[0].style.backgroundColor="#C4E1FF"; 
        });

        AsV4P2Ans2.addEventListener('click',function(){
            var formData = $("input[name='AsV4P2']:checked").serialize();
            if(formData=="AsV4P2=2"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<AsV4P2A.length;i++){
                AsV4P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            AsV4P2A[1].style.backgroundColor="#C4E1FF"; 
        });

        AsV4P2Ans3.addEventListener('click',function(){
            var formData = $("input[name='AsV4P2']:checked").serialize();
            if(formData=="AsV4P2=3"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<AsV4P2A.length;i++){
                AsV4P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="block";
            wrongAns.style.display="none";
            AsV4P2A[2].style.backgroundColor="#C4E1FF"; 
        });

        AsV4P2Ans4.addEventListener('click',function(){
            var formData = $("input[name='AsV4P2']:checked").serialize();
            if(formData=="AsV4P2=4"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<AsV4P2A.length;i++){
                AsV4P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            AsV4P2A[3].style.backgroundColor="#C4E1FF"; 
        });
        //美學區影片五問題一答案
        AsV5P1Ans1.addEventListener('click',function(){
            var formData = $("input[name='AsV5P1']:checked").serialize();
            if(formData=="AsV5P1=1"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<AsV5P1A.length;i++){
                AsV5P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="block";
            wrongAns.style.display="none";
            AsV5P1A[0].style.backgroundColor="#C4E1FF"; 
        });

        AsV5P1Ans2.addEventListener('click',function(){
            var formData = $("input[name='AsV5P1']:checked").serialize();
            if(formData=="AsV5P1=2"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<AsV5P1A.length;i++){
                AsV5P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            AsV5P1A[1].style.backgroundColor="#C4E1FF"; 
        });

        AsV5P1Ans3.addEventListener('click',function(){
            var formData = $("input[name='AsV5P1']:checked").serialize();
            if(formData=="AsV5P1=3"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<AsV5P1A.length;i++){
                AsV5P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            AsV5P1A[2].style.backgroundColor="#C4E1FF"; 
        });

        AsV5P1Ans4.addEventListener('click',function(){
            var formData = $("input[name='AsV5P1']:checked").serialize();
            if(formData=="AsV5P1=4"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<AsV5P1A.length;i++){
                AsV5P1A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            AsV5P1A[3].style.backgroundColor="#C4E1FF";  
        });
        //美學區影片五問題二答案
        AsV5P2Ans1.addEventListener('click',function(){
            var formData = $("input[name='AsV5P2']:checked").serialize();
            if(formData=="AsV5P2=1"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<AsV5P2A.length;i++){
                AsV5P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            AsV5P2A[0].style.backgroundColor="#C4E1FF";  
        });

        AsV5P2Ans2.addEventListener('click',function(){
            var formData = $("input[name='AsV5P2']:checked").serialize();
            if(formData=="AsV5P2=2"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<AsV5P2A.length;i++){
                AsV5P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            AsV5P2A[1].style.backgroundColor="#C4E1FF";  
        });

        AsV5P2Ans3.addEventListener('click',function(){
            var formData = $("input[name='AsV5P2']:checked").serialize();
            if(formData=="AsV5P2=3"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<AsV5P2A.length;i++){
                AsV5P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="block";
            wrongAns.style.display="none";
            AsV5P2A[2].style.backgroundColor="#C4E1FF";  
        });

        AsV5P2Ans4.addEventListener('click',function(){
            var formData = $("input[name='AsV5P2']:checked").serialize();
            if(formData=="AsV5P2=4"){
                console.log('Posting the following: ', formData);
                $.ajax({
                    url: 'php/video.php',
                    data: formData,
                    type: 'post',
                    success: function(response) {
                        $id('coin').innerText=response;
                    }
                });
            }
            for(var i=0;i<AsV5P2A.length;i++){
                AsV5P2A[i].style.backgroundColor="transparent";
            }//先清除所有底色
            award.style.display="none";
            wrongAns.style.display="block";
            AsV5P2A[3].style.backgroundColor="#C4E1FF";  
        });
    }    
    let fnV1P1Ans1=$id("fnVideo1-problem1Ans1");
    let fnV1P1Ans2=$id("fnVideo1-problem1Ans2");
    let fnV1P1Ans3=$id("fnVideo1-problem1Ans3");
    let fnV1P1Ans4=$id("fnVideo1-problem1Ans4");
    let fnV1P1A = $class("fnV1P1A");//抓每個題目的四個選項
    
    // 財經影片一第一題解答
    fnV1P1Ans1.addEventListener('click',function(){
        var formData = $("input[name='fnV1P1']:checked").serialize();
        if(formData=="fnV1P1=1"){
            console.log('Posting the following: ', formData);
            $.ajax({
                url: 'php/video.php',
                data: formData,
                type: 'post',
                success: function(response) {
                    $id('coin').innerText=response;
                }
            });
        }
        for(var i=0;i<fnV1P1A.length;i++){
            fnV1P1A[i].style.backgroundColor="transparent";
        }//先清除所有底色
        award.style.display="none";
        wrongAns.style.display="block";
        fnV1P1A[0].style.backgroundColor="#C4E1FF";
    },false);

    fnV1P1Ans2.addEventListener('click',function(){
        var formData = $("input[name='fnV1P1']:checked").serialize();
        console.log(formData);
        if(formData=="fnV1P1=2"){
            console.log('Posting the following: ', formData);
            $.ajax({
                url: 'php/video.php',
                data: formData,
                type: 'post',
                success: function(response) {
                    $id('coin').innerText=response;
                }
            });
        }
        for(var i=0;i<fnV1P1A.length;i++){
            fnV1P1A[i].style.backgroundColor="transparent";
        }//先清除所有底色
        award.style.display="none";
        wrongAns.style.display="block";
        fnV1P1A[1].style.backgroundColor="#C4E1FF";
    });

    fnV1P1Ans3.addEventListener('click',function(){
        var formData = $("input[name='fnV1P1']:checked").serialize();
        console.log(formData);
        if(formData=="fnV1P1=3"){
            console.log('Posting the following: ', formData);
            $.ajax({
                url: 'php/video.php',
                data: formData,
                type: 'post',
                success: function(response) {
                    $id('coin').innerText=response;
                }
            });
        }
        for(var i=0;i<fnV1P1A.length;i++){
            fnV1P1A[i].style.backgroundColor="transparent";
        }//先清除所有底色
        award.style.display="block";
        wrongAns.style.display="none";
        fnV1P1A[2].style.backgroundColor="#C4E1FF";
    });

    fnV1P1Ans4.addEventListener('click',function(){
        var formData = $("input[name='fnV1P1']:checked").serialize();
        if(formData=="fnV1P1=4"){
            console.log('Posting the following: ', formData);
            $.ajax({
                url: 'php/video.php',
                data: formData,
                type: 'post',
                success: function(response) {
                    $id('coin').innerText=response;
                }
            });
        }
        
        for(var i=0;i<fnV1P1A.length;i++){
            fnV1P1A[i].style.backgroundColor="transparent";
        }//先清除所有底色
        award.style.display="none";
        wrongAns.style.display="block";
        fnV1P1A[3].style.backgroundColor="#C4E1FF";
    });

});