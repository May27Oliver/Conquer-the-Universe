/* ______ 一閃一閃亮晶晶 滿頁都是小星星 ______ */

/* 比較明顯的星星 */
function Star(x,y,r,color){
    this.x = x;
    this.y = y;
    this.r = r;
    this.rChange = 0.045;
    // this.vx = Math.floor(Math.random()*4+1);
    // this.vy = Math.floor(Math.random()*4+1);
    this.color = color;
}

//規劃星星原型
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
var canvasW = canvas.width = $(window).width();
var canvasH = canvas.height = $(document).height();

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
    context.clearRect(0,0,canvasW,canvasH);
    for(var i = 0; i < arrStars.length; i++){
      arrStars[i].render();
    }
    requestAnimationFrame(animate);
}

animate();

// $(window).resize(resizeCanvas);
// function resizeCanvas(){
// 	$('#starShine').attr('width', $(window).get(0).innerWidth);
// 	$('#starShine').attr('height', $(window).get(0).innerHeight);
// 	context.fillRect(0,0,canvas.width,canvas.height);
// };
// resizeCanvas();



/* 比較不明顯的星星
var canvas;
var context;
var screenH;
var screenW;
var stars = [];
var fps = 60;
var numStars = 500;

$('document').ready(function() {
  
  	// Calculate the screen size
	screenH = $(window).height();
	screenW = $(window).width();
	
	// Get the canvas
	canvas = $('#starShine');
	
	// Fill out the canvas
	canvas.attr('height', screenH);
	canvas.attr('width', screenW);
	context = canvas[0].getContext('2d');
	
	// Create all the stars
	for(var i = 0; i < numStars; i++) {
		var x = Math.round(Math.random() * screenW);
		var y = Math.round(Math.random() * screenH);
		var length = 1 + Math.random() * 1.5;
		var opacity = Math.random();
		
		// Create a new star and draw
		var star = new Star(x, y, length, opacity);
		
		// Add the the stars array
		stars.push(star);
	}
	
	animateInterval = setInterval(animate, 1000 / fps);
});

//Animate the canvas
function animate() {
	context.clearRect(0, 0, screenW, screenH);
	$.each(stars, function() {
		this.draw(context);
	});
}

//stop Animation
function stopAnimation()
{
     clearInterval(animateInterval);
}
//stopAnimation();
function Star(x, y, length, opacity) {
	this.x = parseInt(x);
	this.y = parseInt(y);
	this.length = parseInt(length);
	this.opacity = opacity;
	this.factor = 1;
	this.increment = Math.random() * .03;
}

Star.prototype.draw = function() {
	context.rotate((Math.PI * 1 / 10));
	
	// Save the context
	context.save();
	
	// move into the middle of the canvas, just to make room
	context.translate(this.x, this.y);
	
	// Change the opacity
	if(this.opacity > 1) {
		this.factor = -1;
	}
	else if(this.opacity <= 0) {
		this.factor = 1;
		
		this.x = Math.round(Math.random() * screenW);
		this.y = Math.round(Math.random() * screenH);
	}
		
	this.opacity += this.increment * this.factor;
	
	context.beginPath()
	for (var i = 5; i--;) {
		context.lineTo(0, this.length);
		context.translate(0, this.length);
		context.rotate((Math.PI * 2 / 10));
		context.lineTo(0, - this.length);
		context.translate(0, - this.length);
		context.rotate(-(Math.PI * 6 / 10));
	}
	context.lineTo(0, this.length);
	context.closePath();
	context.fillStyle = "rgba(255, 255, 200, " + this.opacity + ")";
	context.shadowBlur = 5;
	context.shadowColor = '#fff';
	context.fill();
	
	context.restore();
}
*/

//贊助商品區燈箱////

