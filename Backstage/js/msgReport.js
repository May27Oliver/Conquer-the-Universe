window.addEventListener('load',function(){
    //抓取檢舉資料
    getMsgReport();
    function getMsgReport(){
        var xhr = new XMLHttpRequest();
        xhr.onload=function (){
            if( xhr.status == 200 ){
                msgRe = JSON.parse(xhr.responseText);
                
                for(i=0;i<msgRe.length;i++){
                    $('#msgReData').append(`<tr>
                    <td>${msgRe[i]['msgReportNo']}</td>
                    <td>${msgRe[i]['newsMsgNo']}</td>
                    <td>${msgRe[i]['newsMsgContent']}</td>
                    <td>
                    <button class="btn btn-pill btn-danger btn-xl mr-1 quizGameUpload" type="button" 
                        id="msgReDel${i}" data-delete="${msgRe[i]['newsMsgNo']}">刪除
                    </button>
                    </td>
                </tr>`);
                    document.getElementById(`msgReDel${i}`).onclick=byeMsg;
                }
            }else{
                alert( xhr.status );
            }
        }
        var url = "php/getMsgReport.php";
        xhr.open("Get", url, true);
        xhr.send( null );
    }
  
    function byeMsg(e){
      
        $('#delBox').css('display','block');
        $('#delOk').click(function(){
            var msgNo=e.target.getAttribute("data-delete");
            console.log(msgNo);
            $.ajax({
                url: 'php/deleteMsg.php',
                data: {
                   msgNo,
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