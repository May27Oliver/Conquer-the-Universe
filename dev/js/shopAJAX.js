  
// var nameWord=document.getElementById("memberName").innerText;
// let memNo = $('#memberName').text();
// alert(memNo);
// if(nameWord){
//     alert("登入");
// }else{
//     alert("未登入");
// }
//   // 商城商品上架未登入
//   function shopEquiNo(){
//     var xhr = new XMLHttpRequest();
//     xhr.onload=function (){
//          if( xhr.status == 200 ){
//             shopEquiNo= JSON.parse(xhr.responseText);
//           console.log(shopEquiNo);
//               $(".boxForProduct").append(`
//               <div class="toolTitle">
//                   <!-- <h3>
//                       服裝道具
//                   </h3>
//                   <span>
//                       購買服裝道具可以增加候選人支持度
//                   </span> -->
//               </div>
//                   <div class="col-6">
//                           <div class="productPic">
//                               <img id="shopPic1" src="${shopEquiNo[0].clothimg}" width="128" onclick="loadImage01()"/>
                              
//                           </div>
//                           <div class="productTitle">
//                               <h3 class="clothName1">${shopEquiNo[0].clothName}</h3>
//                               <div  class="shopNoLogin" onclick="enterHomeCitizen()">
//                                   <button id="shopSpanLogin" >${shopEquiNo[0].clothPrice}</button>
//                                   <span class="popularityAdd1" style="visibility:hidden">${shopEquiNo[0].popularAmount}</span>                         
//                                   <span class="clothNo1" style="visibility:hidden">${shopEquiNo[0].clothNo}</span>
//                                   <span class="clothClass1" style="visibility:hidden">${shopEquiNo[0].clothClass}</span>
//                               </div>
//                           </div>  
//                   </div>
//                   <div class="col-6">
//                       <div class="productPic">
//                               <img id="shopPic2" src="${shopEquiNo[1].clothimg}" width="128" onclick="loadImage02()"/>
//                       </div>
//                       <div class="productTitle">
//                           <h3 class="clothName">${shopEquiNo[1].clothName}</h3>
//                           <div class="shopNoLogin" onclick="enterHomeCitizen()">
//                               <button id="shopSpanLogin" >${shopEquiNo[1].clothPrice}</button>
//                               <span class="popularityAdd2" style="visibility:hidden">${shopEquiNo[1].popularAmount}</span>    
//                               <span class="clothNo2" style="visibility:hidden">${shopEquiNo[1].clothNo}</span>
//                               <span class="clothClass2" style="visibility:hidden">${shopEquiNo[1].clothClass}</span>
//                           </div>
//                       </div>  
//                   </div>    
//                   <div class="col-6">
//                       <div class="productPic">
//                               <img id="shopPic3" src="${shopEquiNo[2].clothimg}" width="128" onclick="loadImage03()"/>
//                       </div>
//                       <div class="productTitle">
//                           <h3 class="clothName">${shopEquiNo[2].clothName}</h3>
//                           <div  class="shopNoLogin" onclick="enterHomeCitizen()">
//                               <button id="shopSpanLogin" >${shopEquiNo[2].clothPrice}</button>
//                               <span class="popularityAdd3" style="visibility:hidden">${shopEquiNo[2].popularAmount}</span>    <span class="clothNo3" style="visibility:hidden">${shopEquiNo[2].clothNo}</span>
//                               <span class="clothClass3" style="visibility:hidden">${shopEquiNo[2].clothClass}</span>
//                           </div>
//                           </div>  
//                   </div>
//                   <div class="col-6">
//                       <div class="productPic">
//                               <img id="shopPic4" src="${shopEquiNo[3].clothimg}" width="128" onclick="loadImage04()"/>
//                       </div>
//                       <div  class="productTitle">
//                           <h3 class="clothName">${shopEquiNo[3].clothName}</h3>
//                           <div class="shopNoLogin" onclick="enterHomeCitizen()">
//                               <button id="shopSpanLogin" >${shopEquiNo[3].clothPrice}</button>
//                               <span class="popularityAdd" style="visibility:hidden">${shopEquiNo[3].popularAmount}</span>    
//                               <span class="clothNo" style="visibility:hidden">${shopEquiNo[3].clothNo}</span>
//                               <span class="clothClass" style="visibility:hidden">${shopEquiNo[3].clothClass}</span>
//                           </div>
//                       </div>  
//                   </div>
//               `)
//               //  console.log (e.target.parentNode.getAttribute("data-range"));  
//           }

