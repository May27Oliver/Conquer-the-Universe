window.addEventListener('load',function(){
    //星球排名初始值
    OStarPoint();
    function OStarPoint(){

        document.getElementById("startContest").innerText= "2019/11/21";
        document.getElementById("endContest").innerText= "2019/11/28";

        document.getElementById("role1").innerText= '兔兔星';
        document.getElementById("role2").innerText= '肥宅星';
        document.getElementById("role3").innerText= '派大星';
        
        new CountUp("winPoint_1",0,8787).start();
        new CountUp("winPoint_2",0,6666).start();
        new CountUp("winPoint_3",0,5487).start();
        
        document.getElementById("roleImg1").src='img/rabbit.png';
        document.getElementById("roleImg2").src='img/fat.png';
        document.getElementById("roleImg3").src='img/OneEye.png';
        
        document.getElementById("stage1").style.backgroundImage = "url('img/home_img/stageR1.png')";
        document.getElementById("stage2").style.backgroundImage = "url('img/home_img/stageB2.png')";
        document.getElementById("stage3").style.backgroundImage = "url('img/home_img/stageY3.png')";

    }
    
    //倒數
    setInterval(function() {
        myDate=new Date(2019,10,21);//開始時間為11/21 00:00
        newDate=new Date();//最新時間
        var time=Math.floor((newDate-myDate)/1000);//過幾秒惹
        var week=Math.floor(time/604800);//距離起始幾周
        var deadline=week+1;//結算日期
        if(time%604800==0){
            
            //抓星球排名
            getStarPoint();
            function getStarPoint(){
                
                var xhr = new XMLHttpRequest();
                xhr.onload=function (){
                    if( xhr.status == 200 ){ 
                        starData = JSON.parse(xhr.responseText);
                        var name1=starData[0]['starName'];
                        var name2=starData[1]['starName'];
                        var name3=starData[2]['starName'];
                        document.getElementById("role1").innerText= name1;
                        document.getElementById("role2").innerText= name2;
                        document.getElementById("role3").innerText= name3;
                        var point1=starData[0]['starPopularity'];
                        var point2=starData[1]['starPopularity'];
                        var point3=starData[2]['starPopularity'];
                        new CountUp("winPoint_1",0,point1).start();
                        new CountUp("winPoint_2",0,point2).start();
                        new CountUp("winPoint_3",0,point3).start();
                        // document.getElementById("winPoint_1").innerText= point1;
                        // document.getElementById("winPoint_2").innerText= point2;
                        // document.getElementById("winPoint_3").innerText= point3;
                        var role1=starData[0]['starsRole'];
                        var role2=starData[1]['starsRole'];
                        var role3=starData[2]['starsRole'];
                        document.getElementById("roleImg1").src=`${role1}`;
                        document.getElementById("roleImg2").src=`${role2}`;
                        document.getElementById("roleImg3").src=`${role3}`;
                        var stage1=starData[0]['stageImg'];
                        var stage2=starData[1]['stageImg'];
                        var stage3=starData[2]['stageImg'];
                        str1=stage1.replace("ccc","1");
                        str2=stage2.replace("ccc","2");
                        str3=stage3.replace("ccc","3");
                        document.getElementById("stage1").style.backgroundImage = `url('${str1}')`;
                        document.getElementById("stage2").style.backgroundImage = `url('${str2}')`;
                        document.getElementById("stage3").style.backgroundImage = `url('${str3}')`;

                    }else{ 
                        alert( xhr.status );
                    }
                }
                var url = "php/endContest.php";
                xhr.open("Get", url, true);
                xhr.send( null );
            }

            //第一名塞進獎台

            

            //發獎牌
            getPlayer3();
            function getPlayer3(){
                var xhr = new XMLHttpRequest();
                // xhr.onload=function (){}
                var url = "php/changeBadage.php";
                xhr.open("Get", url, true);
                xhr.send( null );
            }
     
            
            //更新新一期的時間區段
            startDate = new Date(myDate.getTime() + (week * 7 * 24 * 60 * 60 * 1000));
            endDate = new Date(myDate.getTime() + (deadline * 7 * 24 * 60 * 60 * 1000));
            startStr=`${startDate.getFullYear()}/${startDate.getMonth()+1}/${startDate.getDate()}`;
            endStr=`${endDate.getFullYear()}/${endDate.getMonth()+1}/${endDate.getDate()}`;
            document.getElementById("startContest").innerText= startStr;
            document.getElementById("endContest").innerText= endStr;


            //資料清空
            clearPoint();
            function clearPoint(){
                var xhr = new XMLHttpRequest();
                // xhr.onload=function (){}
                var url = "php/clearPoint.php";
                xhr.open("Get", url, true);
                xhr.send( null );
            }
            
        }
          
    // console.log(time);
    }, 1000);
});