window.addEventListener('load',function(){
    // video slider功能，點下去出現大video
    let videos=document.querySelectorAll(".fn-video");
    for(let i=0;i<videos.length;i++){
        videos[i].addEventListener('mouseover',function(e){
            let smallVideo=e.target.src; //抓slider上的影片來源
            let bigVideo = document.getElementById("big-video").src;
            document.getElementById("big-video").src=smallVideo;
        });
    }
    let oneVedio=0;
    let wrap=document.querySelector(".video-slider ul");
    let turnLeft=document.querySelector(".slider-forward");
    let turnRight=document.querySelector(".slider-back");
    turnRight.disabled=true; //一開始右鍵不能按
    turnRight.style.opacity=0;

    // video slider左邊按鈕按下去功能
    document.querySelector(".slider-forward").addEventListener('click',function(e){
        oneVedio--;
        wrap.style.left= 25*oneVedio+"%";
        console.log(oneVedio);
        turnRight.disabled=false;
        turnRight.style.opacity=1;
        if( oneVedio == -1){
            turnLeft.disabled = true;
            turnLeft.style.opacity=0;
        }
    });
    // video slider右邊按鈕按下去功能
    document.querySelector(".slider-back").addEventListener('click',function(e){
        oneVedio++;
        wrap.style.left= 25*oneVedio+"%";
        console.log(oneVedio);
        turnLeft.disabled = false;
        turnLeft.style.opacity=1;
        if( oneVedio == 0){
            turnRight.disabled = true;
            turnRight.style.opacity=0;
        } 
    });
    // 問答題點下去出現答案
    function $id(id){
       return document.getElementById(id);
    }//簡寫getElementById()，記得要把id加上""
    
    let ans1=$id("ans1");
    let ans2=$id("ans2");
    let ans3=$id("ans3");
    let award=$id("award");
    
    $id("ans1").addEventListener('click',function(){

    });


});