//     }
    
//     var url = "php/shopEquiNo.php?";
//     xhr.open("Get", url, true);
//     xhr.send( null );
//   }//setInterval(todayEqui ,10000);
//   shopEquiNo();
   

   // 商城商品上架已登入
         function shopEqui(){
      var xhr = new XMLHttpRequest();
      xhr.onload=function (){
           if( xhr.status == 200 ){
            shopEqui= JSON.parse(xhr.responseText);
            // console.log(shopEqui[0].popularity);
                $(".boxForProduct").append(`
                <div class="toolTitle">
                    <!-- <h3>
                        服裝道具
                    </h3>
                    <span>
                        購買服裝道具可以增加候選人支持度
                    </span> -->
                    
                </div>
                    <div class="col-3 col-md-6">
                            <div class="productPic">
                                <img id="shopPic1" src="${shopEqui[0].clothimg}" width="128" onclick="loadImage01()"/>
                                
                            </div>
                            <div class="productTitle">
                                <h3 class="clothName1">${shopEqui[0].clothName}</h3>
                                <div  class="productBtn1">
                                    <button id="shopSpanLogin" ><p>${shopEqui[0].clothPrice}</p></button>
                                    <span class="popularityAdd1" style="visibility:hidden">${shopEqui[0].popularAmount}</span>                         
                                    <span class="clothNo1" style="visibility:hidden">${shopEqui[0].clothNo}</span>
                                    <span class="clothClass1" style="visibility:hidden">${shopEqui[0].clothClass}</span>
                                </div>
                            </div>  
                    </div>
                    <div class="col-3 col-md-6">
                        <div class="productPic">
                                <img id="shopPic2" src="${shopEqui[4].clothimg}" width="128" onclick="loadImage02()"/>
                        </div>
                        <div class="productTitle">
                            <h3 class="clothName2">${shopEqui[4].clothName}</h3>
                            <div class="productBtn2">
                                <button id="shopSpanLogin" ><p>${shopEqui[4].clothPrice}</p></button>
                                <span class="popularityAdd2" style="visibility:hidden">${shopEqui[4].popularAmount}</span>    
                                <span class="clothNo2" style="visibility:hidden">${shopEqui[4].clothNo}</span>
                                <span class="clothClass2" style="visibility:hidden">${shopEqui[4].clothClass}</span>
                            </div>
                        </div>  
                    </div>    
                    <div class="col-3 col-md-6">
                        <div class="productPic">
                                <img id="shopPic3" src="${shopEqui[2].clothimg}" width="128" onclick="loadImage03()"/>
                        </div>
                        <div class="productTitle">
                            <h3 class="clothName3">${shopEqui[2].clothName}</h3>
                            <div  class="productBtn3">
                                <button id="shopSpanLogin" ><p>${shopEqui[2].clothPrice}</p></button>
                                <span class="popularityAdd3" style="visibility:hidden">${shopEqui[2].popularAmount}</span>    <span class="clothNo3" style="visibility:hidden">${shopEqui[2].clothNo}</span>
                                <span class="clothClass3" style="visibility:hidden">${shopEqui[2].clothClass}</span>
                            </div>
                            </div>  
                    </div>
                    <div class="col-3 col-md-6">
                        <div class="productPic">
                                <img id="shopPic4" src="${shopEqui[3].clothimg}" width="128" onclick="loadImage04()"/>
                        </div>
                        <div  class="productTitle">
                            <h3 class="clothName4">${shopEqui[3].clothName}</h3>
                            <div class="productBtn4">
                                <button id="shopSpanLogin" ><p>${shopEqui[3].clothPrice}</p></button>
                                <span class="popularityAdd4" style="visibility:hidden">${shopEqui[3].popularAmount}</span>    
                                <span class="clothNo4" style="visibility:hidden">${shopEqui[3].clothNo}</span>
                                <span class="clothClass4" style="visibility:hidden">${shopEqui[3].clothClass}</span>
                            </div>
                        </div>  
                    </div>
                `)
                //  console.log (e.target.parentNode.getAttribute("data-range"));  
            }

      }
      
      var url = "php/shopEqui.php?";
      xhr.open("Get", url, true);
      xhr.send( null );
    }//setInterval(todayEqui ,10000);
    shopEqui();

    //買道具扣錢 商品一
    $("#addToBackpack").click(function(e){
            //--買道具扣錢
            // let memNo = $('.memNo').text();                 //個人編號
            // let shopPopularity = $('.shopPopularity').text();       //個人支持度
            // let popularityAdd1 = $('.popularityAdd1').text(); //商品支持度
            let starCoin =$('#coin').text();                //個人金幣
            let shopSpanLogin = $('#shopSpanLogin').text();     //商品價格

            // let popularityAll = parseInt(shopPopularity)+parseInt(popularityAdd1); //買道具增加聲量
            
            //==增加裝備庫欄位抓值
            let clothImg1 = $('#shopPic1').attr('src');           //商品路徑1
            let clothNo1 = $('.clothNo1').text();             //商品編號
            let clothName1 = $('.clothName1').text();  //裝備類型
            let clothClass1 = $('.clothClass1').text();       //裝備類型
            // let storage = sessionStorage;
            
            console.log(clothName1);
            console.log(clothClass1);
            console.log(clothNo1);
            console.log(clothImg1);
            // console.log(memNo);
            console.log(starCoin);
            console.log(shopSpanLogin);
            
            // console.log(shopPopularity);
            // console.log(popularityAdd1);
            // console.log(popularityAll);
                if($id("coin").innerText==""){
                    alert("您尚未登入，請先登入或註冊會員～");
                }else{

                    if(starCoin>=shopSpanLogin){
                        let balance = starCoin - shopSpanLogin; //買道具扣錢
                        console.log(balance);
                    //--買道具增加聲量 及 買道具扣錢    
                    sessionStorage.setItem('clothNo1', clothNo1);
                    // sessionStorage.setItem('memNo', memNo);
                    sessionStorage.setItem('starCoin', starCoin);
                    sessionStorage.setItem('balance', balance);
                    sessionStorage.setItem('shopSpanLogin', shopSpanLogin);
                    // sessionStorage.setItem('popularityAll', popularityAll);

                    //==增加裝備庫欄位抓值
                
                    sessionStorage.setItem('clothImg1', clothImg1);
                    sessionStorage.setItem('clothClass1', clothClass1);
                    sessionStorage.setItem('clothName1', clothName1);
                    $.ajax({    
                        url: `php/shop.php`,
                        data: {
                            // memNo:memNo,
                            starCoin:starCoin,
                            balance:balance,
                            shopSpanLogin:shopSpanLogin,
                            // popularityAll:popularityAll,
                        },
                        type: 'GET',
                        success: function(data){
                            // alert(1111)
                        console.log(data);
                        $('#coin').text(balance);
                        sessionStorage.setItem('starCoin',balance);
                        //    $('#popularity').text(popularityAll);
                        //    sessionStorage.setItem('popularity',popularityAll);
                        },
                        
                    })
                    
                    $.ajax({    
                        url: `php/ShopInsert.php`,
                        data: {
                            clothNo1:clothNo1,
                            clothImg1:clothImg1,
                            clothClass1:clothClass1,
                            clothName1:clothName1,
                            // starCoin:starCoin,
                            // balance:balance,
                            // citizenShop:citizenShop,
                            // popularityAll:popularityAll,
                        },
                        type: 'GET',
                        success: function(){
                            // alert(2222);
                    
                        
                        },
                        
                    })
                }else{
                        alert("宇宙幣不足，請至公民學堂賺取宇宙幣");
                };
                
            } 

        });


        // 買道具扣錢 商品二
        $("#addToBackpack2").click(function(e){
            //-- 買道具扣錢
            // let memNo = $('.memNo').text();                 //個人編號
            // let shopPopularity = $('.shopPopularity').text();       //個人支持度
            // let popularityAdd2 = $('.popularityAdd2').text(); //商品支持度
            let starCoin =$('#coin').text();                //個人金幣
            let shopSpanLogin = $('#shopSpanLogin').text();     //商品價格

            // let popularityAll = parseInt(shopPopularity)+parseInt(popularityAdd2); //買道具增加聲量
            
            //==增加裝備庫欄位抓值
            let clothImg2 = $('#shopPic2').attr('src');           //商品路徑2
            let clothNo2 = $('.clothNo2').text();             //商品編號
            let clothName2 = $('.clothName2').text();  //裝備類型
            let clothClass2 = $('.clothClass2').text();       //裝備類型
            // let storage = sessionStorage;
            
            console.log(clothName2);
            console.log(clothClass2);
            console.log(clothNo2);
            console.log(clothImg2);
            // console.log(memNo);
            console.log(starCoin);
            console.log(shopSpanLogin);
            
            // console.log(shopPopularity);
            // console.log(popularityAdd2);
            // console.log(popularityAll);
            
                if($id("coin").innerText==""){
                    alert("您尚未登入，請先登入或註冊會員～");
                }else{
                        if(starCoin>=shopSpanLogin){
                            let balance = starCoin - shopSpanLogin; //買道具扣錢
                            console.log(balance);
                        //--買道具增加聲量 及 買道具扣錢    
                        sessionStorage.setItem('clothNo2', clothNo2);
                        // sessionStorage.setItem('memNo', memNo);
                        sessionStorage.setItem('starCoin', starCoin);
                        sessionStorage.setItem('balance', balance);
                        sessionStorage.setItem('shopSpanLogin', shopSpanLogin);
                        // sessionStorage.setItem('popularityAll', popularityAll);

                        //==增加裝備庫欄位抓值
                    
                        sessionStorage.setItem('clothImg2', clothImg2);
                        sessionStorage.setItem('clothClass2', clothClass2);
                        sessionStorage.setItem('clothName2', clothName2);
                        $.ajax({    
                            url: `php/shop.php`,
                            data: {
                                // memNo:memNo,
                                starCoin:starCoin,
                                balance:balance,
                                shopSpanLogin:shopSpanLogin,
                                // popularityAll:popularityAll,
                            },
                            type: 'GET',
                            success: function(data){
                                // alert(2222)
                            console.log(data);
                            $('#coin').text(balance);
                            sessionStorage.setItem('starCoin',balance);
                            //    $('#popularity').text(popularityAll);
                            //    sessionStorage.setItem('popularity',popularityAll);
                            },
                            
                        })
                        
                        $.ajax({    
                            url: `php/ShopInsert2.php`,
                            data: {
                                clothNo2:clothNo2,
                                clothImg2:clothImg2,
                                clothClass2:clothClass2,
                                clothName2:clothName2,
                                // starCoin:starCoin,
                                // balance:balance,
                                // citizenShop:citizenShop,
                                // popularityAll:popularityAll,
                            },
                            type: 'GET',
                            success: function(){
                                // alert(2222);
                        
                            
                            },
                            
                        })
                    }else{
                            alert("宇宙幣不足，請至公民學堂賺取宇宙幣");
                    };
                };
                
            });

        // 買道具扣錢 商品三
        $("#addToBackpack3").click(function(e){
            //--買道具扣錢
            // let memNo = $('.memNo').text();                 //個人編號
            let shopPopularity = $('.shopPopularity').text();       //個人支持度
            // let popularityAdd3 = $('.popularityAdd3').text(); //商品支持度
            let starCoin =$('#coin').text();                //個人金幣
            let shopSpanLogin = $('#shopSpanLogin').text();     //商品價格

            // let popularityAll = parseInt(shopPopularity)+parseInt(popularityAdd3); //買道具增加聲量
            
            //==增加裝備庫欄位抓值
            let clothImg3 = $('#shopPic3').attr('src');           //商品路徑3
            let clothNo3 = $('.clothNo3').text();             //商品編號
            let clothName3 = $('.clothName3').text();  //裝備類型
            let clothClass3 = $('.clothClass3').text();       //裝備類型
            let storage = sessionStorage;
            
            console.log(clothName3);
            console.log(clothClass3);
            console.log(clothNo3);
            console.log(clothImg3);
            // console.log(memNo);
            console.log(starCoin);
            console.log(shopSpanLogin);
            
            // console.log(shopPopularity);
            // console.log(popularityAdd3);
            // console.log(popularityAll);
            
            if($id("coin").innerText==""){
                alert("您尚未登入，請先登入或註冊會員～");
            }else{
                    if(starCoin>=shopSpanLogin){
                        let balance = starCoin - shopSpanLogin; //買道具扣錢
                        console.log(balance);
                    //-- 買道具扣錢    
                    sessionStorage.setItem('clothNo3', clothNo3);
                    // sessionStorage.setItem('memNo', memNo);
                    sessionStorage.setItem('starCoin', starCoin);
                    sessionStorage.setItem('balance', balance);
                    sessionStorage.setItem('shopSpanLogin', shopSpanLogin);
                    // sessionStorage.setItem('popularityAll', popularityAll);

                    //==增加裝備庫欄位抓值
                
                    sessionStorage.setItem('clothImg3', clothImg3);
                    sessionStorage.setItem('clothClass3', clothClass3);
                    sessionStorage.setItem('clothName3', clothName3);
                    $.ajax({    
                        url: `php/shop.php`,
                        data: {
                            // memNo:memNo,
                            starCoin:starCoin,
                            balance:balance,
                            shopSpanLogin:shopSpanLogin,
                            // popularityAll:popularityAll,
                        },
                        type: 'GET',
                        success: function(data){
                            // alert(3333)
                        console.log(data);
                        $('#coin').text(balance);
                        sessionStorage.setItem('starCoin',balance);
                        //    $('#popularity').text(popularityAll);
                        //    sessionStorage.setItem('popularity',popularityAll);
                        },
                        
                    })
                    
                    $.ajax({    
                        url: `php/ShopInsert3.php`,
                        data: {
                            clothNo3:clothNo3,
                            clothImg3:clothImg3,
                            clothClass3:clothClass3,
                            clothName3:clothName3,
                            // starCoin:starCoin,
                            // balance:balance,
                            // citizenShop:citizenShop,
                            // popularityAll:popularityAll,
                        },
                        type: 'GET',
                        success: function(){
                            // alert(2222);
                    
                        
                        },
                        
                    })
                }else{
                        alert("宇宙幣不足，請至公民學堂賺取宇宙幣");
                };
            };
            
        });

        //買道具扣錢 商品三
        $("#addToBackpack4").click(function(e){
            //--買道具扣錢
            // let memNo = $('.memNo').text();                 //個人編號
            // let shopPopularity = $('.shopPopularity').text();       //個人支持度
            // let popularityAdd4 = $('.popularityAdd4').text(); //商品支持度
            let starCoin =$('#coin').text();                //個人金幣
            let shopSpanLogin = $('#shopSpanLogin').text();     //商品價格

            // let popularityAll = parseInt(shopPopularity)+parseInt(popularityAdd4); //買道具增加聲量
            
            //==增加裝備庫欄位抓值
            let clothImg4 = $('#shopPic4').attr('src');           //商品路徑4
            let clothNo4 = $('.clothNo4').text();             //商品編號
            let clothName4 = $('.clothName4').text();  //裝備類型
            let clothClass4 = $('.clothClass4').text();       //裝備類型
            let storage = sessionStorage;
            
            console.log(clothName4);
            console.log(clothClass4);
            console.log(clothNo4);
            console.log(clothImg4);
            // console.log(memNo);
            console.log(starCoin);
            console.log(shopSpanLogin);
            
            // console.log(shopPopularity);
            // console.log(popularityAdd4);
            // console.log(popularityAll);
            
                if($id("coin").innerText==""){
                    alert("您尚未登入，請先登入或註冊會員～");
                }else{
                    if(starCoin>=shopSpanLogin){
                        let balance = starCoin - shopSpanLogin; //買道具扣錢
                        console.log(balance);
                    //--買道具增加聲量 及 買道具扣錢    
                    sessionStorage.setItem('clothNo4', clothNo4);
                    // sessionStorage.setItem('memNo', memNo);
                    sessionStorage.setItem('starCoin', starCoin);
                    sessionStorage.setItem('balance', balance);
                    sessionStorage.setItem('shopSpanLogin', shopSpanLogin);
                    // sessionStorage.setItem('popularityAll', popularityAll);

                    //==增加裝備庫欄位抓值
                
                    sessionStorage.setItem('clothImg4', clothImg4);
                    sessionStorage.setItem('clothClass4', clothClass4);
                    sessionStorage.setItem('clothName4', clothName4);
                    $.ajax({    
                        url: `php/shop.php`,
                        data: {
                            // memNo:memNo,
                            starCoin:starCoin,
                            balance:balance,
                            shopSpanLogin:shopSpanLogin,
                            // popularityAll:popularityAll,
                        },
                        type: 'GET',
                        success: function(data){
                            // alert(4444)
                        console.log(data);
                        $('#coin').text(balance);
                        sessionStorage.setItem('starCoin',balance);
                        //    $('#popularity').text(popularityAll);
                        //    sessionStorage.setItem('popularity',popularityAll);
                        },
                        
                    })
                    
                    $.ajax({    
                        url: `php/ShopInsert4.php`,
                        data: {
                            clothNo4:clothNo4,
                            clothImg4:clothImg4,
                            clothClass4:clothClass4,
                            clothName4:clothName4,
                            // starCoin:starCoin,
                            // balance:balance,
                            // citizenShop:citizenShop,
                            // popularityAll:popularityAll,
                        },
                        type: 'GET',
                        success: function(){
                            // alert(2222);
                    
                        
                        },
                        
                    })
                }else{
                        alert("宇宙幣不足，請至公民學堂賺取宇宙幣");
                };
            };
                    
        });





