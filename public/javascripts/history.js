"use strict"
//toggle info
let info = document.getElementsByClassName("Info")[0]
let intro = document.getElementsByClassName("IntroSection")[0]

info.addEventListener("click", function() {
	intro.classList.toggle("visible")
})
//timelinearrow
let section = document.getElementsByClassName('SocialOrganizationSection')[0]
let wrapper = document.getElementsByClassName('Wrapper')[0]
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var running = false;

var triangle = {
  x: 10,
  draw: function() {

    ctx.beginPath();
    ctx.moveTo(25, this.x);
    ctx.lineTo(50, this.x + 25);
    ctx.lineTo(25, this.x + 50);
    ctx.fillStyle = 'black';
    ctx.fill();
  }
};
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  triangle.draw()
}
function clear() {
  ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  ctx.fillRect(0,0,canvas.width,canvas.height);
}


wrapper.addEventListener('mousemove', function(e) {
  if (!running) {
    clear()
    triangle.x = e.offsetY;
    resizeCanvas();
    console.log(e.offsetY);
  }

}); 

resizeCanvas()
