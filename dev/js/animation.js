window.addEventListener('load',function(){

   // let getStart=document.getElementById("winPoint_1");
   // if(getStart){
   //    new CountUp("winPoint_1",0,66666).start();
   //    new CountUp("winPoint_2",0,66666).start();
   //    new CountUp("winPoint_3",0,66666).start();
   // }
   // let homeCitizenCount = document.getElementById("popularity");
   // if(homeCitizenCount){
   //    new CountUp("popularity",0,66666).start();
   // }
   
   //公民小學堂動畫
   TweenMax.to('.rabbit', 1,{
      //  x:100,
      repeat:-1,
      yoyo:true,
      ease: Bounce.easeOut, y: 50
   });

   TweenMax.to('.fatty', 2,{
      //  x:100,
      rotation:15,
      transformOrigin : 'center',
      repeat:-1,
      repeatDelay:1.5,
      yoyo:true,
      ease: Power2.easeOut, x: 80
   });

   //公民的家
   TweenMax.to('.boxCenter img', 2,{
      y: -30,
      repeat: -1, //-1無限迴圈,
      yoyo: true
   });
   TweenMax.to('.EquiClose1', 2,{
      y: -30,
      repeat: -1, //-1無限迴圈,
      yoyo: true
   })
   TweenMax.to('.EquiClose2', 2,{
      y: -30,
      repeat: -1, //-1無限迴圈,
      yoyo: true
   });

   // 首頁
   TweenMax.to('.alien_1 img', 1.5,{
      //  x:100,
      repeat:-1,
      yoyo:true,
      ease: Bounce.easeOut, y: 50
   });

   TweenMax.to('.alien_2 img', 2,{
      //  x:100,
      repeat:-1,
      yoyo:true,
      ease: Bounce.easeOut, y: 50
   });

   TweenMax.to('.alien_3 img', 1,{
      //  x:100,
      repeat:-1,
      yoyo:true,
      ease: Bounce.easeOut, y: 50
   });

   TweenMax.to('.ufo', 1,{
      y: -20,
      repeat: -1, //-1無限迴圈,
      yoyo: true
   });
   
  
});