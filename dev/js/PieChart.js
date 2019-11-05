var labels = ['選項一','選項二'];
var ctx = document.getElementById('votePie').getContext('2d');
var pieChart = new Chart(ctx, {
    type: 'pie',
    data : {
        labels: labels,
        datasets: [{
            //預設資料
            data: [10,90],
            borderColor: "transparent",
            backgroundColor: [
            //資料顏色
                "#e24f90",
                "#644498",
            ],
        }],
    }
});

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