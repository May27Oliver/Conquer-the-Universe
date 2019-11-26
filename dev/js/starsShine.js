/* ______ 一閃一閃亮晶晶 滿頁都是小星星 ______ */

//規劃星星原型
function Star(x,y,r,color){
    this.x = x;
    this.y = y;
    this.r = r;
    this.rChange = 0.045;
    this.color = color;
}
Star.prototype = {
	constructor: Star,
    render: function(){
		context.beginPath();
		context.arc(this.x, this.y, this.r, 0, 2*Math.PI, false);
		context.shadowBlur = 8; 
		context.shadowColor = "white";
		context.fillStyle = this.color;
		context.fill();
	},
	update: function(){
		if (this.r > 2 || this.r < .8){
			this.rChange = - this.rChange;
		}
		this.r += this.rChange;
	}
}

//連結HTML並設定Canvas為2d
var canvas = document.getElementById("starShine");
var context = canvas.getContext("2d");

//設定Canvas寬高
var canvasW = canvas.width = document.body.offsetWidth;
var canvasH = canvas.height = document.body.offsetHeight;

//規劃星星顏色
function randomColor(){
	var arrColors = ["ffffff", "ffecd3" , "bfcfff"];
	return "#"+arrColors[Math.floor((Math.random()*3))];
}

//規劃星星陣列與數量
var arrStars = [];
for(i = 0; i < 250; i++){
	var randX = Math.floor((Math.random()*canvasW)+1);
	var randY = Math.floor((Math.random()*canvasH)+1);
	var randR = Math.random() * 2.7 + .5;
	var star = new Star(randX, randY, randR, randomColor());
	arrStars.push(star);
}

//更動星星半徑
function update(){
	for(i = 0; i < arrStars.length; i ++){
		arrStars[i].update();
	}
}

//啟動星星
function animate(){
	update();
	//context.fillStyle = 'rgba(255, 255, 255, .1)';
	//context.fillRect(0,0,canvasW,canvasH);
	context = canvas.getContext("2d");
	context.clearRect(0,0,canvasW,canvasH);
	for(var i = 0; i < arrStars.length; i++){
		arrStars[i].render();
	}
	requestAnimationFrame(animate);
}
animate();

//Resize Canvas
$(document).ready(function(){
	$(window).resize(function(){
		$('#starShine').attr('width', $(screen).get(0).offsetWidth);
		$('#starShine').attr('height', $(document).get(0).offsetWidth);
		context.clearRect(0,0,canvas.width,canvas.height);
	});
});