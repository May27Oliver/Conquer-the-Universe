window.addEventListener('load',function(){
    //抓取檢舉資料
    getVoteReport();
    function getVoteReport(){
        var xhr = new XMLHttpRequest();
        xhr.onload=function (){
            if( xhr.status == 200 ){
                voteRe = JSON.parse(xhr.responseText);
                
                for(i=0;i<voteRe.length;i++){
                    $('#voteReData').append(`<tr>
                    <td>${voteRe[i]['votReportNo']}</td>
                    <td>${voteRe[i]['votNo']}</td>
                    <td>${voteRe[i]['votReportMsg']}</td>
                    <td>
                    <button class="btn btn-pill btn-danger btn-xl mr-1 quizGameUpload" type="button" 
                        id="voteReDel${i}" data-delete="${voteRe[i]['votNo']}">刪除
                    </button>
                    </td>
                </tr>`);
                    document.getElementById(`voteReDel${i}`).onclick=byeVote;
                }
            }else{
                alert( xhr.status );
            }
        }
        var url = "php/getVoteReport.php";
        xhr.open("Get", url, true);
        xhr.send( null );
    }
  
    function byeVote(e){
      
        $('#delBox').css('display','block');
        $('#delOk').click(function(){
            var voteNo=e.target.getAttribute("data-delete");
            console.log(voteNo);
            $.ajax({
                url: 'php/deleteVote.php',
                data: {
                   voteNo,
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