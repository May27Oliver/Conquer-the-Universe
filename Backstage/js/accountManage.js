window.addEventListener('load',function(){
    //抓取會員資料
    getMember();
    function getMember(){
        var xhr = new XMLHttpRequest();
        xhr.onload=function (){
            if( xhr.status == 200 ){
                member = JSON.parse(xhr.responseText);

                for(i=0;i<member.length;i++){
                    $('#memData').append(`<tr>
                    <td>${member[i]['memNo']}</td>
                    <td>${member[i]['memName']}</td>
                    <td>${member[i]['memId']}</td>
                    <td>${member[i]['memPsw']}</td>
                    <td>${member[i]['email']}</td>
                    <td>${member[i]['starName']}</td>
                    <td>${member[i]['popularity']}</td>
                    <td>${member[i]['starCoin']}</td>
                    <td>
                    <button class="btn btn-pill btn-danger btn-xl mr-1 quizGameUpload" type="button" 
                      id="memDelete${i}" data-delete="${member[i]['memNo']}">刪除
                    </button>
                    </td>
                  </tr>`);

                    document.getElementById(`memDelete${i}`).onclick=byeMember;
                }
            }else{
                alert( xhr.status );
            }
        }
        var url = "php/getMember.php";
        xhr.open("Get", url, true);
        xhr.send( null );
    }
  
    function byeMember(e){
        $('#delBox').css('display','block');
        $('#delOk').click(function(){
            var memNo=e.target.getAttribute("data-delete");
            console.log(memNo);
            $.ajax({
                url: `php/deleteMem.php`,
                data: {
                    memNo,
                },
                type: 'GET',
                success: function () {
    
                },
            });
            $('#delBox').css('display','none');
            window.location.reload();
            alert("刪除成功");
        });
       
    };

    $('#delCancel').click(function(){
        $('#delBox').css('display','none');
    });
    
              

});