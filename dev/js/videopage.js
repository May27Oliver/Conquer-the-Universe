window.addEventListener('load',function(){
    // video slider功能，點下去出現大video
    let videos=document.querySelectorAll(".fn-video");
    
    for(let i=0;i<videos.length;i++){
        videos[i].addEventListener('click',function(e){
            var source = e.target.getAttribute("data-source");// 回傳 "src"
            console.log(source);
            document.getElementById("big-video").src=source;
        });
    }
    let oneVideo=0;
    let wrap=document.querySelector(".video-slider ul");
    let turnLeft=document.querySelector(".slider-forward");
    let turnRight=document.querySelector(".slider-back");
    turnRight.disabled=true; //一開始右鍵不能按
    turnRight.style.opacity=0;

    // video slider左邊按鈕按下去功能
    document.querySelector(".slider-forward").addEventListener('click',function(e){
        oneVideo--;
        wrap.style.left= 25*oneVideo+"%";
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
        wrap.style.left= 25*oneVideo+"%";
        // console.log(oneVideo);
        turnLeft.disabled = false;
        turnLeft.style.opacity=1;
        if( oneVideo == 0){
            turnRight.disabled = true;
            turnRight.style.opacity=0;
        } 
    });
    // 問答題點下去出現答案
    function $id(id){
       return document.getElementById(id);
    }//簡寫getElementById()，記得要把id加上""

    function $class(classname){
        return document.getElementsByClassName(classname);
     }//簡寫getElementsByClassName，記得要把classname加上""
    
    function $query(cssname){
        return document.querySelector(cssname);
    }

    let fnProblems1 = $class("fnVideo1-problem");//抓影片一題庫所有的題目
    let fnProblems2 = $class("fnVideo2-problem");//抓影片二題庫所有的題目
    let fnProblems3 = $class("fnVideo3-problem");//抓影片三題庫所有的題目
    let fnProblems4 = $class("fnVideo4-problem");//抓影片四題庫所有的題目
    let fnProblems5 = $class("fnVideo5-problem");//抓影片五題庫所有的題目    

    let lastOne=$id("lastProblem");//抓上一題的button
    let nextOne=$id("nextProblem");//抓下一提的button
    
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
    });
    

    let fnP1Ans1=$id("fnVideo1-problem1Ans1");
    let fnP1Ans2=$id("fnVideo1-problem1Ans2");
    let fnP1Ans3=$id("fnVideo1-problem1Ans3");
    let fnP1Ans4=$id("fnVideo1-problem1Ans4");

    let fnP2Ans1=$id("fnVideo1-problem2Ans1");
    let fnP2Ans2=$id("fnVideo1-problem2Ans2");
    let fnP2Ans3=$id("fnVideo1-problem2Ans3");
    let fnP2Ans4=$id("fnVideo1-problem2Ans4");

    let award=$id("award");
    let wrongAns=$id("wrongAns");
    
    // 財經影片一第一題解答
    fnP1Ans1.addEventListener('click',function(){
        award.style.display="none";
        wrongAns.style.display="block";
    });

    fnP1Ans2.addEventListener('click',function(){
        award.style.display="none";
        wrongAns.style.display="block";
    });

    fnP1Ans3.addEventListener('click',function(){
        award.style.display="block";
        wrongAns.style.display="none";
    });

    fnP1Ans4.addEventListener('click',function(){
        award.style.display="none";
        wrongAns.style.display="block";
    });

    // 財經影片一第二題解答
    fnP2Ans1.addEventListener('click',function(){
        award.style.display="none";
        wrongAns.style.display="block";
    });

    fnP2Ans2.addEventListener('click',function(){
        award.style.display="none";
        wrongAns.style.display="block";
    });

    fnP2Ans3.addEventListener('click',function(){
        award.style.display="none";
        wrongAns.style.display="block";
    });

    fnP2Ans4.addEventListener('click',function(){
        award.style.display="block";
        wrongAns.style.display="none";
    });

    //財經影片二第一題解答
    
});