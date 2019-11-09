var labels = ['選項一','選項二'];
var context = document.querySelectorAll('.votePie');

//console.log("抓到",context.length,"張照片");

    for(var i=0; i<context.length; i++){
        var ctx = context[i].getContext('2d');
        
        //要放入new Chart中data的值
        var x=Math.floor(Math.random()*100);
        var y=Math.floor(Math.random()*100);

        /*如果未投過票，圓餅圖要呈現灰色並打上問號
        if(){
            
        }else{
            
        }*/

        //把pieChart丟進for迴圈裡，並在context後面加上[i]即可
        var pieChart = new Chart(context[i], {
            type: 'pie',
            data : {
                labels: labels,
                datasets: [{
                    //預設資料
                    data: [x,y],
                    borderColor: "transparent",
                    backgroundColor: [
                    //資料顏色
                        "#e24f90",
                        "#644498",
                    ],
                }],
            }
        });
    }



//變動數據
function changeData()
{
    //隨機資料
    var randomNum=Math.floor(Math.random() *100) + 1;
    //將隨機資料載入至圖表中
    pieChart.data.datasets[0].data=[randomNum,100-randomNum];
    //更新
    pieChart.update();
}