//購買商品增加支持度
        function shopPopu(){
            var xhr = new XMLHttpRequest();
            xhr.onload=function (){
                 if( xhr.status == 200 ){
                    shopPopu= JSON.parse(xhr.responseText);
                  console.log(shopPopu[0].popularity);
                    $(".toolTitle").append(`
                    <span class="shopPopularity">${shopPopu[0].popularity}</span>
                    `)
                      
                  }
      
            }
            
            var url = "php/shopPopu.php?";
            xhr.open("Get", url, true);
            xhr.send( null );
          }
          shopPopu();
        $("#addToBackpack").click(function(e){
    
            $.ajax({    
                url: `php/shopPopuAdd.php`,
                data: {
                },
                type: 'GET',
                success: function(){
                    // alert(2222);
            
                 
                },
            })
            
        })

        $("#addToBackpack2").click(function(e){
    
            $.ajax({    
                url: `php/shopPopuAdd.php`,
                data: {
                },
                type: 'GET',
                success: function(){
                    // alert(2222);
            
                 
                },
            })
            
        })

        $("#addToBackpack3").click(function(e){
    
            $.ajax({    
                url: `php/shopPopuAdd.php`,
                data: {
                },
                type: 'GET',
                success: function(){
                    // alert(2222);
            
                 
                },
            })
            
        })

        $("#addToBackpack4").click(function(e){
    
            $.ajax({    
                url: `php/shopPopuAdd.php`,
                data: {
                },
                type: 'GET',
                success: function(){
                    alert(2222);
            
                 
                },
            })
            
        })

