window.addEventListener('load',function(){
    //抓取檢舉資料
    getNewsReport();
    function getNewsReport(){
        var xhr = new XMLHttpRequest();
        xhr.onload=function (){
            if( xhr.status == 200 ){
                newsRe = JSON.parse(xhr.responseText);
                
                for(i=0;i<newsRe.length;i++){
                    $('#newsReData').append(`<tr>
                    <td>${newsRe[i]['newsReportNo']}</td>
                    <td>${newsRe[i]['newsNo']}</td>
                    <td>${newsRe[i]['newsContent']}</td>
                    <td>
                    <button class="btn btn-pill btn-danger btn-xl mr-1 quizGameUpload" type="button" 
                        id="newsReDel${i}" data-delete="${newsRe[i]['newsNo']}">刪除
                    </button>
                    </td>
                </tr>`);
                    document.getElementById(`newsReDel${i}`).onclick=byeNews;
                }
            }else{
                alert( xhr.status );
            }
        }
        var url = "php/getNewsReport.php";
        xhr.open("Get", url, true);
        xhr.send( null );
    }
  
    function byeNews(e){
      
        $('#delBox').css('display','block');
        $('#delOk').click(function(){
            var newsNo=e.target.getAttribute("data-delete");
            console.log(newsNo);
            $.ajax({
                url: 'php/deleteNews.php',
                data: {
                   newsNo,
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